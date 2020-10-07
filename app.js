const fs = require('fs');
const inquirer = require('inquirer');

const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const { type } = require('os');

let renderedHTML;
let finalHTML;

let number = 0;
let count = 1;
let job;
let employeeArray = [];


fs.writeFile('./output/index.html', "", (err) => {
    if (err) throw err;
})

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
        let newManager = new Manager(manager.name, count, manager.email, manager.office)
        employeeArray.push(newManager);
        inquirer
            .prompt([
                {
                    type: "number",
                    message: "How many employees would you like to enter?",
                    name: "number"
                }
            ]).then(answers => {
                number = answers.number;
                if (number < 1 || isNaN(number)){
                    return render();
                } else {
                    return whatType();
                }

            });
        })



function whatType(){    
    count++;
    console.log(count)
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
                let newEngineer = new Engineer(answers.name, count, answers.email, answers.github)
                employeeArray.push(newEngineer);
                if(count < number + 1){
                    return whatType();
                } else {
                   return render();
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
                let newIntern = new Intern(answers.name, count, answers.email, answers.school)
                employeeArray.push(newIntern);
                if(count < number + 1){
                    return whatType();
                } else {
                    return render();
                }
            });
    } 
}



 function render(){
     for (let i = 0; i < employeeArray.length; i++){
        setTimeout(() => { 
         if(employeeArray[i].officeNumber){
            let managerName = employeeArray[i].name;
            let managerEmail = employeeArray[i].email;
            let managerID = employeeArray[i].id;
            let managerOffice = employeeArray[i].officeNumber;
            fs.readFile(__dirname + '/templates/head.html', (err, data) => {
                renderedHTML = data.toString();
                finalHTML = renderedHTML.replace('{mgmt-name}', managerName).replace('{mgmt-id}', managerID).replace(/{mgmt-email}/g, managerEmail).replace('{office-number}', managerOffice);
                fs.writeFile('./output/index.html', finalHTML, () => {
                    if (err) throw err;
                })
            })
         } else if (employeeArray[i].github){
            let engineerName = employeeArray[i].name;
            let engineerEmail = employeeArray[i].email;
            let engineerID = employeeArray[i].id;
            let engineerGithub = employeeArray[i].github;
            fs.readFile(__dirname + '/templates/engineer.html', (err, data) => {
                renderedHTML = data.toString();
                finalHTML = renderedHTML.replace('{eng-name}', engineerName).replace('{eng-id}', engineerID).replace(/{eng-email}/g, engineerEmail).replace(/{github}/g, engineerGithub);
                fs.appendFile('./output/index.html', finalHTML, () => {
                    if (err) throw err;
                })
            });
         } else if(employeeArray[i].school){
            let internName = employeeArray[i].name;
            let internEmail = employeeArray[i].email;
            let internID = employeeArray[i].id;
            let internSchool = employeeArray[i].school;
            fs.readFile(__dirname + '/templates/intern.html', (err, data) => {
                renderedHTML = data.toString();
                finalHTML = renderedHTML.replace('{int-name}', internName).replace('{int-id}', internID).replace(/{int-email}/g, internEmail).replace('{school}', internSchool);
                fs.appendFile('./output/index.html', finalHTML, () => {
                    if (err) throw err;
                });
            });
         };
        }, 1500);
     };
    console.log('Loading...');
    setTimeout(() => {
        console.log((number+1) + ' people logged!');
        fs.readFile(__dirname + '/templates/foot.html', (err, data) => {
            fs.appendFile('./output/index.html', data, () => {
                if (err) throw err;
            });
        });
    }, employeeArray.length * 3000);
}
