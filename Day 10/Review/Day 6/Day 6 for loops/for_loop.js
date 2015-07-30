/*Brandyn Stroud
 Section 00
 7-18-2015
 For loops
 */

//alert("More loops");

//Basic for loop
//for(initialize counter: condition; increment of change){}

for(var i = 10; i>0; i--){
    console.log("The value of i is " +i);
}


//breaks - if this command is run your loop will stop
for(var j = -10; j<5; j--){
    console.log("the value of j is " +j);

    //If the value is of j is 3 stop my loop
    if(j===3){
        break
    }
}