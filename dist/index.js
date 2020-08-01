import process from "process";
import resizeimage from "./resizeimage.js";
import 递归查找图片 from "./递归查找文件.js";
("use strict");
process.on("unhandledRejection", (err) => {
    throw err;
});
let filesum = 0;
let finishcount = 0;
export { start };
async function start(config) {
    const {
        inputextentions,
        input,
        output,
        outputextention,
        maxpixels,
    } = config;
    console.log("递归查找图片...", input);
    const files = await 递归查找图片(inputextentions, input);
    filesum = files.length;
    console.log("找到图片文件" + files.length + "个");
    console.log(JSON.stringify(files, null, 4));
    await Promise.all(
        files.forEach(async (inputfile) => {
            await resizeimage(
                inputfile,
                input,
                outputextention,
                output,
                maxpixels
            );
            finishcount++;
            let 进度 = `${
                (finishcount / filesum) * 100
            }% ${finishcount} / ${filesum} `;
            process.title = 进度;
            console.log("processing: " + 进度);
        })
    );
}
