/*
Brandyn Stroud
 Section 00
 7-14-2015
 Logical Operators
 */

//alert("Itdasnfajap");

var scooterCost = 1000;
var budget = 800;
var paycheck = 500;

//if price is less than our budget then we can buy it
//And if our paycheck is over 400 dollars;


if(scooterCost<budget){
    console.log("WE can buy the scoot scoot!");

} else {
    console.log("Nah, son. You too broke.")
}

if(paycheck>400){
    console.log("We can buy the scoot scoot");

} else {
    console.log("Your money aint sitting right, bruh");
}

//use the && logical operators to test both conditionals at one time

if(scooterCost<budget && paycheck>400){
    console.log("You barely got this ride.");

} else {
    console.log("You still too broke for this scooter.");
}

//|| Logical operators
//Either one must be true in order to be true

//If the scooter is less than or equal to our budget || if we won the lottery than we can buy the scooter

var wonLottery = false;

if(scooterCost<=budget || wonLottery===true){
    console.log("Did you when the lottery or something.");

} else {
    console.log("You old bum looking self.")
}