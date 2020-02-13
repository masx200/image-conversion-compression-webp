import find from "find";
function findfiles(pattern, root) {
    console.log([pattern, root]);
    return new Promise((s, j) => {
        find.file(pattern, root, files => {
            s(files);
        }).error(e => {
            j(e);
        });
    });
}
export default findfiles;
//# sourceMappingURL=findfiles.js.map