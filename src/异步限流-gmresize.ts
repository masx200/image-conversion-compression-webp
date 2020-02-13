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
        // '>'; /** Change dimensions only if image is larger than width or height */
        await new Promise((res, rej) => {
            gm(inputfile)
                .resize(floor(width * retio), floor(height * retio), ">")
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
        // await fs.promises.copyFile(inputfile, outfile);
    }
}

import gm from "gm";
import { wrapasynclimit } from "./wrap-async-function.js";
// import fs from "fs";
