const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeArray = []

let questions = [
    {
        message: "What is your employee's name?",
        name: 'name',
    },
    {
        message: 'What is their id?',
        name: "id"
    },
    {
        message: 'What is their email address?',
        name: "email"
    },
]

let engineerQuestion = [
    {
        message: 'What is their GitHub user name?',
        name: "roleVar"
    }
]

let internQuestion = [
    {
        message: 'What school are they going to?',
        name: "roleVar"
    }
]

inquirer
    .prompt([
        {
            message: "What is your manager's name?",
            name: 'name',
        },
        {
            message: 'What is their id?',
            name: "id"
        },
        {
            message: 'What is their email address?',
            name: "email"
        },
        {
            message: 'What is their office number?',
            name: "roleVar"
        }
    ])
    .then(function(name, id, email, roleVar) {
        employeeArray.push(new Manager(name, id, email, roleVar));
        

        addEmployee();
    })

function addEmployee() {
    inquirer
        .prompt(
            {
                message: 'Would you like to add an employee?',
                name: 'employee',
                choices: ["Engineer", 'Intern', 'No'],
                type: 'list'
            }
        )
        .then(function(employee) {
            let q = [];

            switch (employee) {
                case 'No':
                    console.log(employeeArray)
                    return null;
                    break;
                case 'Engineer':
                    q = engineerQuestion;
                    break;
                case 'Intern':
                    q = internQuestion;
                    break;
            }


            if (employee === "Engineer" || employee === "Intern") {
                inquirer
                .prompt(questions.concat(q))
                .then(function(name, id, email, roleVar) {
                    switch (employee) {
                        case 'Engineer':
                            employeeArray.push(new Engineer(name, id, email, roleVar));
                            break;
                        case 'Intern':
                                employeeArray.push(new Intern(name, id, email, roleVar));
                            break;
                    }

                    addEmployee();
                })

            }
            
        })
}