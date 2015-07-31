/**
 Brandyn Stroud
 Section 00
 7-30-2015
 Final Exam
 */

//Prompt the user for cost of their item
var cost = prompt("Please enter how much your item costs.");


//Validation
while(isNaN(cost) || cost === ""){
 cost = prompt("Please do not leave blank and only use numbers.\n Please enter a number.");
}
console.log("Thank you. Your item is $" +cost);

//Prompt the user for a discount
var discount = prompt("Please enter you discount percentage.");

//Validation
while(discount === "" || discount >= 100){
discount = prompt("Please do not leave blank and your discount can not be higher than 99%.");

 }
console.log("Thank you.");

while(isNaN(discount)){
 discount = prompt("Please only use numbers less than 100.")
}
console.log("Your discount is " +discount+"%");



//Function to calculate the discount

function coupon(c, d){
 //Determine the discount
 var userDiscount = cost * (discount/100);
 return userDiscount;


 var discountedPrice = cost - discount;
 return discountedPrice;

}
//Call function
coupon();

//Results
var finalPrice = coupon(cost, discount);
console.log("The final cost of an item that costs $" +cost+ " with a discount of " +discount+ "% is " +finalPrice);