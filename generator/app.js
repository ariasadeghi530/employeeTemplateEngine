const prompt = require("inquirer").createPromptModule();

//questions for manager
const initQuestions = [
  'What is your name?',
  'What is your ID?',
  'What is your office number?',
  'How many engineers and interns are on your team?'
];


//employee class constructor
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.title = 'Employee';
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.name + '@company.com';
  }
  getRole() {
    return this.title;
  }
}

//Manager class constructor
class Manager extends Employee {
  constructor(name, id, officeNum) {
    super(name, id);
    this.officeNum = officeNum;
    this.title = 'Manager';
  }
  getRole() {
    return this.title;
  }
}

// engineer class constructor
class Engineer extends Employee {
  constructor(name, id, gitHub) {
    super(name, id);
    this.gitHub = gitHub;
    this.title = 'Engineer';
  }
  getGithub() {
    return this.gitHub;
  }
  getRole() {
    return this.title;
  }
}

//intern class constructor
class Intern extends Employee {
  constructor(name, id, school) {
    super(name, id);
    this.school = school;
    this.title = 'Intern';
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.title;
  }
}

// capitalize first letter of string
function capitalize(s) {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}


function init() {

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
      type: 'number',
      name: 'officeNum',
      message: initQuestions[2]
    },
    {
      type: 'number',
      name: 'numEmployees',
      message: initQuestions[3]
    }
  ])

    .then(response => {
      let theManager = new Manager(capitalize(response.name), response.id, response.officeNum);
      console.log(theManager);
      // askEmployeeQuestions(response.numEmployees);
    })
    .catch(e => console.error(e));

}

// function askEmployeeQuestions(num){
//   for(let i = 0; i < num; i++){
    
//   }
// }

init();