import fs from "fs";
import os from "os";
import img2webp from "./异步限流-img2webp.js";
import gmresize from "./异步限流-gmresize.js";
import { shouldresize } from "./shouldresize";
import { gettempjpgfilepath } from "./gettempjpgfilepath";
export const tempdir = os.tmpdir();
export default async function (inputfile, outfile, width, height, outputmaxpixels) {
    if (shouldresize(width, height, outputmaxpixels)) {
        const tempname1 = gettempjpgfilepath();
        await gmresize(inputfile, tempname1, width, height, outputmaxpixels);
        await img2webp(tempname1, outfile);
        await fs.promises.unlink(tempname1);
    }
    else {
        await img2webp(inputfile, outfile);
    }
}
//# sourceMappingURL=resize-write.js.map