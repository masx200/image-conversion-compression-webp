export function getBin(name: string) {
    return process.platform === "win32" ? `${name}.exe` : name;
}
