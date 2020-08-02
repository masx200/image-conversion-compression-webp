import path from "path";
import getimgsize from "./异步限流-获取图像大小.js";

import resizewrite from "./resize-write.js";
import fsextra from "fs-extra";
import 异步限流IsWebp from "./异步限流-is-webp.js";
import fs from "fs";
export default async function resizeimage(
    inputfile: string,
    inputdir: string,
    outputextention: string,
    outputdir: string,
    outputmaxpixels: number
): Promise<void> {
    const iswebp = await 异步限流IsWebp(inputfile);
    if (iswebp) {
        const ext = path.extname(inputfile);
        /* ext '.jpg' */
        const 修改扩展名后的路径 = inputfile.replace(
            new RegExp("\\" + ext, "g"),
            ".webp"
        );

        console.log(
            "发现图片为webp,但扩展名不正确",
            "重命名文件",
            inputfile,
            修改扩展名后的路径
        );
        await fs.promises.rename(inputfile, 修改扩展名后的路径);
        return;
    } else {
        console.log("获取图片像素尺寸", inputfile);

        const { width, height } = await getimgsize(inputfile);
        console.log(JSON.stringify(["图像大小", inputfile, { width, height }]));

        await fsextra.ensureDir(outputdir);

        const outbasename =
            path.basename(inputfile, path.extname(inputfile)) +
            "-" +
            "." +
            outputextention;
        const 输入相对路径 = path.dirname(
            inputfile.slice(path.resolve(inputdir).length + 1)
        );
        const outfile = path.join(outputdir, 输入相对路径, outbasename);
        await fsextra.ensureDir(path.dirname(outfile));
        console.log(JSON.stringify(["开始写入文件", outfile]));

        await resizewrite(
            inputfile,
            outfile,
            width,
            height,

            outputmaxpixels
        );

        console.log(JSON.stringify(["写入文件完成", outfile]));
    }
}
