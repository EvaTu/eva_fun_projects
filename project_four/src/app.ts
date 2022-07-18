let userName = "Rise and Shine Eva!!!"

userName = "Welcome to TS Eva!!!";

console.log(userName)

const h3 = document.createElement("h3")!;

const button = document.querySelector("button")!;
button.addEventListener("click", () =>{
    document.body.appendChild(h3)
    h3.innerText = userName
})