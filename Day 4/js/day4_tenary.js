/*
 Brandyn Stroud
 Section 00
 7-14-2015
 Ternary
 */

//alert("Itwefpdjbp");

//See if your GPA is high enough to graduate

var gpa= 3.9;

//IF your GPA is higher than a 2.0 you can graduate
if(gpa>2){
    console.log("Congrats, smart feller");

} else {
    console.log("You dumb af");

}

//Convert this to a ternary
//(conditional to test)? true code: false code;
(gpa > 2) ? console.log("GPA is decent") : console.log("GPA is too low");

//TEst kids age vs. what book they can read
//If the kid is 10 or younger then they read Green eggs and ham, otherwise they read the Time Machine

var age = 12;
var book;

book = (age>10)? "The Time Machine" : "Green Eggs and Ham";
var book2 = (age<=10)? "Green Eggs and Ham" : "The Time Machine";
console.log("Your child should " +book);
console.log(book2);