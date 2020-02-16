#!/usr/bin/env node
const argsobj = parseargs(process.argv.slice(2));
const 同时读取的最大文件数 = Number(argsobj["concurrent"]) || 8;
export { 同时读取的最大文件数 };
import process from "process";
import config from "./image-config.js";
import { start } from "./index.js";
import { parseargs } from "./parse-args.js";
const { input, output } = argsobj;
const maxpixels = Number(argsobj["maxpixels"]);
if (maxpixels) {
    config.maxpixels = maxpixels;
}
if (input && output) {
    const options = Object.assign({}, config, { input, output });
    console.log(JSON.stringify(options, null, 4));
    start(options);
}
else {
    console.error("图片转换和压缩到webp ,可设置输出图片最大像素数");
    console.error("示例:");
    console.error(`node ./dist/cli.js --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/`);
    console.error(`node ./dist/cli.js --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/ --maxpixels=4000000 --concurrent=4`);
    console.error("输入的参数有误!");
    process.exit(1);
}
