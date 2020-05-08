const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
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
        choices: ["manager", "Engineer", "Intern"]
      }
      
  
    ])
  }

promptUser()
  .then((results) => {
    console.log(results.jobDescription)
    console.log(results.name)
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
          console.log(resultsManger.id)
          const newMan = new Manager(results.name, resultsManager.id, resultsManager.email, resultsManager.managerNum)

          fs.writeFile("manager.html", render([newMan]), (err) => {
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

        const newIntern = new Intern(`${name}` `${id}`, `${email}`, `${internSchool}`)

        return [jobDescription.id, jobDescription.email, jobDescription.internSchool]

    }
  })

  .then(() => {

  })
  .then(() => {
    
  })

  
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```