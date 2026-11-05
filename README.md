# 韦舒媛 · AI 互动产品与体验设计作品集

公开网站：https://shuyuanwei4-jpg.github.io/wei-shuyuan-portfolio/

完整的静态网站源码与媒体文件，无需安装依赖。双击 `index.html` 可以本地浏览；将整个文件夹发送给别人，对方也可以解压后打开。

## 文件

- `index.html`：页面结构与项目详情正文。
- `refinement.js`：项目资料、卡片、轮播、详情展开及视频交互。
- `refinement.css`：字体、布局、悬停效果及手机适配。
- `film-frame.css`：负责「交互与叙事」和项目现场照片轮播的电影胶片外框。
- `afk-growth.css`：仅负责 AFK 卡片向右上递进、悬停展开的外框。
- `assets/`：本地字体、图片、视频、MVP 文档与图标库。
- `.nojekyll`：GitHub Pages 静态文件发布配置。

## 修改与发布

修改后先打开 `index.html` 检查。需要同步公开网站时，在此目录运行：

```powershell
git add index.html refinement.css refinement.js assets
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages 会自动更新，通常需要几分钟。保持 `assets` 的相对路径，无需配置服务器或模型密钥。

「无声的发泄」仅展示视频和介绍，不包含游玩入口。尚未上传的其他项目素材保留占位。

## AIGC 创作

主页面「AI 产品」右侧新增「AIGC 创作」筛选，选中后显示并定位到 Experience 下方的「AIGC Work」。标题大小沿用 Experience；三张作品卡片共用一个自动横向轮播和胶片外框，悬停暂停，离开继续，支持手动切换、键盘与触屏操作。

作品为《廉洁精神照古今》《通天傩舞：解码赣傩舞谱中的传统天文观》与「TuMate 途搭子」智能座舱 HMI 概念设计。点击卡片可播放正式视频，并阅读整理后的创作背景、叙事方法、设计重点与 AI 制作流程。AIGC 卡片与「交互与叙事」使用相同尺寸和内边距，默认显示文字，悬停或键盘聚焦时渐显视频封面，离开后恢复文字。封面为覆盖层，不改变卡片大小；胶片与自动轮播保留。卡片与播放器封面取自各自视频画面，进入详情后加载播放器，关闭详情停止播放。

「交互与叙事」采用同样的渐显动效，尚未提供封面素材的三项暂显示预览占位，后续填写项目 hoverCover 或媒体图片即可自动替换。通天傩舞标签为「数字非遗·中国好创意省级三等奖」，详情页获奖情况同步补充。

三个上传的压缩视频保留原始清晰度、声音和时长，只调整容器索引以便浏览器尽快开始播放。视频为 `assets/integrity-film.mp4`（约 62 秒）、`assets/nuo-dance.mp4`（约 103 秒）、`assets/tumate.mp4`（约 83 秒），相应封面为同名 `-poster.jpg`。

修改前版本为 `before-aigc-work-20261105`（提交 `484942c`），完整备份 `D:/WeiShuyuan-Portfolio-before-aigc-work-20261105.zip`。

接入视频前的板块版本为 `before-aigc-videos-20261105`（提交 `370f681`），完整备份 `D:/WeiShuyuan-Portfolio-before-aigc-videos-20261105.zip`。

统一卡片尺寸与封面渐显前的版本为 `before-film-card-hover-20261105`（提交 `d42a6a4`），完整备份 `D:/WeiShuyuan-Portfolio-before-film-card-hover-20261105.zip`。

## 撤销胶片外框

在 `index.html` 中移除引用 `film-frame.css` 的 `<link>`，即可恢复普通轮播，项目内容、自动滚动与悬停暂停均保留。也可以只从轮播内部的容器移除 `film-strip` 类。

本次修改前的完整版本已保存为本地 Git 标签 `before-film-frame-20261105`，便于后续对比和回退。

「视觉与影像」现在是两张静态卡片；电脑并列，手机上下排列。悬停时有轻微摇摆、错位投影与箭头转动。

## 撤销贴边胶片与 AFK 增长外框

本次调整前的版本保存在本地 Git 标签 `before-tight-film-growth-20261105`，同时已打包到 `D:/WeiShuyuan-Portfolio-before-growth-20261105.zip`。胶片去除上下白边，卡片在悬停时保持贴边；AFK 的两层外框在悬停或键盘聚焦时向右上展开。

移除 `index.html` 中 `afk-growth.css` 的引用，可以单独恢复 AFK 原外框。胶片可通过对照上述版本的 `film-frame.css` 单独恢复上下留白。

更新日期：2026-11-05。

## 黑客松海报与现场照片更新

两张卡片默认展示原有文字，鼠标悬停或键盘聚焦时渐显项目海报。首页额外增加的黑客松共同标题已撤销，项目自身的日期与获奖信息保留。KIN//X 悬停投影为灰色；「你说我猜」悬停海报以左上为原点放大，突出标题。

KIN//X 易拉宝缩小为 160px 宽，位于「MVP 说明」左侧，底部与「展开 AI 链路与产品价值」的折叠栏底部对齐，展开或调整屏幕尺寸时保持对齐；手机端上下排列。点击海报可查看原图，下方保留「创作过程」和原有七张介绍图片。

「你说我猜」视频预览展示作品海报，点击预览任意位置或播放按钮即可播放。项目海报缩为电脑端最高 620px 宽、手机端 80%（最高 300px），仍按设备切换横版或 A3 海报，放在现场照片上方。三张现场照片以 120px/秒自动横向循环（首页项目仍为 72px/秒），胶片上下边贴照片，悬停暂停、离开继续，支持手动切换、触屏与键盘操作。减少动态效果设置会停止自动播放。详情关闭后轮播会清理，重新打开恢复。

这一步修改前的版本保存在本地 Git 标签 `before-hackathon-media-20261105`（提交 `47fbaa0`），完整回退包为 `D:/WeiShuyuan-Portfolio-before-hackathon-20261105.zip`。可从该标签恢复 `index.html`、`refinement.css`、`refinement.js`，或直接解压回退包查看原版。

本次缩小海报、撤销首页强调和增加照片胶片轮播之前的版本保存在 `before-hackathon-refine-20261105`（提交 `061f065`），完整回退包为 `D:/WeiShuyuan-Portfolio-before-hackathon-refine-20261105.zip`。

本次底部对齐、灰色投影、轮播提速及视频海报调整之前的版本保存在 `before-media-layout-20261105`（提交 `5d22c8b`），完整回退包为 `D:/WeiShuyuan-Portfolio-before-media-layout-20261105.zip`。
