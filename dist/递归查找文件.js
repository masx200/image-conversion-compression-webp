import fsextra from "fs-extra";
import path from "path";
import findfiles from "./findfiles.js";
export default async function 递归查找图片(extention, inputdir) {
    const extreg = new RegExp(`\\.(${extention.join("|")})$`, "i");
    const dirpath = path.resolve(inputdir);
    await fsextra.ensureDir(dirpath);
    return findfiles(extreg, dirpath);
}
