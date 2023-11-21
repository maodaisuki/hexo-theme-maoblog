### 在线预览

![Preview](./all-devices-black.png)

* [在线预览](https://maodaisuki.github.io/hexo-theme-maoblog)

### 感谢

开发过程中参考了 [one-paper](https://github.com/zheli-design/hexo-theme-one-paper) 和 [delicate](https://github.com/can-dy-jack/hexo-theme-delicate)。

### 使用 Github Page 搭建

写在前面：最新版本 maoblog 前往 https://github.com/maodaisuki/blog 查看。maoblog 已不再维护。

#### Step 1 简单部署

下载主分支（main）。

![Uploading image-20231121212622056.png…]()

压缩包解压到任意空目录，这里使用 blog 目录，并且使用了 vscode 作为编辑器。

![image-20231121213007859](https://github.com/maodaisuki/hexo-theme-maoblog/assets/133942310/c6b897f8-cddd-437a-aeeb-6a2ae3c729cd)

安装 nodejs。在 blog 目录使用 cmd 运行下列命令（由于未配置的 powershell 对于部分命令会提示 `无法加载文件 xxx, 因为在此系统上禁止运行脚本`，为了避免不必要的麻烦使用 cmd（终端)）。

```js
# 安装 nodejs 的时候会顺带安装 npm 工具
# 安装依赖
npm install
```

效果如下图。

![Uploading image-20231121214242347.png…]()

然后运行命令启动本地服务器。

```
# 启动本地服务器
hexo s
```

效果如下图，复制提示的链接本地预览。

![image-20231121214320351](https://github.com/maodaisuki/hexo-theme-maoblog/assets/133942310/6c4f97d9-d020-4b73-a898-3322625c1f92)

#### Step 2 自定义配置

这部分将主题自带信息更改为自己的信息。

首先是根目录下的 `_config.yml` 文件。主要修改第 5 行开始的 `#site` 部分和第 14 行开始的 `#URL` 部分。参见注释。

```yml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
# title: 网站标题, 页面顶部和标签页文本
title: Blog
# 网站副标题和描述
subtitle: 'maoblog'
description: 'A hexo theme.'
keywords:
# 作者信息、语言时区之类的，可以改一下作者信息，由于主题没有用到相关信息，所以不是很重要
author: John Doe
language: en
timezone: ''

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
# 为了使用本地搜索，这里最后请不要加入 /
# 如果打算部署在 github 的 username.gitub.io 仓库，将值替换为 https://username.github.io
# 否则，直接将 hexo-theme-blog 替换为仓库名即可
url: https://maodaisuki.github.io/hexo-theme-maoblog
# 文章链接格式，这里为 年/月/标题
permalink: :year/:month/:title/
# :year/:month/:day/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

然后是根目录下的 `_config.maoblog.yml` 文件。参见注释酌情修改。

```yml
# html lang
language: en

# main menu navigation
# 菜单栏显示项
menu:
  Posts: /
  Tags: /tags
  Search:
# Search 注意和 header.ejs 中匹配
  About: /about
#  Contact: /contact
#  Archives: /archives

# 版权信息, 作者名
copyright:
  name: mao

# 许可证及链接
license:
  name: CC-BY-NC-SA 4.0
  url: https://creativecommons.org/licenses/by-nc-sa/4.0/

# 未命名的文章默认标题
# writing
untitled:
  name: Untitled

rss:
  path: atom.xml
  
mathjax:
  enable: true

# 是否启用 mermaid 画图
mermaid: ## mermaid url https://github.com/knsv/mermaid
  enable: true
  theme: default

# 启动评论系统
giscus:
  enable: true

search:
  path: search.xml
  field: post
  content: true

tag_generator:
  per_page: 0
  # 0 设置为每页不限制数量
  order_by: -date

# 控制文章页面是否显示文章信息
meta:
  enable: true

# Google ads 用，现已废弃，可以删除此部分。
analytics:
  enable: true
  gtag: AW-11373423003

```

#### Step 3 配置评论系统（可选）

前往 https://giscus.app/zh-CN 根据提示获取代码片段。类似下面。

```
<script src="https://giscus.app/client.js"
        data-repo="[在此输入仓库]"
        data-repo-id="[在此输入仓库 ID]"
        data-category="[在此输入分类名]"
        data-category-id="[在此输入分类 ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

复制，在 `themes/maoblog/layout/about.ejs` 和 `themes/maoblog/layout/post.ejs` 对应部分进行替换。

#### Step 4 部署至 githubpage

通过 git 或者 github desktop 将 blog 目录下的所有文件上传至一个==空的仓库==，这里使用的仓库名为 `blog`。由于 `.github/page.yml` 内配置限制，请确保上传至 main 分支。

等待几分钟，等 github 自动部署完成后，前往 https://username.github.io/blog 即可以看到部署成功, 这里的 blog 为仓库名。如果使用的仓库名为 `username.github.io`，链接为 https://username.github.io





