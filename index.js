const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { resolve } = require("path");
// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated



// user input to generate an html set that will creat a address book for my people on my team 


// going to need inquirer for the inputs 
//going to need inputs for the following ->name, employee ID, email address, and office number
//manager
//enigneer
//intern
//
// going to need fs for the html generation 
// going to need bootstrap moduals for the creation of the tital card 

// have a function that rotates through a menu with inquirer 

const employees = [];

function init() {
    getName();
    startHTML()
}

function getName() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "name",
                message: "What is the name of the team member?",
            },
            {
                type: 'input',
                name: "id",
                message: "What is your employee ID?",
            },
            {
                type: 'input',
                name: "email",
                message: "What is their email?",
            },
            {
                type: 'list',
                name: "startingrole",
                message: "Who are you adding to your Team Profile?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(function ({ name, id, email, startingrole }) {
            console.log(name)
            let roleInfo = " ";
            switch (startingrole) {
                case "Manager":
                    roleInfo = "What is their Office Number?";
                    break
                case "Engineer":
                    roleInfo = "What is their GitHub Username?"
                    break
                case "Intern":
                    roleInfo = "What school did they go to?"
                    break
            }
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "sideinfo",
                        message: `${roleInfo}`
                    },
                    {
                        type: "list",
                        name: "addingpeople",
                        message: "Do you want to add more team members?",
                        choices: ["yes", "no"]
                    }
                ])
                .then(function ({ sideinfo, addingpeople }) {
                    let newMember;
                    switch (startingrole) {
                        case "Manager":
                            newMember = new Manager(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                        case "Engineer":
                            newMember = new Engineer(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                        case "Intern":
                            newMember = new Intern(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                    console.log("person added")
                    setTimeout(()=>{
                        switch(addingpeople){
                        case "yes":
                            console.log('add');
                            getName();
                            break
                        default:
                            console.log('end')
                            endHtml();
                            break
                        }
                    },100)
                    
                });
        })
}

function startHTML() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="bg-danger text-white text-center text-lg">My Team</header>
        <div class="cardinput">
            
        `
    fs.writeFile("index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    })
}

function addHtml(newMember) {
    console.log("adding person")
    const name = newMember.getName()
    const id = newMember.getId()
    const email = newMember.getEmail()
    const role = newMember.getRole()
    let data = ""
    return new Promise(function (resolve, reject) {
        switch (role) {
            case "Manager":
                const officenumber = newMember.getOfficeNumber()
                data = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${role}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
            <p class="card-text">${id}</p>
            <p class="card-text">${email}</p>
            <p class="card-text">${officenumber}</p>
        </div>
        </div>
        `
                break
            case "Engineer":
                const gitHub = newMember.getGitHub()
                data = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${role}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
            <p class="card-text">${id}</p>
            <p class="card-text">${email}</p>
            <a href="https://github.com/${gitHub}" class="card-link">${gitHub}</a>
        </div>
        </div>
                `
                break
            case "Intern":
                const school = newMember.getSchool()
                data = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${role}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
            <p class="card-text">${id}</p>
            <p class="card-text">${email}</p>
            <p class="card-text">${school}</p>
        </div>
        </div>
                        `
                break
        }
        fs.appendFile("index.html", data, function (err) {
            if (err) {
                console.log(err);
            }
            return resolve
        })
    })
}

function endHtml() {
        console.log("ending Html")
        const html = `   
    </div>      
</body>
</html>`;
    
        fs.appendFile("index.html", html, function (err) {
            if (err) {
                console.log(err);
            };
        });
}

init();