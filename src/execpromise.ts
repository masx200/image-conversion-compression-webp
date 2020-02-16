import child_process from "child_process";

const { execFile } = child_process;

export default function(cmd: string, args: string[]): Promise<string[]> {
    return new Promise((res, rej) => {
        execFile(cmd, args, function(
            err: child_process.ExecException | null,
            stdout,
            stderr
        ) {
            if (err) {
                return rej(err);
            } else {
                /*有的程序会往标准错误输出里写入*/
                return res([stdout, stderr]);
            }
        });
    });
}
