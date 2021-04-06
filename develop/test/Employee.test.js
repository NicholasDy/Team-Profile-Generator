// what should my tests do?
//class Employee which is the parent with the other classes being the children
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// is the input the right format?

const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    it("There should be no numbers in the name", () => {
        expect(new Employee("Nick").toBe(true)
    });
    it("Returns an alert for a name with a number", () => {
        expect(new Employee("8").getName()).toBe(false)
    });
    it("Returns an alert for a number within the ID", () => {
        expect(new Employee("8").getId()).toBe(true)
    });
    it("Returns an alert for a number within the ID", () => {
        expect(new Employee("a").getId()).toBe(false)
    });
    it("Does the email have a @ symbol?", () => {
        expect(new Employee("@").getEmail()).toBe(true)
    });
    it("Is the role of the an employee?", () => {
        expect(new Employee("@").getRole()).toBe(true)
    });

})



