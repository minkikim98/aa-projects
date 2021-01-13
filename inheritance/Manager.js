// const Employee = require("./Employee");

// class Manager extends Employee {
//     constructor(name, title, salary, boss) {
//         super(name, title, salary, boss);
//         this.underlings = [];
//     }

//     bonus(multiplier) {
//         function totalSubSalary(employee) {
//             if (!employee instanceof Manager) return employee.salary;
//             return employee.underlings.reduce((total, underling) => total + totalSubSalary(underling), 0) + employee.salary;
//         }
//         return totalSubSalary(this) * multiplier;
//     }
// }

let Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.underlings = [];
    }

    totalSubSalary() {
        let totalSalary = 0;
        this.underlings.forEach(underling => {
            totalSalary += underling.totalSubSalary();
        });
        totalSalary += this.salary;
        return totalSalary;
    }

    addUnderling(underling) {
        this.underlings.push(underling);
    }

    bonus(multiplier) {
        return this.totalSubSalary() * multiplier;
    }


}

let hobbes = new Employee("Hobbes", "Founder", 1000000, null);
let calvin = new Employee("Calvin", "Director", 130000, "Hobbes");
let susie = new Manager("Susie", "TA Manager", 100000, "Calvin");
let lily = new Employee("Lily", "TA", 90000, "Susie");
let clifford = new Employee("Clifford", "TA", 90000, "Susie");

susie.addUnderling(lily);
susie.addUnderling(clifford);

console.log(hobbes.bonus(0.05)); // 50000
console.log(calvin.bonus(0.05)); // 6500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
