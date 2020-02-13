import fsextra from "fs-extra";
import path from "path";
import findfiles from "./findfiles.js";

export default async function 递归查找图片(
    extention: string[],
    inputdir: string
) {
    /*不区分大小写的正则*/
    /* 匹配正则不要加'g',否则出错一半true,一半false */
    const extreg = new RegExp(`\\.(${extention.join("|")})$`, "i");
    const dirpath = path.resolve(inputdir);
    await fsextra.ensureDir(dirpath);

    return findfiles(extreg, dirpath);
}
