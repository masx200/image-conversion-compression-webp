import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(iswebp);
async function iswebp(input: string) {
    try {
        let execout = await execpromise(getBin("webpinfo"), [input]);
        console.log(execout);
        const stdout = execout[0];
        if (stdout.includes(`No error detected.`)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        // const stderr = execout[1];
        return false;
    }
}
