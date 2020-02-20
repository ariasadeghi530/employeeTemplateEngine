const prompt = require("inquirer").createPromptModule();
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');

//questions for manager
const initQuestions = [
  'What is your name?',
  'What is your ID?',
  'What is your email?',
  'What is your office number?',
  'How many engineers are on your team?',
  'How many interns are on your team?'
];

//questions for employees
const employQuestions = [
  'What is your name?',
  'What is your ID?',
  'What is your email?',
  'What is your GitHub username?',
  'What is your school name?'
];

let employeeArr = [];

// capitalize first letter of string
function capitalize(s) {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

//ask the manager the initial questions
function init() {
console.log('Manager, follow instructions to create your team page.')
  prompt([
    {
      type: 'input',
      name: `name`,
      message: initQuestions[0]
    },
    {
      type: 'number',
      name: 'id',
      message: initQuestions[1]
    },
    {
      type: 'input',
      name: `email`,
      message: initQuestions[2]
    },
    {
      type: 'number',
      name: 'officeNum',
      message: initQuestions[3]
    },
    {
      type: 'number',
      name: 'numEngineers',
      message: initQuestions[4]
    },
    {
      type: 'number',
      name: 'numInterns',
      message: initQuestions[5]
    }
  ])

    .then(response => {
      employeeArr.push(new Manager(capitalize(response.name), response.id, response.email, response.officeNum));
      askEngineerQuestions(response.numEngineers, response.numInterns);
    })
    .catch(e => console.error(e));

}

//ask the engineers the related questions
async function askEngineerQuestions(numEng, numInt) {
  for (let i = 0; i < numEng; i++) {
    console.log(`Engineer${i + 1}, follow instructions to create your profile:`);
    const waitForEngAnswer = await prompt([
      {
        type: 'input',
        name: 'name',
        message: employQuestions[0]
      },
      {
        type: 'number',
        name: 'id',
        message: employQuestions[1]
      },
      {
        type: 'input',
        name: 'email',
        message: employQuestions[2]
      },
      {
        type: 'input',
        name: 'github',
        message: employQuestions[3],
      }
    ])
      .then(response => {
        employeeArr.push(new Engineer(capitalize(response.name), response.id, response.email, response.github));
      })
      .catch(e => console.error(e));
  }
  askInternQuestions(numInt);
}

//ask the interns the related questions
async function askInternQuestions(numInt) {
  
  for (let i = 0; i < numInt; i++) {
    console.log(`Intern${i + 1}, follow instructions to create your profile:`);
    const waitForEngAnswer = await prompt([
      {
        type: 'input',
        name: 'name',
        message: employQuestions[0]
      },
      {
        type: 'number',
        name: 'id',
        message: employQuestions[1]
      },
      {
        type: 'input',
        name: 'email',
        message: employQuestions[2]
      },
      {
        type: 'input',
        name: 'school',
        message: employQuestions[4],
      }
    ])
      .then(response => {
        employeeArr.push(new Intern(capitalize(response.name), response.id, response.email, response.school));
      })
      .catch(e => console.error(e));
  }
  console.log(employeeArr);
}


init();