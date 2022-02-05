// Problem-1 [ana to vori]
 function anaToVori (ana){
   if(typeof ana != 'number'){
       //input error message
       return 'Please, Enter a valid Number!';
   }
   else{
    //Calculation
    const convertingToVori = ana / 16;
    return convertingToVori;
   } 
}
//input parameter
const vori = anaToVori(50);
console.log(vori); 




// Problem-2 [panda cost]
function pandaCost ( singeraQuantity, somusaQuantity, jelapiQuantity){
    if(typeof singeraQuantity != 'number' || typeof somusaQuantity != 'number' || typeof jelapiQuantity != 'number'){
        //input error message
        return 'Please, Enter valid Number!';
    }
    else{
        //default value 
        const singeraPrice = 7;
        const somusaPrice = 10;
        const jelapiPrice = 15;
        //Calculation
        var singeraCalculation = singeraQuantity * singeraPrice;
        var somusaCalculation = somusaQuantity * somusaPrice;
        var jelapiCalculation = jelapiQuantity * jelapiPrice;
        var total = singeraCalculation + somusaCalculation+jelapiCalculation;
        //return
        return total;
    } 
}
//input parameter
const total = pandaCost(5,6,2);
console.log(total); 





// Problem-3 [Picnic Budget]
function picnicBudget (person){
    if(typeof person != 'number'){
        //input error message
        return 'Please, Enter a valid Number!';
    }
    else{
        // first condtion (100)
        if( person <= 100){
            var firstStep = 5000*person;
            return firstStep;
        }
        // second condtion (200)
        else if( person <= 200){
           var firstStep = 5000*100;
           person = person - 100;
           var secondStep = 4000 * person;   
           return firstStep + secondStep;
        }
        // third condtion (unlimited)
        else{
            var firstStep = 5000*100;
           var secondStep = 4000 * 100;   
           person = person - 200;
           var thirdStep = 3000 * person; 
           return firstStep + secondStep + thirdStep;
        }
    }
 }
 //input parameter
 var result = picnicBudget(201);
 console.log(result);




// Problem-4 [Odd Friend]
function oddFriend (friends){
    if(typeof friends != 'object'){
        //input error message
        return 'Please, Enter a valid Number!';
    }
    else{
        for(let i = 0; i < friends.length; i++){
            let friend = friends[i];
            
            if( friend.length % 2 == 0){
                continue;
            }
            else{
                var oddFriendName = friend;
                break;
            }   
        }
        return oddFriendName;
    } 
}

//input parameter
var myFrinds = ['tahira','taha','orpita','sathi','silpy'];
var result = oddFriend (myFrinds);
console.log(result);








 