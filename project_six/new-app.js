"use strict";
class NewDepartment {
    // newemployees: string[] = []
    constructor(id, name, newemployees = []) {
        this.id = id;
        this.name = name;
        this.newemployees = newemployees;
    }
    describeInfo() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    addNewEmployee(newemployee) {
        this.newemployees.push(newemployee);
    }
    printNewEmployee() {
        console.log(this.newemployees.length);
        console.log(this.newemployees);
    }
}
// const logistic = new NewDepartment("DE1", "Logistic")
// logistic.describeInfo()
// logistic.addNewEmployee("Mike")
// logistic.addNewEmployee("Evan")
// logistic.addNewEmployee("Lucy")
// logistic.printNewEmployee()
// const copyLogistic = { 
//     id: "DE2", 
//     name: "Sales", 
//     newemployees: ["Katie"], 
//     describeInfo: logistic.describeInfo,
//     addNewEmployee: logistic.addNewEmployee,
//     printNewEmployee: logistic.printNewEmployee
// }
// copyLogistic.describeInfo()
// copyLogistic.printNewEmployee()
class BuyingDepartment extends NewDepartment {
    constructor(id, name, admins) {
        super(id, name);
        this.admins = admins;
    }
    addAdmins(adminName) {
        this.admins.push(adminName);
    }
    printBuyingTeam() {
        console.log(this.admins);
    }
    addMoreEmployee(name) {
        if (name === "Kim") {
            return;
        }
        this.newemployees.push(name);
    }
}
class LogisticDepartment extends NewDepartment {
    constructor(id, name, reports) {
        super(id, name);
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    get currentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("There is no report available!");
    }
    set currentReport(data) {
        if (!data) {
            throw new Error("Please enter a valid value");
        }
        this.addReports(data);
    }
    addReports(note) {
        this.reports.push(note);
        this.lastReport = note;
    }
    printReports() {
        console.log(this.reports);
    }
}
const logistic = new LogisticDepartment("DE8", "Logistic", []);
logistic.currentReport = "Shipment has arrived the port";
console.log(logistic.currentReport);
console.log(logistic);
// const buying = new BuyingDepartment("DE10","Buying", ["Maxim", "Nora"])
// buying.describeInfo()
// console.log(buying)
// buying.addMoreEmployee("Kim")
// buying.addMoreEmployee("Lion")
// buying.addMoreEmployee("Mandy")
// buying.printNewEmployee()
