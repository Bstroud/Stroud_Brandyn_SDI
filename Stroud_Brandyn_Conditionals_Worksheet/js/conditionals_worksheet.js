/**
 Brandyn Stroud
 Section 00
 7-14-2015
 Conditionals Worksheet homework
 */

//alert("It works...");

//MOVIE TICKET PRICE

var regPrice = 12.00;
var discountPrice = 55;
var discountPrice2 = 10;
alert("Time:\n2:00");

//Determine if the customer is able to qualify for the discount
var age = parseInt(prompt("Please enter your age:"));

if(discountPrice<=age || discountPrice2>=age){
    console.log("Congrats you qualify for our discount offer!!!")
} else{
    console.log("Please pay $" +regPrice+ ".00")
}


