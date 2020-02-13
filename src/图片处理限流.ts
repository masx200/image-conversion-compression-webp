import 创建异步限流队列, {
    statusdata
} from "@masx200/async-task-current-limiter";

const 同时读取的最大文件数 = 8;

const 图片处理限流 = 创建异步限流队列(同时读取的最大文件数);

export default 图片处理限流;

const asynclimiter = 图片处理限流;

const listener = (data: statusdata) =>
    console.log("图片处理限流" + JSON.stringify(data));

asynclimiter.target.on("free", listener);

asynclimiter.target.on("full", listener);
