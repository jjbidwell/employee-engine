const fs = require('fs');
const inquirer = require('inquirer');

const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const { type } = require('os');

let headHTML;
let engineerHTML;
let internHTML;

let number = 0;
let count = 1;
let job;
let employeeArray = [];



inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the project manager's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the project manager's email",
            name: "email"
        },
        {
            type: "number",
            message: "Please enter the project manager's office number",
            name: "office"
        }
    ]).then(manager => {
        employeeArray.push(new Manager(manager.name, count, manager.email, manager.office));
        fs.readFile(__dirname + '/templates/head.html', (err, data) => {
            headHTML = data.toString();
            let finalHead = headHTML.replace('{manager-name}', manager.name).replace('{id}', count).replace(/{email}/g, manager.email).replace('{office-number}', manager.office);
            fs.writeFile('./output/index.html', finalHead, () => {
                if (err) throw err;
            })
            count++;
        })
        inquirer
            .prompt([
                {
                    type: "number",
                    message: "How many employees would you like to enter?",
                    name: "number"
                }
            ]).then(answers => {
                number = answers.number;
                return whatType();
            });
        })



function whatType(){    
    console.log(`=====Employee #${count - 1}=====`)
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'position',
                message: `What position does employee #${count - 1} hold?`,
                choices: [
                    "Engineer",
                    "Intern"
                ]
            }
        ]).then(answer => {
            job = answer.position;
            return questions();
        })
}


function questions() {
    if(job === "Engineer"){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the engineer's name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Please enter the engineer's email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Please enter the engineer's GitHub username",
                    name: "github"
                }
            ]).then((answers) => {
                employeeArray.push(new Engineer(answers.name, count, answers.email, answers.github));
                if(count < number + 1){
                    count++;
                    return whatType();
                } else {
                    console.log(number + ' people logged!');
                    console.log(employeeArray);
                }
            });
    } else if(job === "Intern"){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the intern's name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Please enter the intern's email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Please enter the intern's current school",
                    name: "school"
                }
            ]).then((answers) => {
                employeeArray.push(new Intern(answers.name, count, answers.email, answers.school));
                if(count < number + 1){
                    count++;
                    whatType();
                } else {
                    console.log(number + ' people logged!');
                    render();
                    //console.log(employeeArray.length);
                }
            });
    } 
    // else if(job === "Manager"){
    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 message: "Please enter the manager's name",
    //                 name: "name"
    //             },
    //             {
    //                 type: "input",
    //                 message: "Please enter the manager's email",
    //                 name: "email"
    //             },
    //             {
    //                 type: "number",
    //                 message: "Please enter the manager's office number",
    //                 name: "office"
    //             }
//             ]).then((answers) => {
//                 employeeArray.push(new Manager(answers.name, count, answers.email, answers.office));
//                 if(count < number){
//                     count++;
//                     return whatType();
//                 } else {
//                     console.log(number + ' people logged!');
//                     console.log(employeeArray);
//                     fs.writeFile('./output/index.html', `<p> ${JSON.stringify(employeeArray, null, 5)} </p>`, (err) => {
//                         if (err){
//                             console.log(err);
//                         }
//                     })
//                 }
//             });
//     }
 }


 function render(){
     for (let i = 0; i < employeeArray.length; i++){
        console.log("============================")
        console.log(employeeArray[i].officeNumber);
     }
 }
     