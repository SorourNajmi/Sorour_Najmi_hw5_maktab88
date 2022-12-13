
console.log(separators(100));
console.log(separators(-20301548));
console.log(separators(+2467.65));

function separators(numb) {
    if (isNaN(numb)) throw new Error("Not a number!");
    if (!Number.isInteger(numb)) throw new Error("Invalid number!");
    let separatedStr = String(numb);
    if (separatedStr.length <= 3) return numb;
    let flagFloat = false;
    let floatArr = [];
    let signStr = '';
    let separatedArr = [];
    if (separatedStr.includes('.')) {
        floatArr = separatedStr.split('.');
        separatedStr = floatArr[0];
        flagFloat = true;
    }
    if (separatedStr[0] === '-') {
        signStr = '-';
        separatedStr = separatedStr.slice(1);
    }
    separatedArr = separatedStr.split('');
    let index = (separatedArr.length % 3);
    while (index < separatedArr.length) {
        separatedArr.splice(index, 0, ',');
        index += 4;
    }
    separatedStr = signStr.concat(separatedArr.join(''));
    if (flagFloat) {
        separatedStr = separatedStr + '.' + floatArr[1];
    }
    return separatedStr;
}