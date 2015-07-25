/**
 Brandyn Stroud
 Section 00
 7-25-2015
Multiples
 */


//Create varibles for Height and Width
var height = 6;
var width = 6;

//Create varables for base of a triangle
var base = 5;


//Create a function to calculate the perimeter of a rectangle
var calcPeri = function(h, w){
 var periTotal = 2*h + 2 *w;
 return periTotal
}

//Function call must go under function definition for anons
var resultsPeri = calcPeri(8, 6);
console.log(resultsPeri);


//Function call to area
var resultsArea = calcArea(height, width);
console.log(resultsArea);
//function to create the area of a rectangle
function calcArea(h, w){
 var area = w*h;
 return area
}

//Create a function to calc area of a triangle
var triArea = function(b, h){
 var area = .5*b*h;

 return area
}

//Function triangle call
var triAreaTotal = triArea(base, height);
console.log(triAreaTotal);

//Create a procedure that will console log the rect peri and area
function printOut(p,a){
 console.log("the perimeter is " +p);
 console.log("the area is " +a);
}

//function call
printOut(resultsPeri, resultsArea);