/*
 Brandyn Stroud
 Section 00
 7-18-2015
 Math class
 */


//alert("Math!!!");

//round() - normal rounding
//Does not permanently change the variable value


var  num1 = 9.74;
console.log(num1);
console.log(Math.round(num1));
console.log(num1);

//.floor() - rounds down to the nearest integer

var num2 = 6.1;
console.log(num2);
console.log(Math.floor(num2));

//.ceil() - rounds up to nearest integer

var num3 = 4.2;
console.log(num3);
console.log(Math.ceil(num3));


//.random() - this returns a number between 0 and almost 1

var num4 = Math.random();
console.log(num4);

//What if we want a number between 1 and 10
var num5 = Math.random()*10;
console.log(num5);

//Random number between 2 other numbers, not 0
//Math.random()*(max-min)+min

//number between 50 and 80
var num6 = Math.random()*(80-50)+50;
console.log(num6);

//100-1000
var num7 = Math.round(Math.random()*(1000-100)+100);
console.log(num7);

//.toFixed() - rounds to a decimal place - x decimal place
var num8 = 12.123456;
console.log(num8);
console.log(num8.toFixed(2));

//math constants
//pi - 3.14159
//Math.PI
var radius = 7;
var circleCircum = 2*radius*Math.PI;
console.log(circleCircum);

