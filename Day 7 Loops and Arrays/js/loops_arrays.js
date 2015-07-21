/**
 Brandyn Stroud
 Section 00
 7-21-2015
 Loops & Arrays
 */

//alert("Loops and arrays");

//Create an array of Scooby Doo characters

var scoobyGang = ["Scooby", "Shaggy", "Velma", "Daphne"];


//Push an array
scoobyGang.push("Fred");
scoobyGang.push("Scooby Dum");
scoobyGang.push("Scrappy");
//Cycle through this array this array and tell each one of them that they solved the case
console.log(scoobyGang.length);

for(var i = 0; i<scoobyGang.length; i++){
 console.log("You solved the case " +scoobyGang[i]);


}


//Lets create an array of bills
var bills = [50, 10, 5, 20, 10, 40];

//Lets create a variable and define it for total
var total = 0;

//Lets create a loop to add up all are bills from dinner

for(var j=0; j<bills.length; j++){
 //Test to get each item in bills
 //console.log(bills[j]);

 //only add up bills over 15
 if(bills[j]>=15) {


  //add up the value of bills
  total += bills[j];

 }

}
console.log("The total of your bills is " +total);