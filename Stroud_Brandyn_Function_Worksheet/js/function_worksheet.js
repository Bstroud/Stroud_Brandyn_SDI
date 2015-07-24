/**
 Brandyn Stroud
 Section 00
 7-23-2015
 Function Worksheet
 */


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