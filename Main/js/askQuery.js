const inquirer = require('inquirer');
const { question } = require("./question");
const {
    viewAllEmployees,
    viewAllRoles,
    viewAllDepartments,
    addDepartment,
    addRole,
    addEmployee,
    removeEmployee,
    updateEmployeeRole,
} = require('./query');

const makeQuery = (selected) => {
    let answer = selected.selections;

            switch (answer) {
                case question[0]:
                    viewAllEmployees().then(() => init());
                    break;

                case question[1]:
                    viewAllRoles().then(() => init());
                    break;

                case question[2]:
                    viewAllDepartments().then(() => init());
                    break;

                case question[3]:
                    addDepartment();
                    break;
          
                case question[4]:
                    addRole();
                    break;

                case question[5]:
                    addEmployee();
                    break;

                case question[6]:
                    removeEmployee();
                    break;

                case question[7]:
                    updateEmployeeRole().then(() => init());
                    break;

                case question[8]:
                    default:

            }
        
};


module.exports = { makeQuery };