const argsobj = parseargs(process.argv.slice(2));
import 创建异步限流队列, {
    statusdata
} from "@masx200/async-task-current-limiter";
import { parseargs } from "./parse-args.js";
// import { argsobj } from "./cli.js";
// import { 图片处理限流 } from "./cli.js";
const 同时读取的最大文件数 = Number(argsobj["concurrent"]) || 8;
const 图片处理限流 = 创建异步限流队列(同时读取的最大文件数);
// import { 同时读取的最大文件数 } from "./cli.js";

const asynclimiter = 图片处理限流;
export default asynclimiter;
const listener = (data: statusdata) =>
    console.log("图片处理限流" + JSON.stringify(data));

asynclimiter.target.on("free", listener);

asynclimiter.target.on("full", listener);
