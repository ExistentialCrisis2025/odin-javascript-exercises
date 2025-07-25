const reverseString = function(txt) {
    let temp = txt.split('');
    let i = 0;
    let j = temp.length - 1;
    while(i<=j){
        let t = temp[i];
        temp[i] = temp[j];
        temp[j] = t;
        i++;
        j--;
    }
    return temp.join('');
};

// Do not edit below this line
module.exports = reverseString;
