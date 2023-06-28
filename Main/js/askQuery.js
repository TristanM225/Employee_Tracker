const inquirer = require('inquirer');
const {
    viewEmployees,
    viewRoles,
    viewDepartments,
    addDepartment,
    addRole,
    addEmployee,
    removeEmployee,
    updateEmployeeRole,
} = require('./question');

function init() {

    inquirer
        .prompt({
            type: 'list',
            name: 'tasks',
            message: "What would you like to do",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add a Department",
                "Add a Role",
                "Add a Employee",
                "Remove a Employee",
                "Update a Employee Role",
                "Quit"
            ]

        })
        .then(function ({ task }) {
            switch (task) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "View All Departments":
                    viewDepartments();
                    break;

                case "Add a Department":
                    addDepartment();
                    break;
          
                case "Add a Role":
                    addRole();
                    break;

                case "Add a Employee":
                    addEmployee();
                    break;

                case "Remove a Employee":
                    removeEmployee();
                    break;

                case "Update a Employee Role":
                    updateEmployeeRole();
                    break;

                case "Quit":
                    connection.quit();
                    break;
                    default:
                    break;

            }
        });
}

init();

export init;