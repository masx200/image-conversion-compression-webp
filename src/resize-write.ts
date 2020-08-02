import fs from "fs";
import os from "os";

import img2webp from "./异步限流-img2webp.js";
import gmresize from "./异步限流-gmresize.js";
import { shouldresize } from "./shouldresize.js";
import { gettempjpgfilepath } from "./gettempjpgfilepath.js";
export const tempdir = os.tmpdir();
export default async function (
    inputfile: string,
    outfile: string,

    width: number,
    height: number,

    outputmaxpixels: number
): Promise<void> {
    if (shouldresize(width, height, outputmaxpixels)) {

try{
        const tempname1 = gettempjpgfilepath();
        await gmresize(inputfile, tempname1, width, height, outputmaxpixels);
        await img2webp(tempname1, outfile);

}
catch(e){}

finally{
        await fs.promises.unlink(tempname1);
}

    } else {
        await img2webp(inputfile, outfile);
    }
}
