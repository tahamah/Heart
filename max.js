/* var business = 500;
var minister = 650;
var army = 853;
var max = Math.max(business,minister,army);
console.log(max); */



/* var num1 =569;
var num2 =869;
var num3 =669;
var min = Math.min(num1, num2, num3);
console.log(min); */


// min 
function testSmaler (num1, num2, num3){
    if(num1 < num2 && num1 < num3){
       return num1; 
    }
    else if (num2 < num1 && num2 < num3){
        return num2
    }
    else{
        return num3;
    }
}
const smalnumber = testSmaler(220, 450 , 120);
console.log(smalnumber);