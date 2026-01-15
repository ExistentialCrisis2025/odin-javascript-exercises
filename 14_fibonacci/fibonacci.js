const fibonacci = function(a) {
    if(a<0){
        return "OOPS";
    }
    if(a==0){
        return 0;
    }
    if(a<=2){
        return 1;
    }
    let i = 1;
    let j = 1;
    for(let temp = 3;temp<=a;temp++){
        let c = i+j;
        i = j;
        j = c;
    }
    return j;
};

// Do not edit below this line
module.exports = fibonacci;
