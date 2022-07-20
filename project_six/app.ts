class Department {
    // private name: string;
    // private readonly id: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
        // this.id = id;
    }

    describe(this:Department){
        console.log("Department: " + this.id)
        console.log("Department: " + this.name)
        console.log(`Department ${this.id}: ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeesInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department("B1","Accounting")

accounting.describe()

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