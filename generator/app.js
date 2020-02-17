const prompt = require("inquirer").createPromptModule();

class Employee {
  constructor(email, id) {
    this.email = email;
    this.id = id;
  }
}
class Manager extends Employee {
  constructor(email, id, officeNum) {
    super(email, id);
    this.officeNum = officeNum;
  }
}
class Engineer extends Employee {
  constructor(email, id, gitHub) {
    super(email, id);
    this.gitHub = gitHub;
  }
}
class Intern extends Employee {
  constructor(email, id, school) {
    super(email, id);
    this.school = school;
  }
}
