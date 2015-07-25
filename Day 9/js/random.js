/**
 Brandyn Stroud
 Section 00
 7-25-2015
 Random Number Generator
 */

//alert("It works");

//Create a function that takes a user max a nd min value and return a random number inbetween

//Create a variable for the main variable
var min = prompt("We are going to find a random nimber between to random numbers\nWhat is the minimum value.");
//validate prompt
while(isNaN(min || min==="")){
 if(isNaN(min)){
  min=prompt("Please only type in numbers. What is the minimum value");

 }else{
  min=prompt("Please don not leave blank.\nPlease enter a minimum value.");
 }

}
//Number cast or parseInt
min=Number(min);

//Create a variable for max
var max = prompt("What is the max value?");

//validate
while(isNaN(max || max==="") || max<=min){
 if(isNaN(max)){
  max=prompt("Please only type in numbers. What is the minimum value");

 }else if(max<=min && min===""){
  max= prompt("Please make sure your max value is greater than your min value of " +min+ ".\nWhat is the max value.")
 }else {
  max=prompt("Please don not leave blank.\nPlease enter a minimum value.");
 }

}
//Number cast or parseInt
max=Number(max);
