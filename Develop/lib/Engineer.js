// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee = require("./Employee")

function Engineer(name, email, id, github) {
        Employee.call(this, name, id, email)
        this.role = "Engineer"; 
        this.github = github; 
    }


Engineer.prototype = Object.create(Employee.prototype)

Engineer. prototype.getGithub = function getGithub() {
    return this.github
};

//exporting 
module.exports = Engineer;