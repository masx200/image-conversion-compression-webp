import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(iswebp);
async function iswebp(input: string) {
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
        // console.error(error);
        //@ts-ignore
        const stdout = error?.stdout;
        if (stdout?.includes?.("Errors detected.")) {
            return false;
        }
        throw error;
    }
}
