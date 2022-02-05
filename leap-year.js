// function isLeapYear (year){
//     if(year % 4 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let myYear = 2232;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log(isMyYearLeapYear);





function isLeapYear (year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
}

let myYear = 2232;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear);