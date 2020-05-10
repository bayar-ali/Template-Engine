const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


let managerList = []; 
let engineerList = []; 
let internList = []; 

const rendering = require("./lib/htmlRender");


function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is your Employee Name:",

    },
    {
      type: "list",
      name: "jobDescription",
      message: "What role is your new employee joining?",
      choices: ["Manager", "Engineer", "Intern"]
    }


  ])


  .then((results) => {
    switch (results.jobDescription) {
      case 'Manager':
        inquirer.prompt([{
          type: "input",
          name: "id",
          message: "What is the Manager ID number?"
        },
        {
        type: "input",
        name: "email",
        message: "What is the Manager Email?"
        },
        {
          type: "input",
          name: "managerNum",
          message: "What is the Manager Office Number?"
        }
        ])

        .then ((resultsManager)=> {

          const newMan = new Manager(results.name, resultsManager.id, resultsManager.email, resultsManager.managerNum)
             
           managerList.push(newMan)
          fs.writeFile("manager.html", rendering([newMan]), (err) => {
            if (err) throw (err)
          })
        })

        break; 
        case 'Engineer':
          inquirer.prompt([{
            type: "input",
            name: "id",
            message: "what is the Engineers ID number?"
          },
          {
            type: "input",
            name: "email",
            message: "what is the Engineers Email?"
          },
          {
            type: "input",
            name: "engineerGitHub",
            message: "what is the Engineers github account?"
          }
        
        ])
          .then((resultsEnigneer) => {
            const newEngineer = new Engineer(results.name, resultsEngineer.id, resultsEnigneer.email, resultsEnigneer.engineerGitHub);

            engineerList.push(newEngineer)

          

          });
          

        break;
        case 'Intern' :

          inquirer.prompt([{
            type: "input",
            name: "id",
            message: "what is the Intern's ID number?"
          },
          {
            type: "input",
            name: "email",
            message: "what is the Intern's Email?"
          },
          {
            type: "input",
            name: "internSchool",
            message: "what School did the intern go to?"
          }
        
          ])
            .then((resultsIntern) => {
              const newInt = new Intern(results.name, resultsIntern.id, resultsIntern.email, resultsIntern.internSchool)
             
              internList.push(newInt)
              fs.appendFile("newintern.html", rendering([newInt]), (err) => {
                if (err) throw (err)
              })
            })
       

    }

  })

}

promptUser()

function listOfPeople() {
  rendering(managerList)
  rendering(engineerList)
  rendering(internList)
}
