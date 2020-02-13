export function shouldresize(width, height, outputmaxpixels) {
    return (typeof outputmaxpixels === "number" &&
        outputmaxpixels > 0 &&
        outputmaxpixels < width * height);
}
//# sourceMappingURL=shouldresize.js.map