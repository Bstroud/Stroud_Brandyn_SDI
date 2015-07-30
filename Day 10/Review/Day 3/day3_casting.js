/*
Brandyn Stroud
Section 00
7-11-2015
Casting Variables
*/

//alert("casting");

//casting variable means treating one variable like another
var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

//Number()- treats whats inside the parenthesis like a number, if possible
var castingResults = 7 + Number(stringVar);
console.log(castingResults);

//cast numbers as string
//String()
var areaCode = 407;
var prefix = 692;
var linenumber= 8296;

var phonenumber = String(areaCode) +String(prefix) +String(linenumber);
console.log(phonenumber);
var phoneNumber2 = "("+areaCode+")"+prefix+"-"+linenumber;
console.log(phonenumber);
console.log(phoneNumber2);
//
////all prompt() returns text strings
//var videoGamesCurrent = prompt("how many video games do you own?");
//var gamesBought = prompt("How many games did you but today");
//var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
//console.log(totalGames);

//Parsing intergers- looks through text string and returns the first interger, the first character
//in the text string myst be the number, spaces arent counted
//if  it can not convert, it returns NaN

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He is 40 years old");
console.log(b);

var c = parseInt("40 years old");
console.log(c);

var d = parseFloat("40.67 years old");
console.log(d);

//ParseFloat allows decimals ParseInt does not