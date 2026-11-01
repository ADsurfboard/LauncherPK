# 启动器晋级赛

**前情提要：2026 年 10 月 20 日，PCL 发布 [2.99.0.0](https://github.com/Meloong-Git/PCL/releases/tag/2.99.0.0)，"为遵守相关法律法规"不再提供 MC 下载功能。PCL 本体的核心用途基本没了，PCL 社区版、HMCL、Zalith Launcher 2 等启动器在同一天前后陆续跟进或回撤了中国大陆地区的下载限制。本项目记录各 Minecraft 启动器的维护状态和中国大陆下载可用性，方便找一个还能下游戏的启动器。**

本项目的内容收集自各项目的发布说明、PR 与提交记录，不代表参与本项目的任何个人或组织的观点，以各启动器的官方说明为准。

## 页面功能

- **积分榜**：默认按创建时间从早到晚排列，每个启动器标注中国大陆下载是"可下载 / 大陆受限 / 已移除 / 未知"。点表头可改按名称、下载状态排序，点行展开详情和带来源链接的变动记录。
- **筛选**：按分组（PCL 系 / 桌面端 / 移动端）、下载状态、平台筛选，支持搜索，默认隐藏已归档项目。顶部比分条也可以点。
- **对阵**：点行尾的 `PK` 选 2–4 个启动器，底栏点"对阵"打开对比表，有差异的行标 `≠`。
- **事件后出现**：创建或首次公开晚于 PCL 2.99.0.0 的启动器会标“新”；按创建时间排序时，积分榜在 2026/10/20 处插入分隔线。
- **大事记**：汇总所有 `downloadLog`，按日期列出下载限制的变化。
- **GitHub 数据**：点"加载 GitHub 星标"会从 GitHub API 实时拉取星标数和最近推送时间，并多出一列可排序（未登录接口每小时限 60 次）。

在线访问：https://cnklpz.github.io/LauncherPK/

纯静态页面，无构建步骤，直接打开 `index.html` 或部署到任意静态托管即可。推送到 `master` 后 GitHub Pages 会自动更新。

## 目录

```
index.html              页面
assets/style.css        样式（自动跟随系统浅色 / 深色）
assets/app.js           渲染、筛选、PK 对比
data/launchers.js       全部数据
scripts/check.mjs       对照 GitHub 核对数据
.github/workflows/      每周一自动运行 check.mjs
```

## 贡献教程

1. [Fork 本仓库](https://github.com/cnklpz/LauncherPK/fork)，并确认已通过 **Sync fork** 同步到最新。
2. 修改 [data/launchers.js](data/launchers.js)。
3. 本地运行 `node scripts/check.mjs`，确认没有"需要核对"的提示。
4. 提交 PR，说明改了什么，并附上来源链接。

**新增数据时，不要忘了每条数据之间的英文逗号。** 页面会自动按 `createdAt` 排序，但为了方便维护，请在各分组内也按时间顺序添加。

### `SITE`：站点配置

| 键 | 类型 | 说明 |
| - | - | - |
| `eventAt` | String | 计时起点，格式 `yyyy/MM/dd HH:mm:ss GMT+0800`。 |
| `eventRef` | String | 事件来源链接。 |
| `repo` | String | 本项目仓库 `owner/name`，留空则页面不显示仓库链接。 |
| `dataUpdatedAt` | String | 数据最后整理日期。 |

### `db_launchers`：晋级赛选手

| 键 | 类型 | 说明 |
| - | - | - |
| `name` | String | 启动器名称。 |
| `group` | String | 分组：<br>`pcl` - PCL 本体及其分支、重写<br>`desktop` - 其他桌面端启动器<br>`mobile` - 安卓 / iOS 启动器 |
| `dev` | String | 开发者或团队。 |
| `url` | String | 官网；没有官网填仓库地址，都没有填宣传视频地址。不要填网盘直链。 |
| `repo` | String | GitHub 仓库 `owner/name`，闭源填 `""`。 |
| `state` | String | 维护状态：<br>`active` - 维护中<br>`dev` - 开发中，尚无正式版<br>`archived` - 已归档 / 停止维护<br>`unknown` - 未知 |
| `download` | String | **中国大陆地区**的游戏下载可用性：<br>`ok` - 未发现限制<br>`limited` - 部分或全部禁用（如按地区禁用本体 / 整合包下载）<br>`removed` - 下载功能已从启动器中移除<br>`unknown` - 未确认 |
| `platforms` | Array | 支持平台，可选 `windows` `macos` `linux` `android` `ios`。 |
| `license` | String | 开源协议，如 `GPL-3.0`；闭源填 `闭源`，非标准协议填 `见仓库`。 |
| `lang` | String | 主要开发语言。 |
| `features` | Array | 可选功能标记：<br>`mirror` - 内置国内下载镜像源（如 BMCLAPI）<br>`authlib` - 支持外置登录（authlib-injector） |
| `createdAt` | String | 有 `repo` 时填仓库创建日期 `yyyy/MM/dd`，以 GitHub 显示为准，`check.mjs` 会核对；没有公开仓库时填首次公开日期（如首个宣传视频发布日），页面显示为“首次公开”，并在 `note` 注明。晚于 `SITE.eventAt` 的条目会自动标“新”。 |
| `updatedAt` | String | 本条数据最后更新日期。 |
| `downloadLog` | Array | 下载相关变动，见下文。 |
| `note` | String | 备注。 |
| `reference` | Array | 参考资料，`{ title, url }` 数组，会显示在详情底部。 |

`downloadLog` 中每条记录：

| 键 | 类型 | 说明 |
| - | - | - |
| `date` | String | 日期 `yyyy/MM/dd`。 |
| `text` | String | 发生了什么，写明版本号或 PR 号。 |
| `ref` | String | 来源链接（发布说明、PR、公告）。**必填。** |

示例：

```js
{
    name: "PCL 社区版",
    group: "pcl",
    dev: "PCL-Community",
    url: "https://ce.pclc.cc",
    repo: "PCL-Community/PCL-CE",
    state: "active",
    download: "limited",
    platforms: ["windows"],
    license: "Apache-2.0",
    lang: "C#",
    features: ["mirror", "authlib"],
    createdAt: "2024/04/14",
    updatedAt: "2026/11/02",
    downloadLog: [
        {
            date: "2026/10/20",
            text: "#3673：中国大陆地区暂时禁用 MC 本体、整合包的下载、安装与补全。",
            ref: "https://github.com/PCL-Community/PCL-CE/pull/3673"
        }
    ],
    note: "由社区开发者维护的 PCL 分支（PCL CE）。",
    reference: []
}
```

### `db_launchers_ex`：场外选手

不是第三方启动器、但和下载有关的条目（官方启动器、下载镜像等）。

| 键 | 类型 | 说明 |
| - | - | - |
| `name` | String | 名称。 |
| `url` | String | 链接。 |
| `updatedAt` | String | 最后更新日期。 |
| `note` | String | 备注。 |

## 致谢

本项目的灵感来自 [LYOfficial/BBSPK（新兴我的世界论坛晋级赛）](https://github.com/LYOfficial/BBSPK)。
