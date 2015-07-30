/*
Brandyn Stroud
 Section 00
 7-18-2015
 Validating Prompts with loops
 */

//alert("mooore looops");

//isNaN to test
//false if it is a number

//to test blank we test (item ==="")

//to test text string
//(item.toLowerCase() = ("yes") && item.toLowerCase() !="no")

//for validation we use a while loop

//Use a while loop because we dont know how many times the user get it wrong

//ask the user for a number
var userName = prompt("Please enter a number.");
//directly after each prompt, validate for that prompt
while(isNaN(userName) || userName===""){
    //re-prompt using the same variable
    userName=prompt("Please only use numbers and don't leave blank.\nPlease enter a number.");

}
console.log("After the while loop");

//ask the user for either red or black
var color = prompt("Please choose red or black");
//validate
while(color.toLowerCase()!= "red" && color.toLowerCase()!="black"){
    //re-prompt the user
    color=prompt("Please only enter red or black\nPlease enter your color.");
    counter++;
    if(counter>10){
        console.log("You failed to many times");
        break
    }
}