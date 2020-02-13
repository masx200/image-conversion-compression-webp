import execpromise from "./execpromise.js";
import { getBin } from "./getBin";
import { wrapasynclimit } from "./wrap-async-function.js";
async function img2webp(input, output) {
    let execout = await execpromise(getBin("cwebp"), [
        "-o",
        output,
        "-v",
        "--",
        input
    ]);
    return execout;
}
export default wrapasynclimit(img2webp);
//# sourceMappingURL=异步限流-img2webp.js.map