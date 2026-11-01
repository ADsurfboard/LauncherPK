(() => {
    'use strict';

    const DOWNLOAD = {
        ok: { label: '可下载', title: '未发现针对中国大陆地区的下载限制', rank: 0 },
        limited: { label: '大陆受限', title: '中国大陆地区的下载功能被部分或全部禁用', rank: 1 },
        removed: { label: '已移除', title: '下载功能已从启动器中移除', rank: 2 },
        unknown: { label: '未知', title: '尚未确认', rank: 3 }
    };
    const STATE = {
        active: '维护中',
        dev: '开发中',
        archived: '已归档',
        unknown: '状态未知'
    };
    const PLATFORM = {
        windows: 'Win',
        macos: 'Mac',
        linux: 'Linux',
        android: '安卓',
        ios: 'iOS'
    };
    const FEATURE = {
        mirror: '国内镜像',
        authlib: '外置登录'
    };
    const COLUMNS = [
        { key: 'rank', label: '#', cls: 'c-rank' },
        { key: 'name', label: '启动器', sort: 'name' },
        { key: 'group', label: '分组', cls: 'c-group' },
        { key: 'download', label: '大陆下载', sort: 'download' },
        { key: 'plat', label: '平台', cls: 'c-plat' },
        { key: 'feat', label: '功能', cls: 'c-feat' },
        { key: 'created', label: '创建', cls: 'c-date', sort: 'created' },
        { key: 'pk', label: '', cls: 'c-pk' }
    ];
    const PK_MAX = 4;
    const GH_CACHE_KEY = 'launcherpk.gh.v1';

    const $ = (sel, root = document) => root.querySelector(sel);

    const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);

    const toTime = (d) => {
        const t = new Date(d).getTime();
        return Number.isNaN(t) ? Infinity : t;
    };

    const safeUrl = (u) => {
        try {
            const url = new URL(u);
            return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '#';
        } catch (e) {
            return '#';
        }
    };

    const launchers = db_launchers.map((e, i) => ({
        group: 'desktop',
        state: 'unknown',
        download: 'unknown',
        platforms: [],
        features: [],
        downloadLog: [],
        reference: [],
        note: '',
        ...e,
        id: 'l' + i
    }));
    const byId = new Map(launchers.map((e) => [e.id, e]));
    const eventDay = toTime(SITE.eventAt.slice(0, 10));
    const isNew = (e) => toTime(e.createdAt) >= eventDay && toTime(e.createdAt) !== Infinity;

    const filter = {
        group: 'all',
        download: new Set(),
        platform: new Set(),
        archived: false,
        search: '',
        sort: 'created',
        onlyArchived: false,
        onlyNew: false
    };
    const pk = [];
    const open = new Set();
    let gh = loadGhCache();

    // ---------- 报头 ----------

    function renderHero() {
        const d = new Date(SITE.eventAt);
        const now = new Date();
        const days = Math.max(0, Math.floor((now - d) / 86400000));
        $('#issue-line').textContent = `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日 · 赛事第 ${days + 1} 天`;
        $('#event-date').textContent = `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
        $('#event-date').dateTime = d.toISOString();
        $('#event-ref').href = safeUrl(SITE.eventRef);
        $('#data-date').textContent = SITE.dataUpdatedAt;
        $('#new-count').textContent = launchers.filter(isNew).length;

        const start = d.getTime();
        const cells = {};
        document.querySelectorAll('.clock [data-k]').forEach((el) => { cells[el.dataset.k] = el; });
        const pad = (n) => String(n).padStart(2, '0');
        const tick = () => {
            const s = Math.max(0, Math.floor((Date.now() - start) / 1000));
            cells.d.textContent = Math.floor(s / 86400);
            cells.h.textContent = pad(Math.floor(s / 3600) % 24);
            cells.m.textContent = pad(Math.floor(s / 60) % 60);
            cells.s.textContent = pad(s % 60);
        };
        tick();
        setInterval(tick, 1000);
    }

    function renderTally() {
        const count = (fn) => launchers.filter(fn).length;
        const items = [
            { cls: '', value: launchers.length, label: '收录', act: () => resetFilters(true) },
            { cls: 'ok', value: count((e) => e.download === 'ok'), label: '可下载', act: () => onlyDownload('ok') },
            { cls: 'limited', value: count((e) => e.download === 'limited'), label: '大陆受限', act: () => onlyDownload('limited') },
            { cls: 'removed', value: count((e) => e.download === 'removed'), label: '已移除下载', act: () => onlyDownload('removed') },
            { cls: 'new', value: count(isNew), label: '事件后出现', act: () => onlyNew() },
            { cls: '', value: count((e) => e.state === 'archived'), label: '已归档', act: () => onlyArchived() }
        ];
        const root = $('#tally');
        root.innerHTML = items.map((e, i) => `
            <button class="${e.cls}" type="button" data-i="${i}">
                <span class="tally-value">${e.value}</span>
                <span class="tally-label">${e.label}</span>
            </button>`).join('');
        root.addEventListener('click', (ev) => {
            const btn = ev.target.closest('button');
            if (!btn) return;
            items[btn.dataset.i].act();
            $('#board').scrollIntoView();
        });
    }

    // ---------- 筛选 ----------

    function renderFilters() {
        const groups = { all: '全部', ...GROUPS };
        const groupCount = (k) => k === 'all' ? launchers.length : launchers.filter((e) => e.group === k).length;
        $('#f-group').innerHTML = Object.entries(groups).map(([k, v]) =>
            `<button type="button" role="tab" data-v="${k}" aria-selected="${k === filter.group}">${v}<span class="tab-n">${groupCount(k)}</span></button>`
        ).join('');

        $('#f-download').insertAdjacentHTML('beforeend', Object.entries(DOWNLOAD).map(([k, v]) =>
            `<button type="button" data-v="${k}" aria-pressed="false" title="${v.title}">${v.label}</button>`
        ).join(''));

        const usedPlatforms = Object.keys(PLATFORM).filter((p) => launchers.some((e) => e.platforms.includes(p)));
        $('#f-platform').insertAdjacentHTML('beforeend', usedPlatforms.map((k) =>
            `<button type="button" data-v="${k}" aria-pressed="false">${PLATFORM[k]}</button>`
        ).join(''));

        $('#f-group').addEventListener('click', (ev) => {
            const b = ev.target.closest('button');
            if (!b) return;
            filter.group = b.dataset.v;
            update();
        });
        const toggleHandler = (set) => (ev) => {
            const b = ev.target.closest('button');
            if (!b) return;
            set.has(b.dataset.v) ? set.delete(b.dataset.v) : set.add(b.dataset.v);
            update();
        };
        $('#f-download').addEventListener('click', toggleHandler(filter.download));
        $('#f-platform').addEventListener('click', toggleHandler(filter.platform));
        $('#f-archived').addEventListener('change', (ev) => {
            filter.archived = ev.target.checked;
            update();
        });
        $('#f-search').addEventListener('input', (ev) => {
            filter.search = ev.target.value.trim().toLowerCase();
            update();
        });
    }

    function update() {
        filter.onlyArchived = false;
        filter.onlyNew = false;
        syncFilterUI();
        renderBoard();
    }

    function syncFilterUI() {
        document.querySelectorAll('#f-group button').forEach((b) => {
            b.setAttribute('aria-selected', b.dataset.v === filter.group);
        });
        document.querySelectorAll('#f-download button').forEach((b) => {
            b.setAttribute('aria-pressed', filter.download.has(b.dataset.v));
        });
        document.querySelectorAll('#f-platform button').forEach((b) => {
            b.setAttribute('aria-pressed', filter.platform.has(b.dataset.v));
        });
        $('#f-archived').checked = filter.archived;
        $('#f-search').value = filter.search;
    }

    function resetFilters(archived) {
        filter.group = 'all';
        filter.download.clear();
        filter.platform.clear();
        filter.archived = archived;
        filter.search = '';
        update();
    }

    function onlyDownload(k) {
        resetFilters(false);
        filter.download.add(k);
        update();
    }

    function onlyArchived() {
        resetFilters(true);
        filter.onlyArchived = true;
        renderBoard();
    }

    function onlyNew() {
        resetFilters(true);
        filter.onlyNew = true;
        filter.sort = 'created';
        renderBoard();
    }

    function visibleLaunchers() {
        const list = launchers.filter((e) => {
            if (filter.onlyArchived) return e.state === 'archived';
            if (filter.onlyNew) return isNew(e);
            if (filter.group !== 'all' && e.group !== filter.group) return false;
            if (!filter.archived && e.state === 'archived') return false;
            if (filter.download.size && !filter.download.has(e.download)) return false;
            if (filter.platform.size && !e.platforms.some((p) => filter.platform.has(p))) return false;
            if (filter.search) {
                const hay = [e.name, e.dev, e.lang, e.repo, e.note, GROUPS[e.group]].join(' ').toLowerCase();
                if (!hay.includes(filter.search)) return false;
            }
            return true;
        });
        const sorters = {
            download: (a, b) => (DOWNLOAD[a.download]?.rank ?? 9) - (DOWNLOAD[b.download]?.rank ?? 9)
                || (a.state === 'archived') - (b.state === 'archived')
                || (gh ? (gh[b.repo]?.stars ?? -1) - (gh[a.repo]?.stars ?? -1) : 0)
                || toTime(a.createdAt) - toTime(b.createdAt),
            created: (a, b) => toTime(a.createdAt) - toTime(b.createdAt),
            name: (a, b) => a.name.localeCompare(b.name, 'zh-CN'),
            stars: (a, b) => (gh?.[b.repo]?.stars ?? -1) - (gh?.[a.repo]?.stars ?? -1)
        };
        return list.sort(sorters[filter.sort] || sorters.download);
    }

    // ---------- 积分榜 ----------

    function dlTag(e) {
        const d = DOWNLOAD[e.download] || DOWNLOAD.unknown;
        return `<span class="dl ${esc(e.download)}" title="${d.title}">${d.label}</span>`;
    }

    function renderHead() {
        const cols = [...COLUMNS];
        if (gh) cols.splice(cols.length - 1, 0, { key: 'stars', label: '★', cls: 'c-date', sort: 'stars' });
        $('#board-head').innerHTML = `<tr>${cols.map((c) => `<th class="${c.cls || ''}">${c.sort
            ? `<button type="button" data-sort="${c.sort}" ${filter.sort === c.sort ? `aria-sort="${c.sort === 'download' || c.sort === 'stars' ? 'descending' : 'ascending'}"` : ''}>${c.label}</button>`
            : c.label}</th>`).join('')}</tr>`;
        return cols.length;
    }

    function row(e, i) {
        const inPk = pk.includes(e.id);
        const isOpen = open.has(e.id);
        const info = gh?.[e.repo];
        return `<tr class="row ${e.state === 'archived' ? 'is-archived' : ''} ${isOpen ? 'open' : ''}" data-id="${e.id}">
            <td class="c-rank">${String(i + 1).padStart(2, '0')}</td>
            <td class="name">
                <button type="button" class="toggle" aria-expanded="${isOpen}"><b>${esc(e.name)}</b>${isNew(e) ? '<i class="new-tag" title="创建于 PCL 移除下载之后">新</i>' : ''}</button>
                <small>${esc(e.dev)}</small>
            </td>
            <td class="c-group">${esc(GROUPS[e.group] || e.group)}</td>
            <td>${dlTag(e)}<span class="st">${STATE[e.state] || STATE.unknown}</span></td>
            <td class="c-plat">${e.platforms.map((p) => PLATFORM[p] || esc(p)).join(' / ') || '—'}</td>
            <td class="c-feat">${e.features.map((f) => FEATURE[f]).filter(Boolean).join('、') || '—'}</td>
            <td class="c-date">${esc(e.createdAt || '—')}</td>
            ${gh ? `<td class="c-date">${info ? info.stars.toLocaleString() : '—'}</td>` : ''}
            <td class="c-pk"><button type="button" class="pk-btn" data-pk="${e.id}" aria-pressed="${inPk}">${inPk ? '✓ PK' : 'PK'}</button></td>
        </tr>${isOpen ? detail(e) : ''}`;
    }

    function detail(e) {
        const info = gh?.[e.repo];
        const repoUrl = e.repo ? `https://github.com/${e.repo}` : '';
        return `<tr class="detail" data-detail="${e.id}"><td colspan="99">
            <div class="detail-grid">
                <dl class="specs">
                    <dt>平台</dt><dd>${e.platforms.map((p) => PLATFORM[p] || esc(p)).join(' / ') || '—'}</dd>
                    <dt>语言</dt><dd>${esc(e.lang || '—')}</dd>
                    <dt>协议</dt><dd>${esc(e.license || '—')}</dd>
                    <dt>功能</dt><dd>${e.features.map((f) => FEATURE[f]).filter(Boolean).join('、') || '—'}</dd>
                    <dt>${e.repo ? '仓库创建' : '首次公开'}</dt><dd class="num">${esc(e.createdAt || '—')}</dd>
                    ${info ? `<dt>GitHub</dt><dd class="num">★ ${info.stars.toLocaleString()} · 推送 ${esc(info.pushed)}</dd>` : ''}
                </dl>
                <div>
                    ${e.note ? `<p class="note">${esc(e.note)}</p>` : ''}
                    ${e.downloadLog.length ? `<ol class="log">${e.downloadLog.map((l) => `
                        <li><time>${esc(l.date)}</time>${esc(l.text)}${l.ref ? ` <a href="${esc(safeUrl(l.ref))}" target="_blank" rel="noopener">来源</a>` : ''}</li>`).join('')}
                    </ol>` : ''}
                    <div class="links">
                        <a href="${esc(safeUrl(e.url))}" target="_blank" rel="noopener">官网</a>
                        ${repoUrl ? `<a href="${esc(repoUrl)}" target="_blank" rel="noopener">${esc(e.repo)}</a>` : ''}
                        ${e.reference.map((r) => `<a href="${esc(safeUrl(r.url))}" target="_blank" rel="noopener">${esc(r.title)}</a>`).join('')}
                    </div>
                </div>
            </div>
        </td></tr>`;
    }

    function renderBoard() {
        const span = renderHead();
        const list = visibleLaunchers();
        let rows = list.map(row);
        if (filter.sort === 'created') {
            const at = list.findIndex(isNew);
            if (at > 0) {
                rows.splice(at, 0, `<tr class="divider"><td colspan="${span}"><div><span>${esc(SITE.eventAt.slice(0, 10))} · PCL 移除下载功能</span></div></td></tr>`);
            }
        }
        $('#board-body').innerHTML = list.length
            ? rows.join('')
            : `<tr class="empty"><td colspan="${span}">没有符合条件的启动器</td></tr>`;
        const hidden = !filter.archived && !filter.onlyArchived
            ? launchers.filter((e) => e.state === 'archived').length : 0;
        $('#result-count').textContent = filter.onlyArchived
            ? `共 ${list.length} 个已归档项目`
            : filter.onlyNew
            ? `共 ${list.length} 个在 PCL 移除下载后创建或首次公开的启动器`
            : `显示 ${list.length} / ${launchers.length}${hidden ? `，已隐藏 ${hidden} 个已归档项目` : ''}。点击行查看详情。`;
    }

    function bindBoard() {
        $('#board-head').addEventListener('click', (ev) => {
            const b = ev.target.closest('[data-sort]');
            if (!b) return;
            filter.sort = b.dataset.sort;
            renderBoard();
        });
        $('#board-body').addEventListener('click', (ev) => {
            const pkBtn = ev.target.closest('[data-pk]');
            if (pkBtn) {
                togglePk(pkBtn.dataset.pk);
                return;
            }
            if (ev.target.closest('a')) return;
            const tr = ev.target.closest('tr.row');
            if (!tr) return;
            const id = tr.dataset.id;
            open.has(id) ? open.delete(id) : open.add(id);
            renderBoard();
        });
    }

    // ---------- 大事记 / 场外 ----------

    function renderTimeline() {
        const events = launchers.flatMap((e) => e.downloadLog.map((l) => ({ ...l, launcher: e })));
        events.sort((a, b) => toTime(a.date) - toTime(b.date));
        $('#timeline-list').innerHTML = events.map((e) => `
            <li>
                <time>${esc(e.date)}</time>
                <div>
                    <b>${esc(e.launcher.name)}</b><span class="tag ${esc(e.launcher.download)}">现${(DOWNLOAD[e.launcher.download] || DOWNLOAD.unknown).label}</span>
                    ${e.ref ? `<a href="${esc(safeUrl(e.ref))}" target="_blank" rel="noopener">来源</a>` : ''}
                    <p>${esc(e.text)}</p>
                </div>
            </li>`).join('');
    }

    function renderExtra() {
        $('#extra-list').innerHTML = db_launchers_ex.map((e) => `
            <li>
                <a href="${esc(safeUrl(e.url))}" target="_blank" rel="noopener">${esc(e.name)}</a>
                <p>${esc(e.note)}</p>
            </li>`).join('');

        const links = $('#contribute-links');
        if (SITE.repo) {
            const base = `https://github.com/${SITE.repo}`;
            links.innerHTML = `<a href="${base}" target="_blank" rel="noopener">GitHub 仓库</a> · <a href="${base}/fork" target="_blank" rel="noopener">Fork 并修改</a> · <a href="${base}/issues/new" target="_blank" rel="noopener">报告错误</a>`;
        } else {
            links.remove();
        }
    }

    // ---------- 对阵 ----------

    function togglePk(id) {
        const i = pk.indexOf(id);
        if (i >= 0) {
            pk.splice(i, 1);
        } else {
            if (pk.length >= PK_MAX) pk.shift();
            pk.push(id);
        }
        renderPkTray();
        renderBoard();
    }

    function renderPkTray() {
        $('#pk-tray').hidden = pk.length === 0;
        $('#pk-slots').innerHTML = pk.map((id) => `
            <span class="pk-slot">${esc(byId.get(id).name)}<button type="button" data-rm="${id}" aria-label="移除">×</button></span>`
        ).join('<span class="vs">VS</span>');
        $('#pk-open').disabled = pk.length < 2;
        $('#pk-open').textContent = pk.length < 2 ? `再选 ${2 - pk.length} 个` : '对阵';
    }

    function renderPkTable() {
        const items = pk.map((id) => byId.get(id));
        const yesNo = (v) => v ? '<span class="yes">●</span>' : '<span class="no">—</span>';
        const rows = [
            ['分组', (e) => esc(GROUPS[e.group] || e.group), (e) => e.group],
            ['开发者', (e) => esc(e.dev)],
            ['大陆下载', (e) => dlTag(e), (e) => e.download],
            ['维护状态', (e) => STATE[e.state] || STATE.unknown, (e) => e.state],
            ...Object.entries(PLATFORM).map(([k, v]) => [v, (e) => yesNo(e.platforms.includes(k)), (e) => e.platforms.includes(k)]),
            ...Object.entries(FEATURE).map(([k, v]) => [v, (e) => yesNo(e.features.includes(k)), (e) => e.features.includes(k)]),
            ['语言', (e) => esc(e.lang || '—')],
            ['协议', (e) => esc(e.license || '—')],
            ['仓库创建', (e) => `<span class="num">${esc(e.createdAt || '—')}</span>`],
            ['GitHub 星标', (e) => gh?.[e.repo] ? `<span class="num">${gh[e.repo].stars.toLocaleString()}</span>` : '—'],
            ['最近推送', (e) => gh?.[e.repo] ? `<span class="num">${esc(gh[e.repo].pushed)}</span>` : '—'],
            ['下载相关变动', (e) => e.downloadLog.length
                ? e.downloadLog.map((l) => `<div><span class="num">${esc(l.date)}</span> ${esc(l.text)}</div>`).join('')
                : '—']
        ];
        $('#pk-table').innerHTML = `
            <thead><tr><th></th>${items.map((e) => `<th>${esc(e.name)}</th>`).join('')}</tr></thead>
            <tbody>${rows.map(([label, cell, key]) => {
                const diff = key && new Set(items.map(key)).size > 1;
                return `<tr class="${diff ? 'diff' : ''}"><th>${label}</th>${items.map((e) => `<td>${cell(e)}</td>`).join('')}</tr>`;
            }).join('')}</tbody>`;
    }

    function bindPk() {
        $('#pk-slots').addEventListener('click', (ev) => {
            const b = ev.target.closest('[data-rm]');
            if (b) togglePk(b.dataset.rm);
        });
        $('#pk-clear').addEventListener('click', () => {
            pk.length = 0;
            renderPkTray();
            renderBoard();
        });
        $('#pk-open').addEventListener('click', () => {
            renderPkTable();
            $('#pk-dialog').showModal();
        });
        $('#pk-close').addEventListener('click', () => $('#pk-dialog').close());
        $('#pk-dialog').addEventListener('click', (ev) => {
            if (ev.target === ev.currentTarget) ev.currentTarget.close();
        });
    }

    // ---------- GitHub 数据 ----------

    function loadGhCache() {
        try {
            const raw = sessionStorage.getItem(GH_CACHE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    async function loadGitHub() {
        const btn = $('#btn-gh');
        btn.disabled = true;
        btn.textContent = '加载中…';
        const repos = [...new Set(launchers.map((e) => e.repo).filter(Boolean))];
        const result = {};
        let failed = 0;
        await Promise.all(repos.map(async (repo) => {
            try {
                const res = await fetch(`https://api.github.com/repos/${repo}`);
                if (!res.ok) throw new Error(res.status);
                const j = await res.json();
                result[repo] = {
                    stars: j.stargazers_count,
                    pushed: (j.pushed_at || '').slice(0, 10).replace(/-/g, '/'),
                    archived: j.archived
                };
            } catch (e) {
                failed++;
            }
        }));
        if (Object.keys(result).length) {
            gh = result;
            try { sessionStorage.setItem(GH_CACHE_KEY, JSON.stringify(gh)); } catch (e) { /* 忽略 */ }
        }
        btn.disabled = false;
        btn.textContent = failed
            ? `${failed} 个仓库加载失败（可能触发 API 频率限制），重试`
            : '刷新 GitHub 星标';
        renderBoard();
    }

    // ---------- 启动 ----------

    renderHero();
    renderTally();
    renderFilters();
    bindBoard();
    renderBoard();
    renderTimeline();
    renderExtra();
    bindPk();
    renderPkTray();
    if (gh) $('#btn-gh').textContent = '刷新 GitHub 星标';
    $('#btn-gh').addEventListener('click', loadGitHub);
})();
