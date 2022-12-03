console.log(flatenArray([-1, 12, 20]));
console.log(flatenArray([10, [25, 13], [14, [55]], 2]));

function flatenArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Not an array!");
    let flatArray = [];
    flat(arr);
    function flat(arr) {
        for (let element of arr) {
            if (!Array.isArray(element)) {
                flatArray = flatArray.concat([element]);
            } else {
                flat(element);
            }
        }
    }
    return flatArray;
}