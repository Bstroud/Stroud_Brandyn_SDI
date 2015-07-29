/**
 Brandyn Stroud
 Section 00
 7-25-2015
 Function Assignment
 */


//alert("It works");

//Pokemon

//Prompt the user
    var guess = parseInt(prompt("Guess how many pokemon there were in total after the third generation.\nType in a number."));

//Validation
while(isNaN(guess) || guess==="") {
 //Re-prompt the user
 guess = prompt("Please only use numbers and don't leave blank.\nPlease enter a number.");
}
if(guess===386){
 console.log("You're right you must be a real fan");
}else{
 console.log("Sorry that was incorrect.");
}

//results
var results = pokemon();

//Main Code var
var poke1 = 151;
var poke2 = 100;
var poke3 = 135;

var gen3 = results;
console.log(gen3);

//Function
function pokemon(s1, s2, s3){
s1 = 151;
 s2 = 100;
 s3 = 135;

var total = s1+s2+s3;

return total

}
//Call function
pokemon(poke1, poke2, poke3);

console.log("After 3 generations of Pokemon the total numbers of Pokemon were " +results);



//Pokemon 2

//Prompt the user
var guess2 = prompt("Now in the 6th generation of Pokemon take a guess how many there are now\nEnter a number");

//Number cast to be sure
guess2 = Number(guess2);

//Validation
if(guess2===721 || guess2 =="721"){

 console.log("You're right there 721 Pokemon");

}else {

 if(guess2 != isNaN(721))


 while(isNaN(guess2) && guess2=="") {

 prompt("Please only use numbers and don't leave blank\nEnter a number.");

 }
console.log("Sorry that's wrong.")
}


//Create a function to calculate how many Pokemon there are now
var pkm = function morePkmn(then, now){

 for(var i=386; i<722; i++){
//console.log(i);

if(i===721){
 break

}
 }
 console.log("The total number of Pokemon in generation 6 is " +i+ ". As you can see, that is a lot of new Pokemon.");
 }
pkm();