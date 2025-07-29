const sumAll = function(n,m) {
    let sum = 0;


    if(n<0 || m<0 || n instanceof Array || m instanceof Array || (n%1!=0) || (m%1!=0) || typeof(n) != "number" || typeof(m) != "number"){
        return 'ERROR';
    }
    if(n>m){
        let temp = n;
        n = m;
        m = temp;
    }
    for(let i=n;i<=m;i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
