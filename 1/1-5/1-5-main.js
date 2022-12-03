console.log(printPeerToPeer(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"]));

function printPeerToPeer(arr) {
    if (!Array.isArray(arr)) throw new Error("Not an array!");
    let result = [];
    let len = (arr[0].split('-')).length;
    for (let item of arr) {
        if (typeof(item) !== 'string') throw new Error("Not a string!");
        const itemArr = item.split('-');
        if (itemArr.length !== len) throw new Error("Invalid size!");
        for (let i = 0; i < itemArr.length; i++) {
            if (result[i] === undefined) result = result.concat([[]]);
            if (!result[i].includes(itemArr[i])) result[i].push(itemArr[i]);
        }
    }
    return result;
}