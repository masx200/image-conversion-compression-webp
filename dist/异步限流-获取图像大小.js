import gm from "gm";
import { wrapasynclimit } from "./wrap-async-function.js";
export default wrapasynclimit(getimgsize);
async function getimgsize(filename) {
    const result = await new Promise((s, j) => {
        gm(filename).size((e, dimensions) => {
            if (e) {
                return j(e);
            }
            else {
                return s(dimensions);
            }
        });
    });
    return result;
}
//# sourceMappingURL=异步限流-获取图像大小.js.map