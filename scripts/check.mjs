// 对照 GitHub 检查 data/launchers.js：仓库是否存在、是否归档、创建日期、最新发布。
// 用法：node scripts/check.mjs    （设置 GITHUB_TOKEN 可避免 API 频率限制）

import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const src = await readFile(new URL('../data/launchers.js', import.meta.url), 'utf8');
const ctx = {};
vm.runInNewContext(`${src}\nthis.db_launchers = db_launchers;`, ctx);

const headers = { 'User-Agent': 'launcher-pk-check', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const api = async (path) => {
    const res = await fetch(`https://api.github.com/${path}`, { headers });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
    return res.json();
};

const day = (iso) => (iso || '').slice(0, 10).replace(/-/g, '/');
const warnings = [];
const rows = [];

for (const e of ctx.db_launchers) {
    if (!e.repo) continue;
    const repo = await api(`repos/${e.repo}`);
    if (!repo) {
        warnings.push(`${e.name}: 仓库 ${e.repo} 不存在`);
        continue;
    }
    if (repo.full_name.toLowerCase() !== e.repo.toLowerCase()) {
        warnings.push(`${e.name}: 仓库已迁移到 ${repo.full_name}`);
    }
    if (repo.archived && e.state !== 'archived') warnings.push(`${e.name}: 仓库已归档，但 state 为 ${e.state}`);
    if (!repo.archived && e.state === 'archived') warnings.push(`${e.name}: state 为 archived，但仓库未归档`);
    if (day(repo.created_at) !== e.createdAt) {
        warnings.push(`${e.name}: createdAt ${e.createdAt} 与仓库创建日期 ${day(repo.created_at)} 不一致`);
    }
    const release = await api(`repos/${e.repo}/releases/latest`);
    rows.push({
        name: e.name,
        release: release ? `${release.tag_name} (${day(release.published_at)})` : '-',
        pushed: day(repo.pushed_at),
        stars: repo.stargazers_count
    });
}

console.table(rows);
if (warnings.length) {
    console.log('\n需要核对：');
    for (const w of warnings) console.log(`- ${w}`);
    if (process.env.GITHUB_STEP_SUMMARY) {
        const { appendFile } = await import('node:fs/promises');
        await appendFile(process.env.GITHUB_STEP_SUMMARY, `## 需要核对\n\n${warnings.map((w) => `- ${w}`).join('\n')}\n`);
    }
} else {
    console.log('\n数据与 GitHub 一致。');
}
