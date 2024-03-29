import child_process from "child_process";
const { execFile } = child_process;
export default function execpromise(cmd, args) {
    return new Promise((res, rej) => {
        execFile(cmd, args, {}, function (error, stdout, stderr) {
            if (error) {
                return rej(
                    Object.assign(new Error(String(error)), {
                        error,
                        stdout,
                        stderr,
                    })
                );
            } else {
                return res({ stdout, stderr });
            }
        });
    });
}
