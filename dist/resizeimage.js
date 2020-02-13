import path from "path";
import getimgsize from "./异步限流-获取图像大小.js";
import resizewrite from "./resize-write.js";
import fsextra from "fs-extra";
export default async function (inputfile, inputdir, outputextention, outputdir, outputmaxpixels) {
    console.log("获取图片像素尺寸", inputfile);
    const { width, height } = await getimgsize(inputfile);
    console.log(["图像大小", inputfile, { width, height }]);
    await fsextra.ensureDir(outputdir);
    const outbasename = path.basename(inputfile, path.extname(inputfile)) +
        "-" +
        "." +
        outputextention;
    const 输入相对路径 = path.dirname(inputfile.slice(path.resolve(inputdir).length + 1));
    const outfile = path.join(outputdir, 输入相对路径, outbasename);
    await fsextra.ensureDir(path.dirname(outfile));
    console.log(["开始写入文件", outfile]);
    await resizewrite(inputfile, outfile, width, height, outputmaxpixels);
    console.log(["写入文件完成", outfile]);
}
//# sourceMappingURL=resizeimage.js.map