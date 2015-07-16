/*
Brandyn Stroud
 Section 00
 7-16-2015
 Conditionals for Steaks
 */

//alert("Steaks are good");

//Test to see what temperature the steaks will be done

/*Extra-rare or Blue (bleu)	very red and cold	115–120 °F
 Rare (saignant)	cold red center; soft	125–130 °F
 Medium rare (à point)	warm red center; firmer	130–140 °F
 Medium (demi-anglais)	pink and firm	140–150 °F	145 °F and rest for at least 3 minutes
 Medium well (cuit)	small amount of pink in the center	150–160 °F
 Well done (bien cuit)	gray-brown throughout; firm	160 °F+	160 °F for ground beef
*/


var steakTemp = prompt("What is the temperature in F");

/*
//Test for blank inputs
if(steakTemp===""){
    //This code will run if the user leaves the prompt blank
    steakTemp = prompt("Please don't leave blank\nWhat is the temperature of your steak?")
}

//Validate the user prompt
console.log(isNaN(7));
console.log(isNaN("car"));

if(isNaN(steakTemp)){
  //This code will run if steakTemp is NaN
  //Re-prompt using the same variable for the user
    steakTemp = prompt("Please only type in numbers.\nWhat is the temperature in F of your steak?");
}
*/
//Combine both validation questions
if(isNaN(steakTemp) || steakTemp===""){
    //re-prompt the user
    if(isNaN(steakTemp)){
        steakTemp = prompt("Please enter a number")
    }
    }else{

    }
    steakTemp = prompt("Please enter a number");
}


if(steakTemp<=115){
    console.log("This is steak is raw. DO NOT EAT!");

} else if(steakTemp<=120){
    console.log("This steak is Extra-rare");

}else if(steakTemp<=130){
    console.log("this steak is Rare")

}else if(steakTemp<=140){
    console.log("This steak is Medium Rare")

}else if(steakTemp<=150){
    console.log("This steak is Medium")

}else if(steakTemp<160){
    console.log("This steak is Medium Well")

}else if(steakTemp>=160){
    console.log("This steak is Well Done")
}
