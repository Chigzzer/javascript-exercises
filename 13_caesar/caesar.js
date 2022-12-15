const caesar = function(string, number) {
    let codedString= [];
    console.log(string);
    for (let i = 0; i < string.length; i++){
        //console.log(number);
        let lowerLimit;
        let upperLimit;
        if (string[i] == ' ' || string[i] == '.' || string[i] == ',' || string[i] == '!' || string[i] == '?' || string[i] == "'"){
            codedString.push(string[i]);
            continue;
        }
        else if (string[i] == string[i].toUpperCase()){
            lowerLimit = 65;
            upperLimit = 90;
        }
        else{
            lowerLimit = 97;
            upperLimit = 122;
        }
        let code = string[i].charCodeAt(0);
        //console.log(`original code: ${code}`);
        let caesarCode = code + number;
        while (caesarCode < lowerLimit || caesarCode > upperLimit){
            if (caesarCode < lowerLimit){
                let overShot = lowerLimit - caesarCode - 1;
                caesarCode = upperLimit - overShot; 
            }
            else if (caesarCode > upperLimit){
                let overShot = caesarCode - upperLimit - 1;
                caesarCode = lowerLimit + overShot; 
            }
        }       
        codedString.push(String.fromCharCode(caesarCode));        
    }
    console.log(`string: ${codedString}`);
    return codedString.join('');

};

// Do not edit below this line
module.exports = caesar;
