function addition(num1, num2, outcome, text) {
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     throw new Error("Ooops someting is incorrect!!")
    // }else{
    //     return num1 + num2
    // }
    var cal = num1 + num2;
    if (outcome) {
        console.log(text + (num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var number1 = 10;
var number2 = 3.1;
var boo = true;
var message = "The total is: ";
console.log(addition(number1, number2, boo, message));
