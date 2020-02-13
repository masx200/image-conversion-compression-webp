import gm from "gm";
import { wrapasynclimit } from "./wrap-async-function.js";

const { floor, sqrt } = Math;
export default wrapasynclimit(gmresize);

async function gmresize(
    inputfile: string,
    outfile: string,

    width: number,
    height: number,
    outputmaxpixels: number
) {
    /* 仅缩小图片 */
    if (outputmaxpixels < width * height && outputmaxpixels > 0) {
        const retio = sqrt(outputmaxpixels / (width * height));
        const outwidth = floor(width * retio);
        const outheight = floor(height * retio);
        console.log(
            JSON.stringify([
                "图像调整大小",
                inputfile,
                { width, height },
                { width: outwidth, height: outheight }
            ])
        );
        // '>'; /** Change dimensions only if image is larger than width or height */
        await new Promise((res, rej) => {
            gm(inputfile)
                .resize(outwidth, outheight, ">")
                .write(outfile, (err: Error | null) => {
                    if (err) {
                        return rej(err);
                    } else {
                        return res();
                    }
                });
        });
    } else {
        throw new Error();
    }
}
