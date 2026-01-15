const findTheOldest = function(a) {
    return a.reduce((accumulator,current) => {
        let temp;
        if("yearOfDeath" in current){
            temp = current["yearOfDeath"] - current["yearOfBirth"];
        } else{
            temp = 2025 - current["yearOfBirth"];
        }
        if(temp > accumulator.age){
            accumulator.age = temp;
            accumulator.name = current["name"];
            return accumulator;
        }
        return accumulator;
    },{name:"",age:0});
    
};

// Do not edit below this line
module.exports = findTheOldest;
