import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(iswebp);
async function iswebp(input) {
    try {
        let execout = await execpromise(getBin("webpinfo"), [input]);
        console.log(execout);
        const stdout = execout.stdout;
        if (stdout.includes(`No error detected.`)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        const stdout = error?.stdout;
        if (stdout?.includes?.("Errors detected.")) {
            return false;
        }
        throw error;
    }
}
