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
if(guess===788){
 console.log("You're right you must be a real fan");
}else{
 console.log("Sorry guess again");
}

//results
var results = pokemon();

//Main Code var
var poke1 = 151;
var poke2 = 251;
var poke3 = 386;

var gen3 = results;
console.log(gen3);

//Function
function pokemon(s1, s2, s3){
s1 = 151;
 s2 = 251;
 s3 = 386;

var total = s1+s2+s3;

return total

}
//Call function
pokemon(poke1, poke2, poke3);

console.log("After 3 generations of Pokemon the total numbers of Pokemon were " +results);
