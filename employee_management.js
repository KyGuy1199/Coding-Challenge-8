// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name ;
        this.salary = salary ;
        this.position = position ;
        this.department = department ;      // The employee class constructor
    }

    getDetails() {
        return 'Name: ${this.name}, Position: ${thhis.position}, Salary: $${this.salary}, Department: ${this.department}' :
    }     // Return a string of employee details
}

// Task 2: Create a Department Class

class Department {
    constructor(name) {
        this.name = name ; 
        this.employees = [] ;     // Store employee objects
    }

    addEmployee(employee)  {
        this.employees.push(employee) ;     // Method that adds an employee to the array
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total = employee.salary, 0) ;
    }    //Method to calculate and return employees in the department's salary
}

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department) ;
        this.bonus = bonus ;   //extra property for Manager class
    }

    getDetails() {
        return '${super.getDetails()}, Bonus: $${this.bonus}' ;
    }     //Made getDetails() method include bonus 
}

//Task 4: Handle Bonuses for Managers

calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.salary = employee.bonus ; 
         }  else {
            return total = employee.salary;   
         }
    }, 0) ;
}

//Task 5: Create and Manage Departments and Employees

const iconDepartment = new Department ('Icon') ;
const baddieDepartment = new Department ('Baddie') ;
//created departments

const iconEmp1 = new Employee("Doechii", 750000, "Swamp Princess", 'Icon') ;
const iconEmp2 = new Employee('Ariana Grande', 900000, 'Pop Princess', 'Icon') ; 
const iconManager = new Manager('Nicki Minaj', 1000000, "Queen", 'Icon', 500000) ;

iconDepartment.addEmployee(iconEmp1) ;
iconDepartment.addEmployee(iconEmp2) ;
iconDepartment.addEmployee(iconManager) ;

const baddieEmp1 = new Employee("Chappell Roan", 500000, "Midwestern Princess", 'Baddie') ;
const baddieEmp2 = new Employee('Lady Gaga', 850000, 'Harlequin', 'Baddie') ; 
const baddieManager = new Manager('Doja Cat', 1100000, "Queen", 'Baddie', 600000) ;

baddieDepartment.addEmployee(baddieEmp1) ;
baddieDepartment.addEmployee(baddieEmp2) ;
baddieDepartment.addEmployee(baddieManager) ;
//creating and adding employees and managers to departments

console.log('Total salary for Icon department (without bonuses): $${iconDepartment.getDepartmentSalary()}') ;
console.log('Total salary for Baddie department (without bonuses): $${baddieDepartment.getDepartmentSalary()}') ;

console.log('Total salary for Icon department (with bonuses): $${iconDepartment.calculateTotalSalaryWithBonus()}') ;
console.log('Total salary for Baddie department (with bonuses): $${baddieDepartment.calculateTotalSalaryWithBonus()}') ;
//calculate each department with and without bonuses