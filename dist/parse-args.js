function parseargs(args) {
    const 参数obj = {};
    args.filter(s => s.startsWith("--"))
        .map(s => /--(?<key>.+)=(?<value>.+)/g.exec(s))
        .forEach(execArray => {
            const groups =
                execArray === null || execArray === void 0
                    ? void 0
                    : execArray.groups;
            const key =
                groups === null || groups === void 0 ? void 0 : groups.key;
            const value =
                groups === null || groups === void 0 ? void 0 : groups.value;
            if (key && value) {
                参数obj[key] = value;
            }
        });
    return 参数obj;
}
export { parseargs };
