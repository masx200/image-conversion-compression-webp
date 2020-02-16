import path from "path";
import uuidv4 from "uuid/v4.js";
import { tempdir } from "./resize-write.js";
export function gettempjpgfilepath() {
    return path.resolve(tempdir, "temp-" + uuidv4() + ".jpg");
}
