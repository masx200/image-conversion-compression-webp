import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import 图片处理限流 from "./图片处理限流.js";
const { asyncwrap } = 图片处理限流;
export default asyncwrap(img2webp);
async function img2webp(input, output) {
    let execout = await execpromise(getBin("cwebp"), [
        "-o",
        output,
        "-v",
        "--",
        input,
    ]);
    return execout;
}
