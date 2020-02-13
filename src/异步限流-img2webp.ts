import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";

async function img2webp(input: string, output: string) {
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
