//class Employee which is the parent with the other classes being the children
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// is the input the right format?
const Managerel = require("./Manager")
const Engineerel = require("./Engineer")
const Internel = require("./Intern")
cons

const inquirer = require("inquirer");

class Employee {
    // getRole ()
    // insert name 
    // insert ID 
    // insert email 
    // ask the question about who you are adding
    //manager 
    // getRole(role) takes to the other js
    //enginner 
    // getRole(role) takes to the other js
    //intern 
    // getRole(role) takes to the other js
    constructor(name, id, email){
        this.name = name;
        this.id = id
        this.email = email
    }
    getName() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: "startingrole",
                message: "Who are you adding to your Team Profile?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'list',
                name: "name",
                message: "What is the name of the team member?",
            },
            {
                type: 'list',
                name: "id",
                message: "What is your employee ID?",
            },
            {
                type: 'list',
                name: "email",
                message: "What is their email?",
            },
            ])
            .then(val => {
                switch(val.startingrole){
                    case "Manager":
                        Managerel.getRole();
                        break;
                    case "Engineer":
                        Engineerel.getRole()
                        break;
                    case "Intern":
                        Internel.getRole()
                        break;
                }
            }
            )


    }
}

module.export = Employee