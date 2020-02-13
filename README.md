# Image-conversion-compression-webp

图片转换和压缩到 webp ,可设置输出图片最大像素数

给文件读取异步操作限流,防止文件打开过多报错

## 安装依赖

先安装 `GraphicsMagick`

```shell
sudo apt install graphicsmagick

```

或者下载`GraphicsMagick`

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@GraphicsMagick-1.3.34-Q16-win64/GraphicsMagick-1.3.34-Q16-win64-dll.exe.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@GraphicsMagick-1.3.34-Q16-win64/GraphicsMagick-1.3.34.tar.xz

需要安装`libwebp`

```shell
sudo apt install  libwebp

```

或者下载`libwebp`的可执行文件

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@libwebp/libwebp-1.1.0-linux-x64.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@libwebp/libwebp-1.0.1-windows-x64.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@libwebp-1.1.0-aarch64/libwebp-1.1.0-aarch64.zip

安装 `node_modules`

```shell
yarn install
```

## 编译脚本

```shell
yarn build
```

## 运行脚本

```shell
yarn start
```

# 示例:

`inputdir`:输入图片目录
`outputdir`:输出图片目录
`outputmaxpixels`:输出图片最大像素数

```shell
node ./dist/cli.js --inputdir=D:/baidupandownload/图片输入/ --outputdir=D:/baidupandownload/图片输出/

```

```shell
node ./dist/cli.js --inputdir=D:/baidupandownload/图片输入/ --outputdir=D:/baidupandownload/图片输出/ --outputmaxpixels=4000000
```
