const leapYears = function(n) {
    if(n%4==0){
        if(n%100==0){
            if(n%400==0){
                return true;
            }
        } else{
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
