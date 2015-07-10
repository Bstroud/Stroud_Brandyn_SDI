/*
 Brandyn Stroud
 7/9/2015
 SDI Section 00
 Day 2 Homework
 */


//alert("It works");

//Problem 1

/*
Number of slices of pizza = 9
Number of people ar party = 25
Number of pizzas ordered = 6
 */
var pizzas = 6;
var slicesPerPizza = 9;
var slicesOfPizza = pizzas * slicesPerPizza;
var partyGoers = 25;
var slicesPerPerson = slicesOfPizza / partyGoers;
console.log(slicesPerPerson);


//Problem 2

/*
Sparky gets 2 whole slices of pizza
 */
var sparky = slicesOfPizza % partyGoers;

console.log("Sparky gets" + " " + sparky + " " + "slices of pizza");



//Problem 3

/*
Weekly grocery bills
*/


var week1 = 123.00;
var week2 = 203.13;
var week3 = 17.38;
var week4 = 98.75;
var week5 = 58.44;

var total = (week1 + week2 + week3 + week4 + week5);
var average = total / 5;
console.log("You have spent a total of" + " " + "$" + total + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + average + "per week." );


//Problem 4
var originalPrice = 1299.99;
var discountPercent = 25;
var discountDecimal = discountPercent/100;

var priceAfterDiscount = originalPrice - (originalPrice * discountDecimal);
console.log("The price of the " + item + "is " + priceAfterDiscount + " after the discount.");

var item = "Television";
var tax = 0.6;


var withTax = originalPrice / tax;
var withoutTax = originalPrice * tax;



console.log("Your " + item + " was originally " + originalPrice + ", but after a " + discountPercent + "% discount, it is now " + "$" + withoutTax + " without tax and " + "$" + withTax + " with tax." );