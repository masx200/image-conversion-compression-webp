import 创建异步限流队列 from "@masx200/async-task-current-limiter";
const 同时读取的最大文件数 = 20;
const 文件读取队列 = 创建异步限流队列(同时读取的最大文件数);
export default 文件读取队列;
const asynclimiter = 文件读取队列;
const listener = (data) => console.log("文件读取限流" + JSON.stringify(data));
asynclimiter.target.on("free", listener);
asynclimiter.target.on("full", listener);
