// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee = require("./Employee");


// creating a class inhierat from employee
function Intern(name, id, email, school) {
        Employee.call(this,name, id, email)
        this.role = "Intern"; 
        this.school = school; 
    

}

Intern.prototype = Object.create(Employee.prototype)

Intern.prototype.getSchool = function getSchool() {
    return this.school; 
};


// exporting 
module.exports = Intern;