const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'GitHub' to be a non-empty string");
          }
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