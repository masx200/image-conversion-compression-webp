#!/usr/bin/env node
import process from "process";
import config from "./image-config.js";
import { start } from "./index.js";
import { parseargs } from "./parse-args.js";
const argsobj = parseargs(process.argv.slice(2));
const { inputdir, outputdir } = argsobj;
const outputmaxpixels = Number(argsobj["outputmaxpixels"]);
if (inputdir && outputdir) {
    const options = Object.assign({}, config, { inputdir, outputdir });
    if (outputmaxpixels) {
        options.outputmaxpixels = outputmaxpixels;
    }
    console.log(JSON.stringify(options));
    start(options);
}
else {
    console.log("图片转换和压缩到webp ,可设置输出图片最大像素数");
    console.log("示例:");
    console.log(`node ./dist/cli.js --inputdir=D:/baidupandownload/图片输入/  --outputdir=D:/baidupandownload/图片输出/`);
    console.log(`node ./dist/cli.js --inputdir=D:/baidupandownload/图片输入/  --outputdir=D:/baidupandownload/图片输出/ --outputmaxpixels=4000000`);
    console.log("输入的参数有误!");
    process.exit(1);
}
//# sourceMappingURL=cli.js.map