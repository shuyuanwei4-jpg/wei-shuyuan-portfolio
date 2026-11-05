# 韦舒媛 · AI 互动产品与体验设计作品集

公开网站：https://shuyuanwei4-jpg.github.io/wei-shuyuan-portfolio/

完整的静态网站源码与媒体文件，无需安装依赖。双击 `index.html` 可以本地浏览；将整个文件夹发送给别人，对方也可以解压后打开。

## 文件

- `index.html`：页面结构与项目详情正文。
- `refinement.js`：项目资料、卡片、轮播、详情展开及视频交互。
- `refinement.css`：字体、布局、悬停效果及手机适配。
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

更新日期：2026-11-05。
