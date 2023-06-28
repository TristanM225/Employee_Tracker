const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const cTable = require("console.table");
let db;

async function main() {
    db = await mysql.createConnection(
        {
            host: 'localhost',
            // MySQL username,
            user: 'root',
            // not not Mysql pass
            password: 'CodingRules23#',
            database: 'tracker_db',
        },
        console.log(`Connected to the tracker_db database.`)
    );
}

main();

const viewAllDepartments = () =>
    db.query(
        `SELECT * FROM department;`).then(([res]) => console.table(res));


const viewAllRoles = () =>
    db.query(
        `SELECT title FROM roles;`).then(([res]) => console.table(res));



const viewAllEmployees = () =>
    db.query(
        `SELECT first_name, last_name FROM employee;`).then(([res]) => console.table(res));

const addDepartment = () => {
    const departmentRequest = {
        type: 'input',
        name: 'requestedName',
        message: 'What is the name of the new department?'
    };

    inquirer.prompt(departmentRequest)
    .then((response) => {
      const sql = `INSERT INTO department (department_name) VALUES (?)`;
      const params = [response.requestedName];

      return db.query(sql, params);
    })
    .then(() => {
      console.log("Department successfully added.");
    })
    .catch((error) => {
      console.error("Error adding department:", error);
    });
};
const addRole = (role) => {
    db.query(
        `INSERT INTO departments (title, salary, department_id) VALUES (${role.requestedName},${requestedSalary}, ${role.requestedDepartment});`,
        function (err, results) {
            console.log(results);
        }
    );
};

const addEmployee = () => {
    db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${employee.requestedFirstName}, ${employee.requestedLastName},${employee.requestedRoleID}, ${employee.requestedMangerID})`,
        function (err, results) {
            console.log(results);
        }
    );
};

function removeEmployee() { }

const updateEmployeeRole = () => {
    db.query(
        `VALUES (${employee.updateEmployee}, ${employee.updatedRole})`,
        function (err, results) {
            console.log(results);
        }
    );
};



module.exports = {
    viewAllEmployees,
    viewAllRoles,
    viewAllDepartments,
    addDepartment,
    addRole,
    addEmployee,
    removeEmployee,
    updateEmployeeRole,
}