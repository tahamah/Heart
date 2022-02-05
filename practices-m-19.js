// simple function 
/* function yourName (){
    console.log('Name to jani na.')
}
yourName(); */

//function with parameter 
/*function addtionTwoNumber (num1, num2, num3){
 var addition = num1 + num2 + num3;
 return addition;
}
var result = addtionTwoNumber(14, 15, 11);
console.log(result); 

function numbers (num1 ,num2){
    var divition = num1 / num2;
    return divition
}
 var result = numbers(50, 10);
 console.log("vag fol =",result); */

//Object
/* var myPhone = {
    Name: 'Sumsang',
    Color: 'Black',
    Ram: '4GB',
    Rom : '64GB',
    Price: 200,
    Cpu: 'Octa Cor'
}
console.log(myPhone);
console.log('Phone color=',myPhone.Color,'.');
var phonePrice = myPhone.Price;
console.log('Phone price=',phonePrice,'.');
//new valu sat
myPhone.Price= 100;
myPhone['Price']= 02;
var rom = 'Rom';
myPhone[rom] = '12GB';
console.log(myPhone);
 */

//switc

/* var color = 'yellow ';
switch(color){
    case 'red':
        console.log("Lale lale laltu miya");
        break;
    case 'green':
        console.log('You are my dear Green');
        break;
    case 'yellow':
        console.log('OH! You are my supper Yellow!');
        break;
} 


const favoritName = 'azmol';
switch(favoritName){
    case 'arzu':
        console.log('A Want To You Bro.');
        break;

    case 'azmol':
        console.log('Your are my Love');
        break;
}*/


// loop er modde brack 
/* for(var i = 0; i <= 30; i++){
    console.log(i);
    if(i == 12){
        break;
    }   
} */

/* var nums = [1,2,12,18,58,65,84,49,35,15,35,156,48,16,15,64,35,15,49,35,65,]
for(var i = 0; i < nums.length; i++){
    var num = nums[i];
    if(num >= 70){
        continue;
    }
    console.log(num);
} */


/* var frindesName = ['aleya','daliya','baliya','saliya','kaliya','naliya'];
for (var i = 0; i < frindesName.length; i++){
var friend = frindesName[i];
     
    if(friend != 'kaliya'){
        continue;
    }
    console.log(i+'.',friend);
} */


function squer (num){
  var low = num.toLowerCase();
    return low;
}
var result = squer('TAHA')
console.log(result)