const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.underlings = [];
    }

    bonus(multiplier) {
        function totalSubSalary(employee) {
            if (!employee instanceof Manager) return employee.salary;
            return employee.underlings.reduce((total, underling) => total + totalSubSalary(underling), 0) + employee.salary;
        }
        return totalSubSalary(this) * multiplier;
    }
}