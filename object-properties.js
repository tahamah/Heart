var computer = {
    price:30000,
    storage:"156gb",
    color:"black",
    rom:"1tb",
    cpu:"intel i5"
}
// console.log(computer);
 console.log("cpu  =",computer.cpu);
 var price = (computer.price);
 console.log("Price=",price);

 //01.set a object property value
  computer.cpu = 'intle i 7';
 console.log(computer);
  //02.different ways to set a object property value
  computer["cpu"] = "intel i3";
  console.log(computer);
//03.different ways to set a object property value
  var cpuProperty = "cpu";
  computer[cpuProperty] = "amd-5";
  console.log(computer);