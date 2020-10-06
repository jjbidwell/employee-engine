const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if (typeof officeNumber !== "number" || officeNumber < 1) {
            throw new Error("Expected parameter 'office' to be a non-negative number");
          }
      super(name, id, email, officeNumber);
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
  
}

module.exports = Manager;
