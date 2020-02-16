export function shouldresize(
    width: number,
    height: number,
    outputmaxpixels: number
) {
    return (
        typeof outputmaxpixels === "number" &&
        Infinity > outputmaxpixels &&
        outputmaxpixels > 0 &&
        outputmaxpixels < width * height
    );
}
