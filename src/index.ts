import process from "process";
import IMAGECONFIG from "./IMAGECONFIG.js";
import resizeimage from "./resizeimage.js";
import 递归查找图片 from "./递归查找文件.js";

"use strict";
process.on("unhandledRejection", (err) => {
    throw err;
});
let filesum = 0;
let finishcount = 0;

let failcount=0

export { start };
async function start(config: IMAGECONFIG) {
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
    /*读取文件交给GM去做，*/
   await handleconvert(files,



                input,
                outputextention,
                output,
                maxpixels)
}



async function handleconvert(files,



                input,
                outputextention,
                output,
                maxpixels){

await Promise.all(
        files.map(async (inputfile) => {
try{
            await resizeimage(
                inputfile,
                input,
                outputextention,
                output,
                maxpixels
            );
finishcount++;
            
            
}

catch(e){

failcount++
}
let 进度 = `${
                (finishcount / filesum) * 100
            }% ${finishcount} / ${filesum} `;

process.title = 进度;
            console.log("processing: " + 进度);
            
        })
    );
}
