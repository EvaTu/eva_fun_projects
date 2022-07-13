const button = document.querySelector('button');
const num1 = document.getElementById('num1') ! as HTMLInputElement;
const num2 = document.getElementById('num2') ! as HTMLInputElement;


function addNums(n1: number, n2: number){
    return +n1 + +n2
}

button.addEventListener('click', function(){
    console.log(addNums(+num1.value, +num2.value))
});