import path from "path";
import { v4 as uuidv4 } from "uuid";
import { tempdir } from "./resize-write.js";
export function gettempjpgfilepath() {
    return path.resolve(tempdir, "temp-" + uuidv4() + ".jpg");
}
