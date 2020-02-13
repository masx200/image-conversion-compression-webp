export function getBin(name) {
    return process.platform === "win32" ? `${name}.exe` : name;
}
//# sourceMappingURL=getBin.js.map