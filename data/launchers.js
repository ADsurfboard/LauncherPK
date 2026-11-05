// ============================================================
// 启动器晋级赛 · 数据文件
// 字段说明见 README.md。新增条目时注意条目之间的英文逗号。
// ============================================================

const SITE = {
    // PCL 2.99.0.0 发布日期，计时器从这里开始
    eventAt: "2026/10/20 00:00:00 GMT+0800",
    eventRef: "https://github.com/Meloong-Git/PCL/releases/tag/2.99.0.0",
    // 本项目仓库，格式 owner/name，留空则不显示相关链接
    repo: "cnklpz/LauncherPK",
    dataUpdatedAt: "2026/11/03"
};

// 分组
const GROUPS = {
    pcl: "PCL 系",
    desktop: "桌面端",
    mobile: "移动端"
};

// ------------------------------------------------------------
// 晋级赛选手
// ------------------------------------------------------------
const db_launchers = [
    // ---------------- PCL 系 ----------------
    {
        name: "PCL",
        group: "pcl",
        dev: "龙腾猫跃",
        url: "https://meloong.com/PCL",
        repo: "Meloong-Git/PCL",
        state: "active",
        download: "removed",
        platforms: ["windows"],
        license: "见仓库",
        lang: "VB.NET",
        features: ["mirror", "authlib"],
        createdAt: "2022/07/26",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/20",
                text: "2.99.0.0：为遵守相关法律法规，不再提供 MC 下载功能。",
                ref: "https://github.com/Meloong-Git/PCL/releases/tag/2.99.0.0"
            }
        ],
        note: "Plain Craft Launcher 本体。仓库原为 Hex-Dragon/PCL2，创建日期不代表首个版本发布时间。",
        reference: []
    },
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
                text: "#3673：中国大陆地区暂时禁用 MC 本体、整合包的下载、安装与补全，已完整安装的游戏仍可启动。Mod 等社区资源下载不受影响。",
                ref: "https://github.com/PCL-Community/PCL-CE/pull/3673"
            }
        ],
        note: "由社区开发者维护的 PCL 分支（PCL CE）。",
        reference: []
    },
    {
        name: "PCL2.Nova",
        group: "pcl",
        dev: "PCL-Community",
        url: "https://github.com/PCL-Community/PCL2.Nova.App",
        repo: "PCL-Community/PCL2.Nova.App",
        state: "archived",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "TypeScript",
        features: [],
        createdAt: "2025/01/26",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "跨平台 PCL 重写尝试。仓库已归档。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: []
    },
    {
        name: "PCL.Neo",
        group: "pcl",
        dev: "PCL-Community",
        url: "https://github.com/PCL-Community/PCL.Neo",
        repo: "PCL-Community/PCL.Neo",
        state: "dev",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "见仓库",
        lang: "C#",
        features: [],
        createdAt: "2025/01/28",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "用 Avalonia 重写的跨平台 PCL CE，尚无正式发布版本。代码中未发现地区限制。",
        reference: []
    },
    {
        name: "PCL.Mac",
        group: "pcl",
        dev: "PCL-Community",
        url: "https://github.com/PCL-Community/PCL.Mac",
        repo: "PCL-Community/PCL.Mac",
        state: "archived",
        download: "ok",
        platforms: ["macos"],
        license: "见仓库",
        lang: "Swift",
        features: [],
        createdAt: "2025/05/17",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "使用 SwiftUI 重写、专为 macOS 打造的 PCL。仓库已归档。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: []
    },
    {
        name: "PCL2-Nex",
        group: "pcl",
        dev: "PCL-Nex-Developer",
        url: "https://github.com/PCL-Nex-Developer/PCL2-Nex",
        repo: "PCL-Nex-Developer/PCL2-Nex",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "Apache-2.0",
        lang: "C#",
        features: [],
        createdAt: "2026/01/24",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 PCL2 源码的修改版，支持插件扩展。未发现地区限制代码。",
        reference: [
            {
                title: "B站：PCL Nex | 一款支持插件扩展的MC启动器",
                url: "https://www.bilibili.com/video/BV11ENX6BEkd"
            }
        ]
    },
    {
        name: "PCL N Edition",
        group: "pcl",
        dev: "木雪1230",
        url: "https://www.bilibili.com/video/BV1JxJn6yEf2",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: ["windows"],
        license: "未知",
        lang: "未知",
        features: [],
        createdAt: "2026/06/13",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "首个正式版 v1.0.116 于 2026/06/13 发布。未找到公开仓库，日期为首个宣传视频发布日。",
        reference: [
            {
                title: "B站：PCL N Edition v1.0.116-release 发布",
                url: "https://www.bilibili.com/video/BV1JxJn6yEf2"
            }
        ]
    },
    {
        name: "PCL Symbio Edition",
        group: "pcl",
        dev: "过氧化氢 Hydrogen",
        url: "https://github.com/Hydrogen-Peroxide/PCL-Symbio-Edition",
        repo: "Hydrogen-Peroxide/PCL-Symbio-Edition",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "Apache-2.0",
        lang: "C#",
        features: ["mirror", "authlib"],
        createdAt: "2026/07/30",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "PCL SE。基于 PCL CE，新增基岩版管理、实例隔离，移除联机大厅。未合入 PCL CE 的地区限制代码。",
        reference: [
            {
                title: "B站：同时启动Java版和基岩版，就在PCLSE",
                url: "https://www.bilibili.com/video/BV1TvHw6CEJ6"
            }
        ]
    },
    {
        name: "PCL.Swift",
        group: "pcl",
        dev: "LakelightLily-Studio",
        url: "https://github.com/LakelightLily-Studio/PCL.Swift",
        repo: "LakelightLily-Studio/PCL.Swift",
        state: "active",
        download: "ok",
        platforms: ["macos"],
        license: "见仓库",
        lang: "Swift",
        features: [],
        createdAt: "2026/10/11",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于已归档的 PCL.Mac 独立维护，用 SwiftUI 重写。原仓库 functy23/PCL.Swift。",
        reference: [
            {
                title: "B站：PCL.Mac 秽土转生！",
                url: "https://www.bilibili.com/video/BV1noJq6tESs"
            }
        ]
    },
    {
        name: "Zalith PCL",
        group: "pcl",
        dev: "zuanxu53-hub",
        url: "https://zpcl.craftmc.cn/",
        repo: "zuanxu53-hub/Zalith-PlainCraftLauncher",
        state: "active",
        download: "ok",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Kotlin",
        features: ["mirror"],
        createdAt: "2026/10/17",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Zalith Launcher 2 二次开发、界面仿 PCL2 的安卓启动器。不含 ZL2 2.7.2 的地区限制，大陆判定仅用于显示国内镜像源选项。",
        reference: [
            {
                title: "B站：pcl手机版！？",
                url: "https://www.bilibili.com/video/BV1oLHw6xEar"
            }
        ]
    },
    {
        name: "PCL 詩音",
        group: "pcl",
        dev: "Mar7thLover",
        url: "https://github.com/Mar7thLover/PCL-Shion",
        repo: "Mar7thLover/PCL-Shion",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "Apache-2.0",
        lang: "C#",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/22",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/22",
                text: "5795976：移除从 PCL CE 继承的中国大陆下载/安装限制。",
                ref: "https://github.com/Mar7thLover/PCL-Shion/commit/5795976"
            }
        ],
        note: "PCL Shion，PCL CE 的分支，界面迁移到 Avalonia，支持三平台。",
        reference: [
            {
                title: "B站：PCL詩音-无下载限制的跨平台PCL-CE改版",
                url: "https://www.bilibili.com/video/BV16ZHP6vENu"
            }
        ]
    },
    {
        name: "MITC",
        group: "pcl",
        dev: "balareshe",
        url: "https://pcl.umrca.com/",
        repo: "balareshe/MITC",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "见仓库",
        lang: "VB.NET",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/25",
        updatedAt: "2026/11/05",
        downloadLog: [],
        note: "基于 PCL 2.13.0.1（PCL 2.99.0.0 之前的版本）的个人修改版，重命名为 MITC，保留原有的游戏下载功能、未做地区限制；自建更新通道与联机中继。使用前需在官网申请授权码（人工审核发放），非官方发布，与原作者无隶属关系。",
        reference: [
            {
                title: "官网：MITC 下载与授权申请",
                url: "https://pcl.umrca.com/"
            },
            {
                title: "源码仓库：balareshe/MITC",
                url: "https://github.com/balareshe/MITC"
            },
            {
                title: "上游基线：PCL 2.13.0.1",
                url: "https://github.com/Meloong-Git/PCL/releases/tag/2.13.0.1"
            }
        ]
    },
    {
        name: "PCL Pro",
        group: "pcl",
        dev: "泡泡_Sweet",
        url: "https://www.bilibili.com/video/BV1yJxq6LEFC",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: ["windows"],
        license: "未知",
        lang: "未知",
        features: [],
        createdAt: "2026/10/30",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "宣传称基于龙猫发布的 PCL2 源码修改。未找到公开仓库，日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：PCL Pro!? 永久免费？",
                url: "https://www.bilibili.com/video/BV1yJxq6LEFC"
            }
        ]
    },
    {
        name: "PCL NE",
        group: "pcl",
        dev: "Csy88817",
        url: "https://pcl-ne.simpplay.cc.cd",
        repo: "Csy88817/PCL-NE",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "Apache-2.0",
        lang: "C#",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/30",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/30",
                text: "931a1f2：关闭从 PCL CE 继承的地区下载限制（代码保留，开关默认关闭）。",
                ref: "https://github.com/Csy88817/PCL-NE/commit/931a1f2"
            }
        ],
        note: "基于 PCL CE 的二次开发版，另取消了首次启动的正版登录要求。",
        reference: [
            {
                title: "B站：PCL-NE | 一款基于PCL社区版的启动器",
                url: "https://www.bilibili.com/video/BV1sSxk6FEvJ"
            }
        ]
    },

    // ---------------- 桌面端 ----------------
    {
        name: "ATLauncher",
        group: "desktop",
        dev: "ATLauncher",
        url: "https://atlauncher.com",
        repo: "ATLauncher/ATLauncher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "Java",
        features: [],
        createdAt: "2013/09/02",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "以整合包为核心的启动器。",
        reference: []
    },
    {
        name: "MultiMC",
        group: "desktop",
        dev: "MultiMC",
        url: "https://multimc.org",
        repo: "MultiMC/Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "见仓库",
        lang: "C++",
        features: [],
        createdAt: "2013/09/08",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "老牌多实例启动器。",
        reference: []
    },
    {
        name: "HMCL",
        group: "desktop",
        dev: "HMCL-dev",
        url: "https://hmcl.huangyuhui.net",
        repo: "HMCL-dev/HMCL",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "Java",
        features: ["mirror", "authlib"],
        createdAt: "2015/06/22",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/20",
                text: "#7017：开发分支在中国大陆地区禁用游戏下载功能。",
                ref: "https://github.com/HMCL-dev/HMCL/pull/7017"
            },
            {
                date: "2026/10/22",
                text: "#7038：移除上述临时措施，团队表示正在考虑最终方案。",
                ref: "https://github.com/HMCL-dev/HMCL/pull/7038"
            }
        ],
        note: "Hello Minecraft! Launcher，跨平台 Java 启动器。上述改动仅在开发分支，正式版 3.16.4（2026/09/17）不受影响。",
        reference: []
    },
    {
        name: "X Minecraft Launcher",
        group: "desktop",
        dev: "Voxelum",
        url: "https://xmcl.app",
        repo: "Voxelum/x-minecraft-launcher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "MIT",
        lang: "TypeScript",
        features: ["mirror", "authlib"],
        createdAt: "2017/06/28",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "XMCL，基于 Electron 的跨平台启动器。",
        reference: []
    },
    {
        name: "LauncherX",
        group: "desktop",
        dev: "Corona Studio",
        url: "https://corona.studio",
        repo: "Corona-Studio/LXIT",
        state: "active",
        download: "unknown",
        platforms: ["windows", "macos", "linux"],
        license: "闭源",
        lang: "C#",
        features: [],
        createdAt: "2020/11/28",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "闭源。仓库为其议题追踪仓库 LXIT，创建日期不代表首个版本发布时间。",
        reference: [
            {
                title: "B站：来看看最新的 MC 启动器 ｜ LauncherX",
                url: "https://www.bilibili.com/video/BV1Tw5SzKEpi"
            }
        ]
    },
    {
        name: "Modrinth App",
        group: "desktop",
        dev: "Modrinth",
        url: "https://modrinth.com/app",
        repo: "modrinth/code",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "见仓库",
        lang: "Rust / TypeScript",
        features: [],
        createdAt: "2021/06/20",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "Modrinth 官方启动器。仓库为 Modrinth 全站 monorepo，创建日期早于 App 发布。",
        reference: []
    },
    {
        name: "GDLauncher",
        group: "desktop",
        dev: "gorilla-devs",
        url: "https://gdlauncher.com",
        repo: "gorilla-devs/GDLauncher-Carbon",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "见仓库",
        lang: "TypeScript / Rust",
        features: [],
        createdAt: "2022/07/05",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "新版 GDLauncher（Carbon）。旧仓库 gorilla-devs/GDLauncher 已归档。",
        reference: []
    },
    {
        name: "Prism Launcher",
        group: "desktop",
        dev: "PrismLauncher",
        url: "https://prismlauncher.org",
        repo: "PrismLauncher/PrismLauncher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "C++",
        features: [],
        createdAt: "2022/10/17",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "MultiMC 系多实例启动器，海外社区主流选择之一。",
        reference: []
    },
    {
        name: "WonderLab",
        group: "desktop",
        dev: "Blessing-Studio",
        url: "https://github.com/Blessing-Studio/WonderLab",
        repo: "Blessing-Studio/WonderLab",
        state: "archived",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "MIT",
        lang: "C#",
        features: [],
        createdAt: "2023/01/18",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 .NET 6 的跨平台启动器，仓库已归档。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: [
            {
                title: "B站：向您推荐，下一代跨平台 Minecraft 启动器 | WonderLab",
                url: "https://www.bilibili.com/video/BV1Ss4y147XW"
            }
        ]
    },
    {
        name: "SJMCL",
        group: "desktop",
        dev: "SJMC",
        url: "https://mc.sjtu.cn/sjmcl",
        repo: "UNIkeEN/SJMCL",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "TypeScript / Rust",
        features: ["mirror", "authlib"],
        createdAt: "2024/11/22",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "上海交通大学 Minecraft 社开发的跨平台启动器，基于 Tauri。1.4.0（2026/10/25）重构了下载系统。",
        reference: [
            {
                title: "B站：SJMC Launcher | 新一代开源跨平台 Minecraft 启动器",
                url: "https://www.bilibili.com/video/BV1gMnJzGEiM"
            }
        ]
    },
    {
        name: "Swift Craft Launcher",
        group: "desktop",
        dev: "suhang12332",
        url: "https://web.scl.isiah.top",
        repo: "suhang12332/Swift-Craft-Launcher",
        state: "active",
        download: "ok",
        platforms: ["macos"],
        license: "AGPL-3.0",
        lang: "Swift",
        features: [],
        createdAt: "2025/08/02",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "macOS 原生启动器。",
        reference: [
            {
                title: "B站：MacOS原生现代化Minecraft启动器：Swift Craft Launcher",
                url: "https://www.bilibili.com/video/BV1JkegzPEw1"
            }
        ]
    },
    {
        name: "ObsMCLauncher",
        group: "desktop",
        dev: "黑曜石论坛",
        url: "https://omcl.mcobs.cn",
        repo: "mcobs/ObsMCLauncher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "C#",
        features: [],
        createdAt: "2025/10/02",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "黑曜石论坛出品，基于 Avalonia 的跨平台启动器。",
        reference: [
            {
                title: "B站：ObsMCLauncher：你的MC启动器",
                url: "https://www.bilibili.com/video/BV1MiKz6CEEZ"
            }
        ]
    },
    {
        name: "MD3L",
        group: "desktop",
        dev: "zhou1844",
        url: "https://md3l.top",
        repo: "zhou1844/MD3L",
        state: "active",
        download: "ok",
        platforms: ["windows", "linux"],
        license: "未声明",
        lang: "Kotlin",
        features: ["mirror"],
        createdAt: "2026/05/06",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "同时支持 Java 版与基岩版。仓库未声明开源协议。",
        reference: [
            {
                title: "B站：MC全新启动器MD3L正式发布",
                url: "https://www.bilibili.com/video/BV18HdABcEHE"
            }
        ]
    },
    {
        name: "BlockHelm Launcher",
        group: "desktop",
        dev: "zqq-699",
        url: "https://github.com/zqq-699/BlockHelm-Launcher",
        repo: "zqq-699/BlockHelm-Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "GPL-3.0",
        lang: "C#",
        features: [],
        createdAt: "2026/06/12",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "BHL，作者称大部分代码由 AI 编写。",
        reference: [
            {
                title: "B站：全新的 MC 启动器 | BlockHelm Launcher",
                url: "https://www.bilibili.com/video/BV1Uwgm6kE9H"
            }
        ]
    },
    {
        name: "Qomicex Launcher",
        group: "desktop",
        dev: "Qomicex",
        url: "https://www.qomicex.top",
        repo: "Qomicex-Public/Qomicex.Tauri",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "Rust / TypeScript",
        features: [],
        createdAt: "2026/06/26",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Tauri。按系统时区判定中国大陆时，下载页显示合规提示但不阻止下载；离线账户需先绑定微软账户（项目文档 ADR-117）。",
        reference: [
            {
                title: "B站：2026年最强mc启动器——Qomicex Launcher",
                url: "https://www.bilibili.com/video/BV1ajgq6pEmJ"
            }
        ]
    },
    {
        name: "MoLaunch",
        group: "desktop",
        dev: "MoTeam",
        url: "https://molaunch.moiu.cn",
        repo: "MoTeam-cn/MoLaunch",
        state: "active",
        download: "limited",
        platforms: ["windows", "macos", "linux"],
        license: "见仓库",
        lang: "Rust / TypeScript",
        features: ["authlib"],
        createdAt: "2026/06/26",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/20",
                text: "9e47049：本机与网络出口均在中国大陆时，拒绝下载和安装游戏本体；同日改为读取官网下发的策略清单。",
                ref: "https://github.com/MoTeam-cn/MoLaunch/commit/9e470497a194b08d02fa70ecd303e6b1b4e6af22"
            }
        ],
        note: "基于 Tauri，部分代码参考 PCL2。",
        reference: [
            {
                title: "B站：来看看新的 MC 启动器 | Molaunch",
                url: "https://www.bilibili.com/video/BV1kmn865EoX"
            }
        ]
    },
    {
        name: "Axolotl Launcher",
        group: "desktop",
        dev: "Axolotl",
        url: "https://axlmc.org",
        repo: "Axolotl-Launcher/Axolotl",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "Rust / TypeScript",
        features: ["mirror", "authlib"],
        createdAt: "2026/07/13",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "美西螈启动器，支持 Modrinth / CurseForge 整合包、Yggdrasil 外置登录（含 LittleSkin 预设），中国大陆自动选择柠泽镜像。地区判定只用于离线账户：中国大陆以外需先完成一次正版登录才能用离线账户，不限制下载。",
        reference: [
            {
                title: "B站：Axolotl Launcher，你的最后一款 Minecraft 启动器",
                url: "https://www.bilibili.com/video/BV1WNgn6dEjF"
            }
        ]
    },
    {
        name: "苦力怕启动器",
        group: "desktop",
        dev: "苦力怕论坛",
        url: "https://klp-launcher.com/",
        repo: "",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos"],
        license: "未公开源码",
        lang: "Rust",
        features: ["mirror", "authlib"],
        createdAt: "2026/07/29",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "苦力怕论坛开发，公测中（1.3.0-beta.4，2026/11/01）。内置 AI 助手“小怕”，可分析崩溃、检查和安装模组；支持 Modrinth / CurseForge 资源下载、陶瓦联机，下载源按所在地区自动选择。macOS 版仅支持 Apple Silicon，Linux 与安卓版尚未推出。支持外置登录。中国大陆可下载游戏本体（开发方确认）。源码未公开，日期为开发方提供的建库日期。",
        reference: [
            {
                title: "B站：当 MC 启动器有了 AI｜苦力怕启动器",
                url: "https://www.bilibili.com/video/BV1kxnb66E5L"
            }
        ]
    },
    {
        name: "Brix",
        group: "desktop",
        dev: "XinkuoaStudio",
        url: "https://www.bilibili.com/video/BV1g1uR6YETE",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: [],
        license: "未知",
        lang: "未知",
        features: [],
        createdAt: "2026/08/10",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "闭源，暂无官网，通过 QQ 群分发。日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：来看看最新的MC启动器 | Brix",
                url: "https://www.bilibili.com/video/BV1g1uR6YETE"
            }
        ]
    },
    {
        name: "Beacon Launcher",
        group: "desktop",
        dev: "fuqicn",
        url: "https://github.com/fuqicn/beacon",
        repo: "fuqicn/beacon",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "C++ / QML",
        features: ["mirror"],
        createdAt: "2026/08/11",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Qt 6 的启动器。",
        reference: [
            {
                title: "B站：全新的 MC 启动器 | BeaconLauncher",
                url: "https://www.bilibili.com/video/BV1oLHe61EB3"
            }
        ]
    },
    {
        name: "QookiX Launcher",
        group: "desktop",
        dev: "维墨笙",
        url: "https://www.qookix.cn",
        repo: "QookiX/QookiX-Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "GPL-3.0",
        lang: "Rust",
        features: [],
        createdAt: "2026/08/20",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Tauri，内置陶瓦联机。原仓库 weimosheng/QookiX-Launcher。",
        reference: [
            {
                title: "B站：全新的MC启动器 | QookiX Launcher",
                url: "https://www.bilibili.com/video/BV1xvbp6UEo5"
            }
        ]
    },
    {
        name: "KAMUCL",
        group: "desktop",
        dev: "卡慕SaMa",
        url: "https://github.com/YUN-SAN3/KAMUCL",
        repo: "YUN-SAN3/KAMUCL",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos"],
        license: "见仓库",
        lang: "TypeScript",
        features: [],
        createdAt: "2026/09/07",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Electron，提供 Windows x64 与 macOS ARM64 版本。",
        reference: [
            {
                title: "B站：我做了一个MC启动器！KAMUCL",
                url: "https://www.bilibili.com/video/BV11nHZ68EVs"
            }
        ]
    },
    {
        name: "StarCloud",
        group: "desktop",
        dev: "星渺",
        url: "https://starcloudfur.cn",
        repo: "xingmiaobjm/Starcloud-Minecraft-Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "见仓库",
        lang: "C#",
        features: ["authlib"],
        createdAt: "2026/09/12",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "WinUI 3 界面，内置 AI 助手。Linux 与安卓版本在单独的仓库中。",
        reference: [
            {
                title: "B站：他来了，下一代Minecraft启动器",
                url: "https://www.bilibili.com/video/BV1QxnN6pEmB"
            }
        ]
    },
    {
        name: "极光启动器",
        group: "desktop",
        dev: "我叫乔布森",
        url: "https://auroralauncher.sryze.cc/",
        repo: "",
        state: "active",
        download: "unknown",
        platforms: ["windows"],
        license: "未知",
        lang: "C#",
        features: ["mirror"],
        createdAt: "2026/10/05",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "Aurora Launcher，基于 WinUI 3，v1.3 于 2026/10/03 发布，使用 BMCLAPI 镜像。未找到公开仓库，日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：极光启动器宣传片",
                url: "https://www.bilibili.com/video/BV1rYHx6wEHs"
            }
        ]
    },
    {
        name: "Allay Launcher",
        group: "desktop",
        dev: "AuroraGamesStudio",
        url: "https://allay.cc.cd",
        repo: "AuroraGamesStudio/AllayLauncher",
        state: "active",
        download: "ok",
        platforms: [],
        license: "MIT",
        lang: "Vue",
        features: [],
        createdAt: "2026/10/08",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "备用官网 allaylauncher.pages.dev。",
        reference: [
            {
                title: "B站：Allay Launcher——你的最后一款Minecraft启动器",
                url: "https://www.bilibili.com/video/BV1J9pJ67EgP"
            }
        ]
    },
    {
        name: "Mosslight Launcher",
        group: "desktop",
        dev: "空夏114",
        url: "https://kongxia114.github.io/Mosslight-Launcher/",
        repo: "kongxia114/Mosslight-Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "见仓库",
        lang: "C#",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/11",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "",
        reference: [
            {
                title: "B站：Mosslight Launcher 启动器发布",
                url: "https://www.bilibili.com/video/BV1ytxT6tEEc"
            }
        ]
    },
    {
        name: "忘却的旋律启动器",
        group: "desktop",
        dev: "严MC工作室",
        url: "https://www.bilibili.com/video/BV1sQn16oEA9",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: ["windows"],
        license: "闭源",
        lang: "未知",
        features: [],
        createdAt: "2026/10/22",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "老启动器的回归版本，仅通过网盘分发 exe。日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：忘却的旋律启动器！回来了！",
                url: "https://www.bilibili.com/video/BV1sQn16oEA9"
            }
        ]
    },
    {
        name: "Darkitten Launcher",
        group: "desktop",
        dev: "FEL_KEEA",
        url: "https://lfelkeea.github.io/darkitten-launcher/",
        repo: "LFELKEEA/darkitten-launcher",
        state: "active",
        download: "ok",
        platforms: [],
        license: "MIT",
        lang: "Python",
        features: [],
        createdAt: "2026/10/23",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "DKL，基于 PySide6，支持插件。",
        reference: [
            {
                title: "B站：DKL启动器",
                url: "https://www.bilibili.com/video/BV1A5xY6AEuC"
            }
        ]
    },
    {
        name: "TheGodBBS Launcher",
        group: "desktop",
        dev: "MRTangwin8",
        url: "https://github.com/MRTangwin8/TheGodBBSLauncher",
        repo: "MRTangwin8/TheGodBBSLauncher",
        state: "active",
        download: "ok",
        platforms: ["windows", "macos", "linux"],
        license: "MIT",
        lang: "Rust",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/24",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "界面致敬 MCBBS，基于 Tauri，已上架微软商店。",
        reference: [
            {
                title: "B站：我做了一个致敬 MCBBS 的 MC 启动器",
                url: "https://www.bilibili.com/video/BV1EDxL6yEqk"
            }
        ]
    },
    {
        name: "TipCL",
        group: "desktop",
        dev: "wfwwq",
        url: "https://github.com/wfwwq/TipCL",
        repo: "wfwwq/TipCL",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "MIT",
        lang: "C#",
        features: ["authlib"],
        createdAt: "2026/10/24",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "单文件约 3MB，内置 AI 助手与陶瓦联机。",
        reference: [
            {
                title: "B站：只有 3MB 的 Minecraft 启动器 TipCL",
                url: "https://www.bilibili.com/video/BV1ySHK6UEKE"
            }
        ]
    },
    {
        name: "Eukary Launcher",
        group: "desktop",
        dev: "EukaryDeveloper",
        url: "https://github.com/EukaryDeveloper/Eukary-Launcher",
        repo: "EukaryDeveloper/Eukary-Launcher",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "GPL-3.0",
        lang: "C#",
        features: ["mirror"],
        createdAt: "2026/10/24",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "真核启动器（EKL），WPF，作者称大部分代码由 AI 编写。",
        reference: [
            {
                title: "B站：全新的 MC 启动器（真启动） | Eukary Launcher",
                url: "https://www.bilibili.com/video/BV1FWHM6LEYh"
            }
        ]
    },
    {
        name: "MaCos Launcher",
        group: "desktop",
        dev: "LPJLM",
        url: "https://github.com/LPJLM/MaCos-Launcher-",
        repo: "LPJLM/MaCos-Launcher-",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "MIT",
        lang: "JavaScript",
        features: ["mirror", "authlib"],
        createdAt: "2026/10/24",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 Electron，名字中的 MaCos 与 macOS 无关。仓库仅包含发布包与源码压缩包。",
        reference: [
            {
                title: "B站：又一款Minecraft启动器 MaCos Launcher",
                url: "https://www.bilibili.com/video/BV1vMHT6iESY"
            }
        ]
    },
    {
        name: "MC Harbor",
        group: "desktop",
        dev: "ADsurfboard",
        url: "https://github.com/ADsurfboard/MC-Harbor",
        repo: "ADsurfboard/MC-Harbor",
        state: "active",
        download: "ok",
        platforms: ["macos"],
        license: "GPL-3.0",
        lang: "Swift",
        features: [],
        createdAt: "2026/10/25",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "macOS 独占（Apple Silicon，macOS 26+），沿用 HMCL 的管理方式。",
        reference: [
            {
                title: "B站：MC Harbor｜为MacOS而生的启动器",
                url: "https://www.bilibili.com/video/BV1gTHG6kESi"
            }
        ]
    },
    {
        name: "ZenLauncher",
        group: "desktop",
        dev: "zenlauncher",
        url: "https://www.bilibili.com/video/BV1BenS6REWx",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: ["windows"],
        license: "闭源",
        lang: "未知",
        features: [],
        createdAt: "2026/10/25",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "约 30MB，仅通过网盘分发。日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：ZenLauncher，仅30MBmc启动器！",
                url: "https://www.bilibili.com/video/BV1BenS6REWx"
            }
        ]
    },
    {
        name: "XML Launcher",
        group: "desktop",
        dev: "MelixLab",
        url: "https://github.com/MelixLab/XMLLauncher",
        repo: "MelixLab/XMLLauncher",
        state: "active",
        download: "ok",
        platforms: ["windows"],
        license: "见仓库",
        lang: "C#",
        features: ["mirror"],
        createdAt: "2026/10/27",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "WinUI 3 + Native AOT。",
        reference: [
            {
                title: "B站：你的新一代启动器 | XML Launcher",
                url: "https://www.bilibili.com/video/BV1LTxu6SE6C"
            }
        ]
    },
    {
        name: "HMWLX",
        group: "desktop",
        dev: "xiaofanforfabric",
        url: "https://github.com/xiaofanforfabric/HMWLX",
        repo: "xiaofanforfabric/HMWLX",
        state: "dev",
        download: "ok",
        platforms: ["windows", "linux"],
        license: "GPL-3.0",
        lang: "Kotlin",
        features: ["authlib"],
        createdAt: "2026/10/27",
        updatedAt: "2026/11/03",
        downloadLog: [],
        note: "hello my world launcher X，给 headlessmc 套了一层 Compose for Desktop 图形界面，自带运行时。当前 0.1-dev3，作者标注仍在开发中。下载走 Mojang 官方 version_manifest_v2，未发现地区限制，也未内置国内镜像源。进下载页需登录有效微软账号，README 说明这是 Mojang EULA 的要求而非本项目限制。支持微软账号、外置验证（LittleSkin 等 Yggdrasil 服务）与离线账号。GPL-3.0 开源，附自定义用户协议（LEGAL/用户协议.txt）。同时镜像发布到 CNB。",
        reference: [
            {
                title: "GitHub Releases：v0.1-dev3",
                url: "https://github.com/xiaofanforfabric/HMWLX/releases/tag/v0.1-dev3"
            },
            {
                title: "CNB Releases",
                url: "https://cnb.cool/xiaofanforandroid/HMWLX/HMWLX/-/releases"
            }
        ]
    },
    {
        name: "QGL",
        group: "desktop",
        dev: "热土工作室",
        url: "https://ql.rtstu.com/qgl",
        repo: "",
        state: "active",
        download: "unknown",
        platforms: [],
        license: "未知",
        lang: "未知",
        features: ["authlib"],
        createdAt: "2026/10/30",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "青龙启动器（QingLong Launcher），热土工作室出品。支持正版、外置、离线、访客四种账户，提供一键装模组、从 PCL / PCL CE 迁移数据，以及为其他启动器补全游戏文件的辅助模式。官网称开源，但链接的仓库 RETUSTU/QGL-Launcher 目前无法访问。日期为宣传视频发布日。",
        reference: [
            {
                title: "B站：QGL启动器",
                url: "https://www.bilibili.com/video/BV1T5xq6UEgu"
            }
        ]
    },
    {
        name: "LCP 启动器",
        group: "desktop",
        dev: "薯鼠條",
        url: "https://www.bilibili.com/video/BV11Fx66REwf",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: [],
        license: "未知",
        lang: "未知",
        features: [],
        createdAt: "2026/10/31",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "信息仅见宣传视频。",
        reference: [
            {
                title: "B站：PCL被封了？我用大肥鱼做了LCP启动器！",
                url: "https://www.bilibili.com/video/BV11Fx66REwf"
            }
        ]
    },
    {
        name: "傻瓜 MC 启动器",
        group: "desktop",
        dev: "Valtis",
        url: "https://www.bilibili.com/video/BV1hKxx6sE1g",
        repo: "",
        state: "unknown",
        download: "unknown",
        platforms: [],
        license: "闭源",
        lang: "未知",
        features: [],
        createdAt: "2026/11/01",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "测试版，内置 AI 修复报错，作者称后续开源。目前仅通过网盘分发。",
        reference: [
            {
                title: "B站：傻瓜mc启动器 AI一键修复报错",
                url: "https://www.bilibili.com/video/BV1hKxx6sE1g"
            }
        ]
    },

    // ---------------- 移动端 ----------------
    {
        name: "PojavLauncher",
        group: "mobile",
        dev: "PojavLauncherTeam",
        url: "https://github.com/PojavLauncherTeam/PojavLauncher",
        repo: "PojavLauncherTeam/PojavLauncher",
        state: "archived",
        download: "ok",
        platforms: ["android"],
        license: "LGPL-3.0",
        lang: "Java",
        features: [],
        createdAt: "2020/03/11",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "已归档，由 AngelAuraMC/Amethyst-Android 接替。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: []
    },
    {
        name: "HMCL-PE",
        group: "mobile",
        dev: "HMCL-dev",
        url: "https://github.com/HMCL-dev/HMCL-PE",
        repo: "HMCL-dev/HMCL-PE",
        state: "archived",
        download: "ok",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Java",
        features: [],
        createdAt: "2022/08/18",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "HMCL 安卓版，仓库已归档。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: []
    },
    {
        name: "Fold Craft Launcher",
        group: "mobile",
        dev: "FCL-Team",
        url: "https://github.com/FCL-Team/FoldCraftLauncher",
        repo: "FCL-Team/FoldCraftLauncher",
        state: "active",
        download: "ok",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Java",
        features: ["mirror", "authlib"],
        createdAt: "2022/10/19",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/25",
                text: "1.3.4.2：移除启动时的网络归属地查询与游戏下载的地区禁用逻辑，发布说明注明此次更新没有禁用大陆地区下载。",
                ref: "https://github.com/FCL-Team/FoldCraftLauncher/releases/tag/1.3.4.2"
            }
        ],
        note: "FCL，基于 HMCL 与 PojavLauncher 的安卓启动器。",
        reference: []
    },
    {
        name: "Zalith Launcher",
        group: "mobile",
        dev: "ZalithLauncher",
        url: "https://github.com/ZalithLauncher/ZalithLauncher",
        repo: "ZalithLauncher/ZalithLauncher",
        state: "archived",
        download: "ok",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Java / C",
        features: [],
        createdAt: "2023/09/22",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "因维护困难已归档，由 Zalith Launcher 2 接替。最后提交早于 2026/10/20，不含地区限制代码。",
        reference: [
            {
                title: "B站：手机也能玩 MC Java 版！ZalithLauncher 新版本",
                url: "https://www.bilibili.com/video/BV12BXvYEEx1"
            }
        ]
    },
    {
        name: "星尘启动器",
        group: "mobile",
        dev: "StardustDev",
        url: "https://sl.nebulaguild.com",
        repo: "",
        state: "active",
        download: "unknown",
        platforms: ["android"],
        license: "未知",
        lang: "未知",
        features: [],
        createdAt: "2025/01/29",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "SLauncher，星尘软件团队开发，支持 Android 7.0+，内置光影加载器与资源中心。最早以基岩版启动器亮相。日期为首个宣传视频发布日。",
        reference: [
            {
                title: "B站：全新的我的世界基岩版启动器 Slauncher",
                url: "https://www.bilibili.com/video/BV1EWFueEES6"
            },
            {
                title: "B站：全新的MC移动端启动器 | SLAUNCHER",
                url: "https://www.bilibili.com/video/BV125gkzuET9"
            }
        ]
    },
    {
        name: "Zalith Launcher 2",
        group: "mobile",
        dev: "ZalithLauncher",
        url: "https://www.zalithlauncher.cn",
        repo: "ZalithLauncher/ZalithLauncher2",
        state: "active",
        download: "limited",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Kotlin",
        features: ["mirror", "authlib"],
        createdAt: "2025/03/24",
        updatedAt: "2026/11/02",
        downloadLog: [
            {
                date: "2026/10/20",
                text: "2.7.2：因相关法律法规，中国大陆地区暂时无法下载游戏、下载安装整合包及使用陶瓦联机。",
                ref: "https://github.com/ZalithLauncher/ZalithLauncher2/releases/tag/2.7.2"
            }
        ],
        note: "Zalith Launcher 的重写版本。",
        reference: [
            {
                title: "B站：【ZL2】新一代安卓端 MC Java 版启动器",
                url: "https://www.bilibili.com/video/BV1P5rLBWEZo"
            }
        ]
    },
    {
        name: "Amethyst (iOS)",
        group: "mobile",
        dev: "AngelAuraMC",
        url: "https://github.com/AngelAuraMC/Amethyst-iOS",
        repo: "AngelAuraMC/Amethyst-iOS",
        state: "active",
        download: "ok",
        platforms: ["ios"],
        license: "GPL-3.0",
        lang: "Objective-C",
        features: [],
        createdAt: "2025/05/16",
        updatedAt: "2026/11/02",
        downloadLog: [],
        note: "基于 PojavLauncher 的 iOS / iPadOS 启动器。",
        reference: [
            {
                title: "B站：在iOS轻松启动JavaMC，附带两款改版",
                url: "https://www.bilibili.com/video/BV15GjJ69Eh4"
            }
        ]
    },
    {
        name: "QookiX Launcher Android",
        group: "mobile",
        dev: "ZhaYi",
        url: "https://www.qookix.cn",
        repo: "QookiX/QookiX-Launcher-Android",
        state: "active",
        download: "ok",
        platforms: ["android"],
        license: "GPL-3.0",
        lang: "Kotlin / Rust",
        features: ["mirror"],
        createdAt: "2026/09/05",
        updatedAt: "2026/11/03",
        downloadLog: [],
        note: "QookiX 启动器的 Android 版，支持多种渲染器，可与 QookiX 桌面端启动器搭配使用",
        reference: [
            {
                title: "B站：全新的MC启动器 | QookiX Launcher",
                url: "https://www.bilibili.com/video/BV1xvbp6UEo5"
            }
        ]
    }
];

// ------------------------------------------------------------
// 场外选手：非第三方启动器，但与"下载"有关
// ------------------------------------------------------------
const db_launchers_ex = [
    {
        name: "Minecraft 官方启动器",
        url: "https://www.minecraft.net/download",
        updatedAt: "2026/11/02",
        note: "Mojang 官方渠道，需要正版账号。"
    },
    {
        name: "BMCLAPI",
        url: "https://bmclapi2.bangbang93.com",
        updatedAt: "2026/11/02",
        note: "国内多数第三方启动器使用的 Minecraft 下载镜像，由 bangbang93 维护。"
    },
    {
        name: "PCL 2.99.0.0 更新日志",
        url: "https://github.com/Meloong-Git/PCL/releases/tag/2.99.0.0",
        updatedAt: "2026/11/02",
        note: "一切的起点。"
    },
    {
        name: "Minecraft Workbench",
        url: "https://www.bilibili.com/video/BV1c1sX6SEVt",
        updatedAt: "2026/11/02",
        note: "VS Code 插件，在编辑器里下载、启动 Minecraft Java 版。"
    }
];
