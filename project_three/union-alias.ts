type Union = number | string 
type Literal = "as-text" | "as-string" | "as-number"

function combine(input1: Union, input2: Union, outputType: Literal){
    if( typeof input1 === "number" && typeof input2 === "number"|| outputType === "as-number"){
        return +input1 + +input2
    }else{
        return input1.toString() + input2.toString()
    }
    
}


console.log(combine("Tina", "Eva", "as-text"))
console.log(combine(30, 25, "as-number"))
console.log(combine("35", "200", "as-number"))
console.log(combine("35", "a", "as-string"))