// const personInfo: {
//     name: string;
//     hometown: string;
//     age: number;
//     hobbies: string[];
//     occupations: [number, string];
// } = {
//     name: "Eva",
//     hometown: "Taipei",
//     age: 30,
//     hobbies: ["camping", "swimming", "cooking"],
//     occupations: [ 5, "developer"]
// }

// personInfo.occupations.push("dancer")
// // personInfo.occupations[2] = 100

// console.log(personInfo.hometown)

// for(const hobby of personInfo.hobbies){
//     console.log(hobby.toLocaleUpperCase())
// }

enum Roles { "ADMIN", "READ-ONLY", "AUTHOR"}

const personInfo  = {
        name: "Eva",
        hometown: "Taipei",
        age: 30,
        hobbies: ["camping", "swimming", "cooking"],
        occupations: [ 5, "developer"],
        role: Roles[2]
}

console.log(personInfo.role)