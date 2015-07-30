/*
Brandyn Stroud
Section 00
7-11-2015
Arrays
 */

//alert("It works");

//create a basic array
//Picking oranges
var orangeBins = [30, 500, 10002];

//How many oranges did we pick
var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(totalOranges+ " oranges were picked in 3 days.");


//Length properties of arrays
console.log(orangeBins.length);


var averageOranges = totalOranges /orangeBins.length;
console.log("The average number of oranges is " +averageOranges + ".");

//create an array of Avengers
var avengerNames = ["Iron-man", "Captain American", "Hulk", "Hawkeye"];
console.log(avengerNames);

//accesing specific items in the array
console.log(avengerNames[1]);

//use a variable as index
var numb = 2;
console.log(avengerNames[numb]);

//Set a specific number
avengerNames[3] = "Thor";
console.log(avengerNames);

//add new item in array
avengerNames[4] = "Falcon";
console.log(avengerNames);

//add new item
avengerNames[avengerNames.length] = "Black Widow";
console.log(avengerNames);

//create new array
var fruitArray = ["bananas", "pear","peach", "strawberry"];
console.log(fruitArray);

//push- method of a function of arrays
//Adds it to the end of the array
fruitArray.push("pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);
fruitArray.push("date");
console.log(fruitArray);

//pop- method to remove the last item in the array
var caught = fruitArray.pop();
console.log(caught);

//splice- used for adding and removing items in an array
//splice(position, # of items to remove, items to put in)
fruitArray.splice(1,1, "lemon");
console.log(fruitArray);
