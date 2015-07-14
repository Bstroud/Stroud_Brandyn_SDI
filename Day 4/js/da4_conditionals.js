/*
Brandyn Stroud
Section 00
7-14-2015
Conditionals
 */

//alert("It works");


//Basic Conditionals IF statement
//if(condition to test){Code to run if true.}

//Create a boolean variable
var oldEnough = false;

//If the child is old enough, tell him he can ride the roller coaster
//else{} - this will run if the IF statement does not run
if(oldEnough){
    //this code inside of the bracket will run if oldEnough is a boolean of true
    console.log("You can ride the coaster!");
} else{
    //This code will run if the IF block does not run
    //if oldEnough evaluates to a boolean of false
    console.log("Sorry, too young!")
}


//Relational Expressions - Operators

//Test the kids height to see if he can ride

var kidHeight = 42;

var sneakerLength = 2

//if the childs height is 48 or taller they can ride the ride
if(kidHeight>=48){
    //Code will run if child is 48 inches or taller
    console.log("Congrats! You can ride!");
} else {
    console.log("sorry too short.")
}


console.log("This text is after the code block.");