const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }
    let fib = [];
    for (let i=0; i < a; i++){
        if (i == 0 || i == 1){
            fib[i] = 1;
        }
        else{
        fib[i] = fib[i-1] + fib[i-2]; 
        }
    }
    return fib[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
