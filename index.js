const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Include packages needed for this application
const inquirer = require("inquirer");
// Display table in the terminal
const consoleTable = require('consolle.Table');


const PORT = process.env.PORT || 3001;
const app = express();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootpass',
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);
// Start application arrow method function
const startApp = () => {
  inquierer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartment();
          break;

      case 'View all roles':
        viewRoles();
        break;

      case 'View all employees':
        viewEmployees();
        break;

      case 'Add a department':
        addDepartment();
        break;

      case 'Add a role':
        addRole();
        break;
      
      case 'Add an employee':
        addEmployee();
        break;
      
      case 'Update an employee role':
        updateEmployeeRole();
        break;

      case 'Exit':
        db.end();
        break;

      default:
        console.log(`Invalid actions: ${answer.action}`);
        break;
    }
  });
};