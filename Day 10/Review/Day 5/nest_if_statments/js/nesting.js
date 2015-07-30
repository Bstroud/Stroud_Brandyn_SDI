/*
Brandyn Stroud
 Section 00
 7-16-2015
 Nesting If Statments
 */

//alert("It works");


// Some decision affecet other decisions

//if it is warm outside lets go to the beach
//If its not warm lets go to the movies

var temp = 78;
var waterTemp = 74;

//test the temperature
//Warm is 80 and above

if(temp>=80){
    //code will run if temp is 80+ meaning we are going to the beach
    console.log("Lets go to the beach");

//If the water is above 75 degrees, lets go swimming
//if not lets get a tan

    if(waterTemp>=75){
        console.log("Lets go swimming")
    }else{
        console.log("Lets get a tan")
    }

} else {
    console.log("lets go see a movie");


    //Ask if kids are going with
    var kids = prompt("Are you bringing children?\nPlease type yes or no.");

    // Validate the kids prompt
    //Expecting yes or no
if(kids.toLowerCase()!="yes" && kids.toLowerCase() != "no"){
    //re=prompt
    kids = prompt("Please only enter yes or no\nAre you bringing children?")
}
    //.toLowerCase- changes to lower case
    console.log(kids.toLowerCase());
    kids = kids.toLowerCase();
    console.log(kids);

    //If kids are going, Lets go see minions
    //If kids are not going, Lets for see Ant-man

    if(kids.toLowerCase()==="Yes"){
     console.log("Go see the Minions movie");

    }else {
        console.log("Go see Ant-man");
    }
}
