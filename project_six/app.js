"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        // private readonly id: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log("Department: " + this.id);
        console.log("Department: " + this.name);
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("B1", "Accounting");
accounting.describe();
// const copyDepart = { name: "Test", describe: accounting.describe , employees: ["Eva", "Candy"], addEmployee: accounting.addEmployee, printEmployeesInfo: accounting.printEmployeesInfo}
// copyDepart.describe()
// copyDepart.printEmployeesInfo()
// accounting.addEmployee("Nutella")
// accounting.addEmployee("Cotton-Candy")
// accounting.printEmployeesInfo()
// accounting.addEmployee("Chocolate")
// accounting.printEmployeesInfo()
// accounting.employees[0] = "Cat"
// accounting.addEmployee("Dog")
// accounting.printEmployeesInfo()
