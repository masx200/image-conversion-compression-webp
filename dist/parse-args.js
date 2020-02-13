function parseargs(args) {
    const 参数obj = {};
    args.filter(s => s.startsWith("--"))
        .map(s => /--(?<key>.+)=(?<value>.+)/g.exec(s))
        .forEach(execArray => {
        var _a, _b, _c;
        const groups = (_a = execArray) === null || _a === void 0 ? void 0 : _a.groups;
        const key = (_b = groups) === null || _b === void 0 ? void 0 : _b.key;
        const value = (_c = groups) === null || _c === void 0 ? void 0 : _c.value;
        if (key && value) {
            参数obj[key] = value;
        }
    });
    return 参数obj;
}
export { parseargs };
//# sourceMappingURL=parse-args.js.map