import child_process from "child_process";

const { execFile } = child_process;
export interface EXECERROR{
error:child_process.ExecException
stdout:string,
stderr:string

}

export default function(cmd: string, args: string[]): Promise<{stdout:string,stderr:string}> {
    return new Promise((res, rej) => {
        execFile(cmd, args, function(
            error: child_process.ExecException | null,
            stdout,
            stderr
        ) {
            if (error) {
                return rej({error,stdout, stderr});
            } else {
                /*有的程序会往标准错误输出里写入*/
                return res({stdout, stderr});
            }
        });
    });
}
