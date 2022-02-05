function getFactorial (num){
let factiorial = 1;
for (let i = 1; i <= num; i++){
    factiorial = factiorial * i;
}
return factiorial;
}

let firstFactorial = getFactorial(7);
console.log(firstFactorial);