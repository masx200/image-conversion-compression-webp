#!/usr/bin/env node

import argsobj from "./parsed-cli-options.js";
import config from "./image-config.js";
import process from "process";
import { start } from "./index.js";

const { input, output } = argsobj;
const maxpixels = Number(argsobj["maxpixels"]);
const inputextentions = argsobj["inputextentions"];
const concurrent = argsobj["concurrent"];
if (concurrent) {
    config.concurrent = Number(concurrent);
}
if (inputextentions) {
    config.inputextentions = inputextentions.split(",").filter(Boolean);
}
if (maxpixels) {
    config.maxpixels = maxpixels;
}
if (input && output) {
    const options = Object.assign({}, config, { input, output });

    console.log(JSON.stringify(options, null, 4));
    Promise.resolve().then(() => {
        start(options);
    });
} else {
    console.error("图片转换和压缩到webp ,可设置输出图片最大像素数");
    console.error(`
必选参数 \`input\`:类型 \`string\`,输入图片目录

必选参数 \`output\`:类型\`string\`,输出图片目录
    
可选参数 \`maxpixels\`:类型\`number\`,输出图片最大像素数
    
可选参数 \`inputextentions\`:类型\`string\`,输入的文件扩展名,使用逗号分隔

可选参数 \`concurrent\`:类型\`number\`,同时运行的图片处理进程最大值`);

    console.error("示例:");
    console.error(
        `npx @masx200/image-conversion-compression-webp --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/`
    );
    console.error(
        `npx @masx200/image-conversion-compression-webp --input=D:/baidupandownload/图片输入/  --output=D:/baidupandownload/图片输出/ --maxpixels=4000000 --concurrent=4`
    );
    console.error("输入的参数有误!");
    process.exit(1);
}
