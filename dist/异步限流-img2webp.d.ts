declare const _default: typeof img2webp;
export default _default;
declare function img2webp(
    input: string,
    output: string
): Promise<{
    stdout: string;
    stderr: string;
}>;
