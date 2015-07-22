/*
 Brandyn Stroud
 Section 00
 7-21-2015
 Array loop worksheet
 */

//alert("It works");

//TMNT

    //The turtles
var turtles = ["Leonardo", "Raphael", "Donatello", "Michelangelo"];

//Who is your favorite of the 4
var favTurtle = prompt("Who is your favorite turtle?");
console.log(favTurtle);
while(turtles.toString() != turtles){
 favTurtle = prompt("Please enter a turtle name.\nLeonardo, Raphael, Donatello, Michelangelo.");
 counter++;
 if(counter > 3){
  console.log("You must like The Shredder.")
 }
}

for(var i = 0; i < turtles.length; i++){

 console.log(turtles[i])
}