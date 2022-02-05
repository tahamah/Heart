function mileToKm(mailes){
    let km = mailes * 1.60934;
    return km;
}
const marathon = mileToKm(26.2);
console.log('marathon in km:', marathon);