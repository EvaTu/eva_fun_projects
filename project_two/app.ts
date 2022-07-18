function addition(num1:number, num2:number, outcome: boolean, text: string){
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     throw new Error("Ooops someting is incorrect!!")
    // }else{
    //     return num1 + num2
    // }
    // let cal = num1 + num2;
    if(outcome){
        console.log(text + (num1 + num2))
    }else{
        return num1 + num2
    }
    
}

let number1 = 10;
let number2 = 3.1;
let boo = true;
let message = "The total is: "

console.log(addition(number1, number2, boo, message))