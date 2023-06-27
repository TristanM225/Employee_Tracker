const mysql = require('mysql2');
const express = require('express');
// require('dotenv').config();
const inquirer = require('inquirer');

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