/**
 Brandyn Stroud
 Section 00
 7-21-2015
 Zombies
 */

//alert("ZOMBIEEESSS");

//We have a zombie at Full Sail
//It can bite 4 people a day and turn them into zombies
//in 8 days

//Create the givens
//How many zombies we have
var zombies = 1;

//number of bites a zpmbies can make each day
var zomBites = 4;

//What is our timeline
var days = 8;

for(var i = 1; i<=days; i++){

 //How many people get infected everyday
 var infectedPeople = zombies * zomBites;

 //How many zombies will we have?
 zombies += zombies + infectedPeople;
 console.log("On day number " + i + " there will be " + zombies + " zombies!");

}