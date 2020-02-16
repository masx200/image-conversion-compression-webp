import execpromise from "./execpromise.js";
import { getBin } from "./getBin.js";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(iswebp);
async function iswebp(input) {
    var _a, _b, _c, _d;
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
        console.error(error);
        const stdout = (_a = error) === null || _a === void 0 ? void 0 : _a.stdout;
        if ((_d = (_b = stdout) === null || _b === void 0 ? void 0 : (_c = _b).includes) === null || _d === void 0 ? void 0 : _d.call(_c, "Errors detected.")) {
            return false;
        }
        throw error;
    }
}
