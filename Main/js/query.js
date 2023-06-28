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
        `SELECT * FROM roles;`).then(([res]) => console.table(res));



const viewAllEmployees = () =>
    db.query(
        `SELECT * FROM employee;`).then(([res]) => console.table(res));

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
    }).then(() => init());
};
const addRole = (role) => {

    const roleRequest = [
        {
        type: 'input',
        name: 'requestedRoleName',
        message: 'What is the name of the new role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary in decimal form?'
    },
    {
        type: 'input',
        name: 'department',
        message: 'what department # does it belong to?'
    },
];
    inquirer.prompt(roleRequest)
    .then((response) => {
        const {requestedRoleName, salary, department } = response;
      const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
      const params = [requestedRoleName, salary, department ];

      return db.query(sql, params);
    })
    .then(() => {
      console.log("Role successfully added.");
    })
    .catch((error) => {
      console.error("Error adding Role:", error);
    }).then(() => init());
};

const addEmployee = () => {
    const employeeRequest = [
      {
        type: 'input',
        name: 'firstName',
        message: "Enter the employee's first name:",
      },
      {
        type: 'input',
        name: 'lastName',
        message: "Enter the employee's last name:",
      },
      {
        type: 'input',
        name: 'roleId',
        message: "Enter the employee's role ID:",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Enter the employee's manager ID:",
      },
    ];
  
    inquirer
      .prompt(employeeRequest)
      .then((response) => {
        const { firstName, lastName, roleId, managerId } = response;
        const sql =
          'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        const params = [firstName, lastName, roleId, managerId];
  
        return db.query(sql, params);
      })
      .then(() => {
        console.log('Employee successfully added.');
      })
      .catch((error) => {
        console.error('Error adding Employee:', error);
      })
      .then(() => {
        init();
      });
  };

function removeEmployee() { }

const updateEmployeeRole = () => 
    db.query(
        `SELECT * FROM employee;`).then(([res]) => console.table(res));



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