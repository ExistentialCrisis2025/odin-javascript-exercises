const palindromes = function (a) {
    let i = 0;
    let b = "";
    for(let temp = 0;temp<a.length;temp++){
        if((a.charAt(temp)>='a' && a.charAt(temp)<='z') || (a.charAt(temp)>='A' && a.charAt(temp)<='Z') || (a.charAt(temp)>='0' && a.charAt(temp)<='9')){
            b+=a.charAt(temp);
        }
    }

    let j = b.length - 1;
    b = b.toLowerCase()
    while(i<=j){
        if(b.charAt(i) != b.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
