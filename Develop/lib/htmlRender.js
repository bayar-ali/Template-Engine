const path = require("path");
const fs = require("fs"); 

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""))

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), 'utf-8');
    template = replacePlaceHolders(template, "name", manager.getName()) 
    template = replacePlaceHolders(template, "role", manager.getRole())
    template = replacePlaceHolders(template, "email", manager.getEmail())
    template = replacePlaceHolders(template, "id", manager.getId())
    template = replacePlaceHolders(template, "officeNumber", manager.getOfficeNumber())
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), 'utf-8');
    template = replacePlaceHolders(template, "name", intern.getName()) 
    template = replacePlaceHolders(template, "role", intern.getRole())
    template = replacePlaceHolders(template, "email", intern.getEmail())
    template = replacePlaceHolders(template, "id", intern.getId())
    template = replacePlaceHolders(template, "school", intern.getSchool())
    return template;
}

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf-8")
    return replacePlaceHolders(template, "team", html); 
};

const replacePlaceHolders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}");
    return template.replace(pattern, value); 
};

module.exports = render; 