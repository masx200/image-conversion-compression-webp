import 创建异步限流队列 from "@masx200/async-task-current-limiter";
import argsobj from "./parsed-cli-options.js";
const 同时读取的最大文件数 = Number(argsobj["concurrent"]) || 10;
const 文件读取队列 = 创建异步限流队列(同时读取的最大文件数);
const asynclimiter = 文件读取队列;
export default asynclimiter;
