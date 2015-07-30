/*Brandyn Stroud
 Section 00
 7-18-2015
 While loops
*/

//alert("Loops");

//Initial and counter loops
var counter = 0;

//while loops with condition
//run as long as the condition is true

while(counter<200){
    console.log("The current value is " +counter);
    //Change the value of the counter variable
    counter+=5;
    //Must change the value or you will loop forever
}

//Do While loop
//This loop will always run at least one time before checking the condition
var i = 0;

do{
    //this code will always run at least once
    console.log("The value of i is " +i);
    //Increments of change
    i++;

}while(i < 10){

}