/*
Brandyn Stroud
Section 00
7-11-2015
Expression Assignment
*/

//Hours and distance from Ohio to Florida: Driving and Flying


var ohToWv = 5.17;
var wVaToVa = 1.24;
var vaToNc = 2.08;
var ncToSc = 3.17;
var ScToGa = 1.52;
var gaToFl = 2.31;

var hours = [ohToWv, wVaToVa, vaToNc, ncToSc, ScToGa, gaToFl];
var totalHours = hours[0] + hours[1] + hours[2] + hours[3] +hours[4];
console.log("It takes this many hours to travel by car through all these states from Ohio to Florida: " +totalHours);
