console.log(case_insensitive_search('hello world', 'Hello'));
console.log(case_insensitive_search('hello world', 'he'));
console.log(case_insensitive_search('hello world', 'hi'));

function case_insensitive_search(str, word) {
    if (typeof(str) !== 'string' || typeof(word) !== 'string') {
        throw new Error("Not a string!");
    }
    const tempStr = str.toLowerCase();
    const tempWord = word.toLowerCase();
    return tempStr.includes(tempWord);
}