/*
Brandyn Stroud
Section 00
7-16-2015
Conditional Assignment
 */


//alert("It works");

//Assuming you live 1 hour away from school, work, etc., what time should you leave to make sure you arrive before
//8:30 in the morning. This is assuming you are driving and live in a moderately populated area like Orlando.
//You wake up at 7am (No negotiation) and your day starts from there.

var shower = 45;
var breakfast = 15;


//The amount of time it should take to leave

var latestTime = shower + breakfast;
console.log("You can not take longer than " + latestTime + " minutes.");
//If you do everything right

console.log("Try to make it before 8:45am!");
alert("No matter what it will take you 45 minutes in traffic regardless of how fast you drive");

var getReady = prompt("How long does it take for you to wash up and get dressed?\nEnter how many minutes it takes you.");
var eat = prompt("How long does it take you to eat breakfast\nEnter how many minutes it takes you.");

if(getReady+eat<=60){
    console.log("Good time management.")
}

//Combined time of getReady and eat
var ready = (getReady+eat);


if(getReady=shower && eat<=breakfast){
    console.log("You Made It!!!");

}else if(ready<=60) {
    console.log("You Made It!!!");

    //If you exceed your time
}else {
    console.log("You're Late!!!");
}
//Simpler way to say this

(ready < 60)? console.log("Good job you are on time")
