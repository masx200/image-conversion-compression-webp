import path from "path";
import getimgsize from "./异步限流-获取图像大小.js";
import 计算长图切割参数 from "./计算长图切割参数.js";
import cropimagewrite from "./切割图片读取并写入.js";
import fsextra from "fs-extra";
// import 文件读取队列 from "./文件读取队列.js";

export default async function splitimageandwrite(
    inputfile: string,
    inputdir: string,
    outputextention: string,
    outputdir: string,
    outputmaxpixels: number
): Promise<void> {
    console.log("获取图片像素尺寸", inputfile);
    /* 文件读取要限流 */
    // const { width, height } = await 文件读取队列.add([getimgsize, [inputfile]]);
    const { width, height } = await getimgsize(inputfile);
    console.log(["图像大小", inputfile, { width, height }]);
    const 切割参数 = 计算长图切割参数(height, width);
    await fsextra.ensureDir(outputdir);
    if (切割参数) {
        console.log(["切割长图", inputfile, 切割参数]);
        /* 等待每个都完成之后才完成 */
        await Promise.all(
            切割参数.map(async ({ left, height, width, top }, index) => {
                const outbasename =
                    path.basename(inputfile, path.extname(inputfile)) +
                    "-" +
                    index +
                    "." +
                    outputextention;
                const 输入相对路径 = path.dirname(
                    inputfile.slice(path.resolve(inputdir).length + 1)
                );
                const outfile = path.join(outputdir, 输入相对路径, outbasename);
                await fsextra.ensureDir(path.dirname(outfile));
                console.log(["开始写入文件", outfile]);

                await cropimagewrite(
                    inputfile,
                    outfile,
                    width,
                    height,
                    left,
                    top,
                    outputmaxpixels
                );

                // await fs.promises.writeFile(outfile, outbuffer);
                console.log(["写入文件完成", outfile]);
            })
        );
    } else {
        console.log(["不是长图", inputfile]);
        //return
    }
}
//
