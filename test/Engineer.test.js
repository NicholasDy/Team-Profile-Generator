const Engineer = require("../lib/Engineer")

describe("Engineer Class", () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Enigneer class when called with the new keyword', () => {
          const engineer = new Engineer();
          expect(engineer instanceof Engineer).toBe(true);
        })
        it('it sets the github property based on constructor argument', () => {
            const github = "Nic27"; 
            const engineer = new Engineer("", 0, "", github);
            expect(engineer.github).toBe(github);
          });
        
    })
    describe('getName', () => {
        it('return the github username', () => {
            const github = "Nic27"
            const engineer = new Engineer("", 0, "", github)
            expect(engineer.getGitHub()).toBe(github)            
        })
    })
    describe("getRole", () => {
        it('return the role of the person', () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toBe("Engineer")       
        })
    })
})