const mysql = require('mysql2');
const express = require('express');
// require('dotenv').config();
const inquirer = require('inquirer');
const askQuery = require('./askQuery');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'CodingRules23#',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
    });
};

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
    });
};

function viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
    });
};

function addDepartment () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Please enter the name of the new DEPARTMENT',
        }
    ]).then(function (result) {
        const sql = `INSERT INTO department (department_name) VALUES (?)`; 
        const params = [result.department_name];

        db.query(sql, (err, resultQuery) => {
            if (err) {
                console.log("Error", err);
                return;
            }
            console.table(resultQuery);
        });
        viewDepartments();
    })};

    function addRole () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'Please enter the name of the new DEPARTMENT',
            }
        ]).then(function (result) {
            const sql = `INSERT INTO department (department_name) VALUES (?)`; 
            const params = [result.department_name];
    
            db.query(sql, (err, resultQuery) => {
                if (err) {
                    console.log("Error", err);
                    return;
                }
                console.table(resultQuery);
            });
            viewDepartments();
        })};

    function addEmployee () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'addDepartment', // name needs to match line 110 result.department_name
                message: 'Please enter the name of the new DEPARTMENT',
            }
        ]).then(function (result) {
            const sql = `INSERT INTO department (department_name) VALUES (?)`; 
            const params = [result.department_name];
    
            db.query(sql, (err, resultQuery) => {
                if (err) {
                    console.log("Error", err);
                    return;
                }
                console.table(resultQuery);
            });
            viewDepartments();
        })};

        function removeEmployee () {}

        function updateEmployeeRole () {}

        

    