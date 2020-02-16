export function shouldresize(width, height, outputmaxpixels) {
    return (typeof outputmaxpixels === "number" &&
        Infinity > outputmaxpixels &&
        outputmaxpixels > 0 &&
        outputmaxpixels < width * height);
}
