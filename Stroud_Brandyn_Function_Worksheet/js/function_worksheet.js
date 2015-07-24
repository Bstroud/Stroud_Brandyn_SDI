/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Function Worksheet
 */

//Circumference


//Function for finding the circumference
    function circle(pi, radius) {

//Variables for formula of circumference
 circumference = pi*radius;

 //Console.log results
 console.log("The area of this circle is " + circumference);

 return circumference

}
var results = circle(3.14, Number(prompt("Enter a number.")));
//Print results
console.log("The circumference of a circle is " +results);



//Stung!

//Variables for Victim's weight
var victim = 145;
//Variables for bee sting formula
var stingsForDeath = 8.666666667*victim;

//Function for the amount of stings til death
function death(victimWeight){

 //console.log results
 console.log(Math.round(stingsForDeath));

 return stingsForDeath

}
death();