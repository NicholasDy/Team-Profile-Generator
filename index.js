const inquirer = require("inquirer");
const fs = require("fs")
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

const employees = [], 

function startUp(){
    getName()
}


function getName() {
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
            let roleInfo = " ";
            switch(val.startingrole){
                case "Manager":
                    roleInfo = "What is their Office Number?";
                    break;
                case "Engineer":
                    roleInfo = "What is their GitHub Username?"
                    break;
                case "Intern":
                    roleInfo = "What school did they go to?"
                    break;
            }
        })
        .then(function 
            inquirer
                .prompt([
                    {
                        type:"list",
                        name:"sideinfo",
                        message:`${roleInfo}`
                    }
                ])
        })


}
}


// // Uses inquirer to prompt the user for their guess
// makeGuess() {
//         this.askForLetter().then(() => {
//             // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
//             if (this.guessesLeft < 1) {
//                 console.log(
//                     'No guesses left! Word was: "' +
//                     this.currentWord.getSolution() +
//                     '"\n'
//                 );
//                 this.askToPlayAgain();

//                 // If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word
//             } else if (this.currentWord.guessedCorrectly()) {
//                 console.log("You got it right! Next word!");
//                 this.guessesLeft = 10;
//                 this.nextWord();

//                 // Otherwise prompt the user to guess the next letter
//             } else {
//                 this.makeGuess();
//             }
//         });
//     }

// // Asks the user if they want to play again after running out of guessesLeft
// askToPlayAgain() {
//         inquirer
//         .prompt([
//             {
//                 type: "confirm",
//                 name: "choice",
//                 message: "Play Again?"
//             }
//         ])
//             .then(val => {
//                 // If the user says yes to another game, play again, otherwise quit the game
//                 if (val.choice) {
//                     this.play();
//                 } else {
//                     this.quit();
//                 }
//             });
//     }

// // Prompts the user for a letter
// askForLetter() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "choice",
//                     message: "Guess a letter!",
//                     // The users guess must be a number or letter
//                     validate: val => /[a-z1-9]/gi.test(val),
//                 }
//             ])
//             .then(val => {
//                 // If the user's guess is in the current word, log that they chose correctly
//                 const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
//                 if (didGuessCorrectly) {
//                     console.log(chalk.green("\nCORRECT!!!\n"));

//                     // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//                 } else {
//                     this.guessesLeft--;
//                     console.log(chalk.red("\nINCORRECT!!!\n"));
//                     console.log(this.guessesLeft + " guesses remaining!!!\n");
//                 }

//                 console.log(this.currentWord.toString() + "\n");
//             });
//     }

// // Logs goodbye and exits the node app
// quit() {
//         console.log("\nGoodbye!");
//         process.exit(0);
//     }
// }


startUp();