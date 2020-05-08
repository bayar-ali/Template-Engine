// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee = require("./Employee")

function Manager(name, email, id, officeNumber) {
        Employee.call(this, name, id, email)
        this.role = "Manager"; 
        this.officeNumber = officeNumber; 
    }


Manager.prototype = Object.create(Employee.prototype)

Manager. prototype.getOfficeNumber = function getOfficeNumber() {
    return this.officeNumber
};

//exporting 
module.exports = Manager;
