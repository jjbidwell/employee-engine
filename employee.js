const fs = require('fs');
const inquirer = requires('inquirer');

function Emloyee (name, title, id, email, github){
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
      }
    
    if (typeof id !== "number" || isNaN(id) || age < 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number");
      }
    
 
}


module.exports = Eployee;