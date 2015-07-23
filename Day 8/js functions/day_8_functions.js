/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Functions
 */

calcArea();

//alert("Day8");

//basic function structure
// function = function(){Code goes here}




//Create a function that ill console.log something
printHello();


function printHello(){
 //THis code will run when the functions runs
 console.log("This function is working");
}

//Create a function call that will start our printHello function
printHello();
printMore();
printHello();

//Create a function that console.logs a different string
function printMore(){
 console.log("This is a different text");

}
printMore();

//Create a function that calculates the area of a rectangle
function calcArea(){
 //Create variables for width, height, and area
 var width = 20;
 var height = 30;
 var area = width * height;

 //console.log the answer
 console.log(area)
}
calcArea();