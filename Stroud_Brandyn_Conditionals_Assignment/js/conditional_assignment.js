/*
Brandyn Stroud
Section 00
7-16-2015
Conditional Assignment
 */


//alert("It works");

//Assuming you live 1 hour away from school, work, etc., what time should you leave to make sure you arrive before
//8:30 in the morning. This is assuming you are driving and live in a moderately populated area like Orlando.

var alarm = 7;
var showerAndDressed = 35;
var breakfast = 10;


//The amount of time it should take to leave

var latestTime = 7 + 35 + 10;
console.log(latestTime);
//If you do everything right

console.log("Try to make it before 9am!");
alert("No matter what it will take you 45 minutes in traffic regardless of how fast you drive");

var wakeUp = prompt("At what time do you wake up in the morning?\nEnter the hour closest to this time");
var getReady = prompt("How long does it take for you to wash up and get dressed?\nEnter how many minutes it takes you.");
var eat = prompt("How long does it take you to eat breakfast\nEnter how many minutes it takes you.");

if(wakeUp<=alarm && showerAndDressed>=getReady){
}

if(breakfast>=eat){
    console.log("Yay! You made it on time!");
}

//If you exceed your time limit