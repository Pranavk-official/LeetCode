/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let str1 = "";
    let str2 = "";

    for (let i = 0; i <= word1.length - 1; i++) {
        console.log(word1[i])
        str1 += word1[i];
    }

    for (let i = 0; i <= word2.length - 1; i++) {
        console.log(word2[i])
        str2 += word2[i];
    }

    console.log(str1, str2)

    return str1 == str2
};