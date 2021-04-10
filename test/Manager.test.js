//class Manager extend Emplopyee
    // officeNumber

    // getRole()—overridden to return 'Manager'

const Manager = require("../lib/Manager")

describe("Manager Class", () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Enigneer class when called with the new keyword', () => {
          const manager = new Manager();
          expect(manager instanceof Manager).toBe(true);
        })
        it('it sets the office property based on constructor argument', () => {
            const office = 0;
            const manager = new Manager("", 0, "", office);
            expect(manager.office).toBe(office);
          });
        
    })
    describe('getName', () => {
        it('return the office number', () => {
            const office = 0
            const manager = new Manager("", 0, "", office);
            expect(manager.getOfficeNumber()).toBe(office)            
        })
    })
    describe("getRole", () => {
        it('return the role of the person', () => {
            const manager = new Manager();
            expect(manager.getRole()).toBe("Manager")       
        })
    })
})