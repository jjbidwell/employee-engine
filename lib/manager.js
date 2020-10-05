const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        if (typeof office !== "number" || office < 1) {
            throw new Error("Expected parameter 'office' to be a non-negative number");
          }
      super(name, id, email, office);
      this.name = name;
      this.id = id;
      this.email = email;
      this.office = office;
    }

    getRole(){
        return "Manager";
    }
  
}

module.exports = Manager;
