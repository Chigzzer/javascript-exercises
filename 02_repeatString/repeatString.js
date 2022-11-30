const repeatString = function(string, num ) {
    let stringNew = "";
    if (num < 0){
        stringNew = "ERROR";
    }
    for (let i = 0; i < num; i++){
        stringNew += string;
    }
    return stringNew;

};

// Do not edit below this line
module.exports = repeatString;
