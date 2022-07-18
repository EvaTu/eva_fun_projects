function add(num1: number, num2: number){
    return num1 + num2
}

function printTotal(num: number){
    console.log(num)
}

function addAndPrint(n1: number, n2: number, cb: (number) => void){
    let result = n1 + n2
    cb(result)
}

printTotal(add(20,300))

// let mainFoo: (a: number, b: number) => number;
let mainFoo: Function;

mainFoo = add
mainFoo = printTotal

console.log(mainFoo(23,5))


addAndPrint(33, 10, (data) => {
    console.log(data)
})
