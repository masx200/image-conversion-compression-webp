import child_process from "child_process";
const { execFile } = child_process;
export default function (cmd, args) {
    return new Promise((res, rej) => {
        execFile(cmd, args, function (err, stdout, stderr) {
            if (err) {
                return rej([err, stdout, stderr]);
            }
            else {
                return res([stdout, stderr]);
            }
        });
    });
}
//# sourceMappingURL=execpromise.js.map