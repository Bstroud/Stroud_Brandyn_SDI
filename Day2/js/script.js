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
console.log("The value of b is " + b);

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


//Orders Of Operation
//PEMDAS

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//adds up all of them and then divides by how many there are
var average = (quiz1 + quiz2 + quiz3) /3;

console.log(average);

//Strings - texts for coding

var kermit = "Light Green";
var frogName = "kermit";

console.log(frogName);


//double or single quotes
//Escape characters (backslash)
var phrase = "I Don\'t Know";
console.log(phrase);




//Booleans - true or false
//Light Switches of programming
var yes = true;
var nope = false;
// A string of "false" is not equal to a boolean of false


// Simple Math problem
//Find the perimeter of a rectangle

var side1 = 7;
var length1 = 6;
var perimeter = (side1) *2 + (length1) *2;
console.log(perimeter);

//Are the parenthesis needed?



//Cancatenation - combing texts

var firstName = "Kermit";
var lastName = "the Frog";
var fullName = firstName + " " + lastName;
console.log(fullName);

