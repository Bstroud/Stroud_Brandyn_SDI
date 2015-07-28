/**
 Brandyn Stroud
 Section 00
 7-28-2015
 Review
 */

//alert("Review");

//Figure out how much pizza cost per square inch
//calculate how much pizza is per slice

//prompt the user for:
//radius of a pizza
//cost of pizza
//# of pizza

var pizzaRadius = prompt("We are going to calculate how much pizza cost\nWhat is the radius of your pizza?");
//validate
while(isNaN(pizzaRadius) || pizzaRadius===""){
 //re-prompt
 pizzaRadius = prompt("Please do not enter words or leave blank.\nPlease enter your pizza's radius?");



}

var pizzaCost = prompt("How much does your pizza cost");

//validate
while(isNaN(pizzaCost) || pizzaCost==="") {
 //re-prompt
 pizzaCost = prompt("Please do not enter words or leave blank.\nPlease enter your pizza's cost?");
}

 var pizzaSlices = prompt("How many slices do you have");

 //validate
 while(isNaN(pizzaSlices) || pizzaSlices==="") {
  //re-prompt
  pizzaSlices = prompt("Please do not enter words or leave blank.\nPlease enter how many slices your pizza has?");

 }


//Create a function to calc the area of a pizza
function pizzaArea(r){
 //Area of a circle r*r*Pi
 var area = Math.pow(r,2)*Math.PI;

 return area;
}

//Create a function that calculates price per inch
function pizzaSqInCost(price, area){
 //cost per inch = price/area
 var costPerIn = price/area;

 //Since this is a cost, round to 2 decimal places
 costPerIn = costPerIn.toFixed(2);

 return costPerIn;

}


//Create a function that calculates the cost per slice
function pricePerSlice(slices, price){
 //cost per slice = pizza price / # of slices
 var costPerSlice = price/slices;

 //round to 2 decimals
 costPerSlice = costPerSlice.toFixed(2);

 return costPerSlice;
}