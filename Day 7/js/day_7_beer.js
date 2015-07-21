/*
Brandyn Stroud
Section 00
7-21-2015
Beer
 */

//alert("Beer");

//Lets create a loop that will write ou the lyrics for the 99 bottles of beer on the wall song.

//For(initialization; condition){increment of change}

for(var i = 99; i > 0; i--) {

    //Verify that the loop works
    //console.log(i);
    if (i===2) {


        console.log(i + " bottles of beer on a wall. " + i + " bottles of beer. You take one down and pass it around, " + (i - 1) + " bottles of beer on a wall.");

    }else if(i===1){
        console.log(i + " bottle of beer on a wall. " + i + " bottle of beer. You take one down and pass it around. No more bottles of beer on a wall.");

    } else{
        console.log(i + " bottle of beer on a wall. " + i + " bottle of beer. You take one down and pass it around, " + (i - 1) + " bottle of beer on a wall.");


    }
}