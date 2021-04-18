const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const createManager = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the managers name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the managers employee id number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the managers email?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the managers office number?'
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        allEmployees.push(manager)
        nextEmployee()
    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is the engineer's name?"
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the engineer's id number?"
        },
        {
            name: 'email',
            type: 'input',
            message: "What is the engineer's email address?"
        },
        {
            name: 'github',
            type: 'input',
            message: "What is the engineer's GitHub username?"
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        allEmployees.push(engineer)
        nextEmployee()
    })
}

const nextEmployee = () => {
    inquirer.prompt(
        {
            name: 'foo',
            type: 'list',
            message: 'what do you want to do next?',
            choices: ['create engineer', 'create intern', 'finish']
        }
    )
}
//create inquirer questions to fill values in html renderer function
//first set of questions generate manager information. 
//ID automatically generates for employee based on order they are filled out
//after manager information is filled out user is prompted with a list questionarre that asks if they want to make an engineer or inter or none
//if none return values
//if engineer or intern prompt user to fill out coorisponding information 



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

//set up function to call inquirer and questions
//promise calls function to have cards generated
//create template literal with cards and loop through managers interns and engineers. (interns and engineers may be combined?)



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//Use render function to create new html file using fs. or output folder? 
// must research outerPath/output folder



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
