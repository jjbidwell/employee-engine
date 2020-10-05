const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
      // call the constructor of the parent class (Employee)
      super(name, id, email, github);
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
  }

module.exports = Engineer;