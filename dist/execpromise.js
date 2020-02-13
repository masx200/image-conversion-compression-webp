import child_process from "child_process";
const { execFile } = child_process;
export default function (cmd, args) {
    return new Promise((res, rej) => {
        execFile(cmd, args, function (err, stdout, sterr) {
            if (err) {
                return rej(err);
            }
            else {
                return res([stdout, sterr]);
            }
        });
    });
}
//# sourceMappingURL=execpromise.js.map