const palindromes = function (string) {
    let stringUpper = string.toUpperCase();
    let array = Array.from(stringUpper);
    for (let i=0; i < array.length; i++){
        if (array[i] == " " || array[i]=="'"){
            array.splice(i, 1);
        }
        if (array[i] == "," || array[i]=="?"|| array[i]=="."|| array[i]=="!"){
            array.splice(i, 2);
        }
    }
    return array.join('') == array.reverse().join('') ? true:false;
};

// Do not edit below this line
module.exports = palindromes;
