# Image-conversion-compression-webp

图片其他类型转换和压缩到 `webp`格式 ,可设置输出图片最大像素数

给文件读取异步操作限流,防止文件打开过多报错

判断输入图片内容类型,是否`webp`,如果是,则重命名扩展名为`webp`,因为有些图片的扩展名不正确

## 安装依赖

### 先安装 `GraphicsMagick`

```shell
sudo apt install graphicsmagick

```

或者下载`GraphicsMagick`

ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.35-Q8-win64-dll.exe

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@GraphicsMagick-1.3.34-Q16-win64/GraphicsMagick-1.3.34-Q16-win64-dll.exe.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@GraphicsMagick-1.3.34-Q16-win64/GraphicsMagick-1.3.34.tar.xz

### 需要安装`libwebp`

```shell
sudo apt install  libwebp

```

或者下载`libwebp`的可执行文件

http://downloads.webmproject.org/releases/webp/

http://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.1.0-windows-x64.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@libwebp/libwebp-1.0.1-windows-x64.zip

https://cdn.jsdelivr.net/gh/masx200/long-image-split-square@libwebp-1.1.0-aarch64/libwebp-1.1.0-aarch64.zip

### 安装 `node_modules`

```
yarn add @masx200/image-conversion-compression-webp
```

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

# 命令行示例:

必选参数 `input`:类型 `string`,输入图片目录

必选参数 `output`:类型`string`,输出图片目录

可选参数 `maxpixels`:类型`number`,输出图片最大像素数

可选参数 `concurrent`:类型`number`,同时运行的图片处理进程最大值

可选参数 `inputextentions`:类型`string`,输入的文件扩展名,使用逗号分隔

```shell
node ./dist/cli.js --input=D:/baidupandownload/图片输入/ --output=D:/baidupandownload/图片输出/

```

```shell
node ./dist/cli.js --input=D:/baidupandownload/图片输入/ --output=D:/baidupandownload/图片输出/ --maxpixels=4000000 --concurrent=4
```

```
npx @masx200/image-conversion-compression-webp --input=C:\Pictures\2020年5月17日\图片 --output=C:\Pictures\2020年5月17日\图片
```
