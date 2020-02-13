export function shouldresize(
    width: number,
    height: number,
    outputmaxpixels: number
) {
    return (
        typeof outputmaxpixels === "number" &&
        outputmaxpixels > 0 &&
        outputmaxpixels < width * height
    );
}
