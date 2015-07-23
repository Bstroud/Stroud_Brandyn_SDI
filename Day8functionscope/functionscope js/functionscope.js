/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Scopes
 */


//variable scope
//Variables that are inside and outside of a function
//This variable is scoped outside the function
//Scoped to the Main Code
var width = 5;


//Create a variable call changeMe
//Scoped in the Main Code
var changeMe = 7;
console.log("the starting width is " +changeMe);

//Console.log
console.log("starting width is " +width);


//Create a function that calculates the perimeter of a rectangle
function calcPeri(){

 //Create variables for width and height and perimeter
 //Try not to reuse variable names
 //But this is going to be impossible for larger files

 //This variable is scoped to the function calcPeri
 var width = 10;
 console.log("width inside a function is " +width);
 var height = 20;
 var perimeter = width + height*2;

 //change the value of changeMe
 changeMe = 15;

 //console.log
 console.log("The perimeter is " +perimeter);
}

console.log("Before the function call, width is " +width);
console.log("Before the function call, changeMe is " +changeMe);
//function call for calcPeri
calcPeri();

console.log("after the function call, width is " +width);
