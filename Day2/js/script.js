/*
This is going to be  multi lined comment.
Brandyn Stroud
7/9/2015
SDI Section 00
Day 2 Coding Basics
 */

//alert("This is making sure our JS file is completed.");

//This is a single lined comment
//usually describe what comes after it

/*
Multi lined comment
Anything between the star and slash is ignored by the browser
 */

//Alert- gives user information but returns nothing to us

alert("Welcome to SDI");

//Console logging information
console.log("This is the console. Learn to love it.");

//Declare a variable
//Start with keyword var
var whatever; //Declaration of a variable
//Define the variable
whatever = 45;
//Create a storage container = value :

// Declare and define a variable
var a = 2;

//Send variable value to the console so we can see it
console.log(a);

//CHAnge the value
a = 6;
console.log(a);

//Add 3 to the current value
a = a+3;
console.log(a);

//ANother variable
var b;
b=a+3;

console.log(a);
console.log(b);

//SImple math
//Find our age

//Create Variable for year born
var yearBorn = 1994;
var age = 2015 - yearBorn;
console.log(age);

//Math
//+, -, *, /

//Find the area of a triangle
var width = 8;
var height = 7;

var areaTriangle = width*height/2;
console.log(areaTriangle);

//Modulo - %
//Gives you the remainder

var remainder = 32%10;
console.log(remainder);

//Find out if even or odd
//Modulo by 2
var evenOrOdd = 66%2;
console.log(evenOrOdd);
//0 = even
//1 = odd

//Assignment Operators
/* Assignments Operator - "is"
++ Adds 1 to the current value of the variable
-- Subtracts 1 to the current value
+= Adds the value after it to the the current situation
-= subtracts the value after it to the current situation
/= Divides the value after it to the current situation
*= Multiples the value after it to the current situation
 */

var tester = 5;
tester++;
tester--;
tester+=3;
tester-=6;
tester/=3;
tester*=6;

console.log(tester);


