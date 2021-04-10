const Intern = require("../lib/Intern")

describe("Intern Class", () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Enigneer class when called with the new keyword', () => {
          const intern = new Intern();
          expect(intern instanceof Intern).toBe(true);
        })
        it('it sets the school property based on constructor argument', () => {
            const school = 0;
            const intern = new Intern("", 0, "", school);
            expect(intern.school).toBe(school);
          });
        
    })
    describe('getName', () => {
        it('return the school that the intern went to', () => {
            const school = 0
            const intern = new Intern("", 0, "", school);
            expect(intern.getSchool()).toBe(school)            
        })
    })
    describe("getRole", () => {
        it('return the role of the person', () => {
            const intern = new Intern();
            expect(intern.getRole()).toBe("Intern")       
        })
    })
})