import process from "process";
import { parseargs } from "./parse-args.js";
const argsobj = parseargs(process.argv.slice(2));
export default argsobj;
