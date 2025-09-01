const removeFromArray = function(arr,n) {
    for(let i=1;i<=arguments.length;i++){
        arr = arr.filter((a) => a!==n);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
