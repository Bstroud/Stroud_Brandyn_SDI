/*
Brandyn Stroud
Section 00
7-11-2015
Expression Assignment
*/

//Hours and distance from Ohio to Florida: Driving and Flying



//Driving

var ohToWv = 5.17;
var wVaToVa = 1.24;
var vaToNc = 2.08;
var ncToSc = 3.17;
var ScToGa = 1.52;
var gaToFl = 2.31;
var totalGasStops = 1.40;

var hours = [ohToWv, wVaToVa, vaToNc, ncToSc, ScToGa, gaToFl];
var totalHours = hours[0] + hours[1] + hours[2] + hours[3] +hours[4];
var gasStopsIncluded = (totalHours += totalGasStops);


console.log("It takes this many hours to travel by car through all these states from Ohio to Florida: " +totalHours);
console.log("Then we have to include gas and restroom stops, so an additional " + gasStopsIncluded + " hours.");

//Flying

var ohioToFl = 2.0;

//The difference in time

var difference = totalHours - ohioToFl;
console.log("The amount of time it takes to fly the same distance is " +ohioToFl+ " hours.");
console.log("The difference in the travel time compared to driving is " +difference+ " hours.");

var dividUp = gasStopsIncluded /= ohioToFl;
console.log("The remaining time, " +dividUp+ " hours, we could of flew to Ohio two more times And stopped in Virginia.");
