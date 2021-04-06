//class Manager extend Emplopyee
    // officeNumber

    // getRole()—overridden to return 'Manager'

    inquirer
    .prompt([
        // first question is going to be about the manager and the infromtion regarding the info for him/her
        {
            type: "confirm",
            name: "manName",
            message: "What is the team manager's name?",
        },
        {
            type: "confirm",
            name: "manID",
            message: "What is the team manager's ID?",
        },
        {
            type: "confirm",
            name: "manEmail",
            message: "What is the team manager's email?",
        },
        {
            type: "confirm",
            name: "manGitHub",
            message: "What is the team manager's GitHub username?",
        },
        {
            type: "confirm",
            name: "manOffi",
            message: "What is the team manager's Office Number?",
        },
    ])
    .then(manAnswers => {
        
    }