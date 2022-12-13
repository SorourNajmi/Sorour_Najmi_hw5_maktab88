console.log(arrayDepth([-1, 12, 20]));
console.log(arrayDepth([10, [25, 13], [14, [55, [4]]], 2]));

function arrayDepth(arr) {
    if (!Array.isArray(arr)) throw new Error("Not an array!");
    let arrCopy = JSON.parse(JSON.stringify(arr));
    let depth = 0;
    let flag = true;
    do {
        flag = arrCopy.some(function (element) {
            return Array.isArray(element);
        })
        depth++;
        arrCopy = arrCopy.flat(1);
    } while (flag);
    return depth;
}