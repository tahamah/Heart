// Swap
/*var first = 5;
var second = 7;
console.log(first,second)
var tamp = first;
first = second;
second = tamp;
console.log(first,second)*/


// or (destructuring)
var first = 5;
var second = 7;
[first, second] = [second, first];
console.log(first,second);