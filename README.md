# mpvue-project

## 项目说明

听歌音乐播放器(小程序)，本项目的目的是为了方便听歌用户，随时随地听歌，不需要下载APP,即用即听

运行项目时，微信开发者工具只需将 dist 文件夹放入即可。另，请将微信开发者工具中的 【不校验合法域名】 勾选！ 否则无法获取数据

数据均来自 [网易云API](https://binaryify.github.io/NeteaseCloudMusicApi/#/),启动项目前，请先启动网易云API服务器

``` bash
安装
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install

运行
$ node app.js

## 项目完成情况
  - 页面
    - index  首页
    - music  播放界面
    - search  搜索界面
    - playlist  播放列表
    - songItem  歌单详情
    - ranking  歌曲排行榜
    - MoreSongList  精品歌单推荐
  - 功能
    - 搜索
    - 加入播放列表
    - 暂停/播放
    - 整个歌单加入播放列表
    - 刷新播放列表
    - 上一曲/下一曲
    - 点赞
    - 评论轮播
    - banner轮播图

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
