// app.js
class Employee {
    constructor(empName, dept, netPay) {
        this.empName = empName;
        this.dept = dept;
        this.netPay = netPay;
    }
}

// Example employee
const employee = new Employee('John Doe', 'Engineering', 5000);

console.log(`Employee Name: ${employee.empName}`);
console.log(`Department: ${employee.dept}`);
console.log(`Net Pay: $${employee.netPay}`);
