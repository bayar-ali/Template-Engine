// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = email; 
        this.email = id; 
        this.role = "employee"; 
    }
    
}

Employee.prototype.getName = function getName() {
    return this.name
};

Employee.prototype.getId = function getId() {
    return this.name
};

Employee.prototype.getEmail = function getEmail() {
    return this.name
};

Employee.prototype.getRole = function getRole() {
    return this.name
};


module.exports = Employee; 