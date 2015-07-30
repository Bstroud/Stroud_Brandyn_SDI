/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Arguments and Parameter
 */

//alert("IT works");

//Argumets- goes into the function call - "specific"
//Parameters - goes into the function definition and these catch the arguments = "Generic containers"

//Create variables for width and height

var width =10;
var height = 20;
//Create a function to calculate the area of a rectangle
function calcArea(w, h) {


//create var
 //var width = 10;
 //var height = 20;

//calculate the area

 var area = w * h;

//console.log
 console.log("The area of a rectangle with a width of " + w + " and a height of " + h + " is " + area);
}
calcArea(width, height);

//Find the area, width = 6 and height = 7
calcArea(6,7);

//Ask the user
var userWidth = prompt("Lets calculate the area of a rectangle\nPlease enter a width.");

//Validate and number cast the value
var userHeight = prompt("Please enter a height.");
calcArea(userHeight, userHeight);


//Create a function that will calculate dog years
function dogYears(humanAge){
 //input a human year and spit out a dog yeat
 //humanAge*7 = dogAge
 var dogAge = humanAge*7;

 //Print out results
 console.log("A dog who is " +humanAge+ " is " +dogAge+ " in dog years.");

}
dogYears();

//Calculate how old a 4 year old dog is in dog years
dogYears(7);

//Prompt the user
var yourDogAge = prompt("Let' figure out the age of your dog is in dog years.\nHow old is your dog?");

//Validate and cast if needed

dogYears(yourDogAge);