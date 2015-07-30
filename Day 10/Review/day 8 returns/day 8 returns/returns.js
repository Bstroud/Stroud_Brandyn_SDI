/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Returns
 */

//alert("Returns");

//Lets create a function for the area of a rectangle
function calcArea(w, h){
 //Calculate the area of a rectangle
 var area = w*h;

 //console.log the results
 console.log("The area is " +area);

 //In order to use results in main code
 //return "whatever you want"
 return area;

}

//call the function
//catch the returned value in a variable
var results = calcArea(10, 30);

//Access the area in Main Code
console.log(results);


//Calculate w 40 h 60

var results2 = calcArea(40, 60);
console.log(results2);

//total area of both rectangles
var total = results+results2;
console.log("The area for both rectangles is " +total);