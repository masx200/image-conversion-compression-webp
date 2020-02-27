import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(iswebp);
async function iswebp(input) {
    var _a;
    try {
        let execout = await execpromise(getBin("webpinfo"), [input]);
        console.log(execout);
        const stdout = execout.stdout;
        if (stdout.includes(`No error detected.`)) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        const stdout = error === null || error === void 0 ? void 0 : error.stdout;
        if ((_a = stdout === null || stdout === void 0 ? void 0 : stdout.includes) === null || _a === void 0 ? void 0 : _a.call(stdout, "Errors detected.")) {
            return false;
        }
        throw error;
    }
}
