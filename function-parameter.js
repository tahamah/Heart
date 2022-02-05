function bringSingara(taka) {
    console.log("Singra er jonno dice", taka)
    console.log("Mama singra den")
    var singraPrice = 10;
    var singraQuantity = taka / singraPrice;
    return singraQuantity;
}
var money = 50;
var singara = bringSingara(money);
console.log("Mama, ai nen", singara, "ta singara.");