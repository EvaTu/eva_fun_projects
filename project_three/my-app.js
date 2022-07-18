function add(num1, num2) {
    return num1 + num2;
}
function printTotal(num) {
    console.log(num);
}
function addAndPrint(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printTotal(add(20, 300));
// let mainFoo: (a: number, b: number) => number;
var mainFoo;
mainFoo = add;
mainFoo = printTotal;
console.log(mainFoo(23, 5));
addAndPrint(33, 10, function (data) {
    console.log(data);
});
