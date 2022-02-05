var num = [2,5,6,8,9,7,3,6,4];
let sum = 0;
for(let i = 0; i < num. length; i ++){
    const element = num[i];
    sum = sum + element;
}
console.log(sum);

function sumTheArray (num){
    let sum = 0;
    for(let i = 0; i < num. length; i ++){
        const element = num[i];
        sum = sum + element;
    }
    return sum;
}
 var resulat = sumTheArray([4,5,1])
 console.log(resulat);