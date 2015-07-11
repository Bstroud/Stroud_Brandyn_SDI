/*
Brandyn Stroud
Section 00
7-11-2015
Arrays
 */

//alert("It works");

//create a basic array
//Picking oranges
var orangeBins = [30, 500, 10002];

//How many oranges did we pick
var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(totalOranges+ " oranges were picked in 3 days.");


//Length properties of arrays
console.log(orangeBins.length);


var averageOranges = totalOranges /orangeBins.length;
console.log("The average number of oranges is " +averageOranges + ".");