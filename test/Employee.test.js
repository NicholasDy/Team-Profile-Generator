const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
          const employee = new Employee();
          expect(employee instanceof Employee).toBe(true);
        })
        it('it sets the name property based on constructor argument', () => {
            const name = "Giselle";
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
          });
        it("it sets the id property based on constructor argument", () =>{
            const id = 8; 
            const employee = new Employee("", id);
            expect(employee.id).toBe(id)
        })
        it("it sets the email property based on constructor argument", () =>{
            const email = "test@hotmail.com"; 
            const employee = new Employee("", 0, email);
            expect(employee.email).toBe(email)
        })
    })
    describe('getName', () => {
        it('return the name of the person', () => {
            const name = "nick"
            const employee = new Employee(name)
            expect(employee.getName()).toBe(name)            
        })
       
    }) 
    describe("getId", () => {
        it('return the id of the person', () => {
            const id = 8; 
            const employee = new Employee("", id);
            expect(employee.getId()).toBe(id)            
        })
    })
    describe("getEmail", () => {
        it('return the id of the person', () => {
            const email = "test@hotmail.com"; 
            const employee = new Employee("", 0, email);
            expect(employee.getEmail()).toBe(email)       
        })
    })
    describe("getRole", () => {
        it('return the role of the person', () => {
            const employee = new Employee();
            expect(employee.getRole()).toBe("Employee")       
        })
    })
})
