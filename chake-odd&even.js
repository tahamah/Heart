function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    return false
}
let myNum = 1625;
const isMyNumEven = isEven(myNum);
console.log('IS my Number even?')
console.log('=',isMyNumEven);


let herNum = 1820;
const isHerNumEven = isEven(herNum);
console.log('IS her Number even?')
console.log("=",isHerNumEven);