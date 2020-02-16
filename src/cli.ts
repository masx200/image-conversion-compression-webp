#!/usr/bin/env node
let 同时读取的最大文件数 = 8;
export {同时读取的最大文件数}
import process from "process";
import config from "./image-config.js";
import { start } from "./index.js";
import { parseargs } from "./parse-args.js";

const argsobj = parseargs(process.argv.slice(2));
const { input, output } = argsobj;
const maxpixels = Number(argsobj["maxpixels"]);
if (input && output) {
    const options = Object.assign({}, config, { input, output });
    if (maxpixels) {
        options.maxpixels = maxpixels;
    }
    console.log(JSON.stringify(options));
    start(options);
} else {
    console.error("图片转换和压缩到webp ,可设置输出图片最大像素数");
    console.error("示例:");
    console.error(
        `node ./dist/cli.js --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/`
    );
    console.error(
        `node ./dist/cli.js --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/ --maxpixels=4000000`
    );
    console.error("输入的参数有误!");
    process.exit(1);
}
