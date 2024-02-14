const mysql = require('mysql2');
// Include packages needed for this application
const inquirer = require("inquirer");
// Display table in the terminal
const consoleTable = require('console.Table');

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
  inquirer
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
          viewDepartments();
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
// function to view all departments
const viewDepartments = () => {
  db.query('Select * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
};

// function to view all roles
const viewRoles = () => {
  
  db.query(
    'SELECT role.id, role.title, role.salary, department.dept_name AS department FROM role JOIN department ON role.dept_id = department.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// Function to add a department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:'
      }
    ])
    .then((answer) => {
      db.query(
        'INSERT INTO department SET ?',
        {
          dept_name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('Department added successfully ');
          startApp();
        }
      );
    });
};

// Function to add role
const addRole = () => {
  // Query to get all departments
  db.query('SELECT * FROM department', (err, Departments) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Enter the title of the role:'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'Enter the salary for this role:'
        },
        {
          name: 'deptId',
          type: 'list',
          message: 'Select the department for this role:',
          choices: Departments.map((department) => ({
            name: department.dept_name,
            value: department.id
          }))
        }
      ])
      .then((answer) => {
        db.query(
          'INSERT INTO role SET ?',
          {
            title: answer.title,
            salary: answer.salary,
            dept_id: answer.deptId
          },
          (err) => {
            if (err) throw err;
            console.log('Role added successfully!');
            startApp();
          }
        );
      });
  });
};

// Function to add an employee
const addEmployee = () => {
  //Query to get all roles
  db.query('SELECT * FROM role', (err, roles) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: 'firstName',
          type: 'input',
          message: "Enter the employee's first name:"
        },
        {
          name: 'lastName',
          type: 'input',
          message: "Enter the employee's last name:"
        },
        {
          name: 'roleId',
          type: 'list',
          message: "Select the employee's role:",
          choices: roles.map((role) => ({
            name: roles.title,
            value: role.id
          }))
        }
      ])
      .then((answer) => {
        db.query(
          'INSERT INTO employee SET ?',
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId
          },
          (err) => {
            if (err) throw err;
            console.log('Employee added succcessfully');
            startApp();
          }
        );
      });
  });
};
const updateEmployeeRole = () => {
  console.log('start')
  // Query to get all employees
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) throw err;
    console.log("this is my list of employeessssss:  ---> ", employees)
    //Query to get all roles
    db.query('SELECT * FROM role', (err, roles) => {
      if (err) throw err;
        console.log('this is my list of roles ----> ',roles)
      inquirer
        .prompt([
          {
            name: 'employeeId',
            type: 'list',
            message: 'Select the employee you want to update:',
            choices: employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id
            }))
          },
          {
            name: 'roleId',
            type: 'list',
            message: 'Select the new role for the employee:',
            choices: roles.map((role) => ({
              name: role.title,
              value: role.id
            }))
          }
        ])
        .then((answer) => {
          console.log('end')
          db.query(
            'UPDATE employee SET ? WHERE ?',
            [
              {
                role_id: answer.roleId
              },
              {
                id: answer.employeeId
              }
            ],
            (err) => {
              if (err) throw err;
              console.log('Employee role updated successfully!');
              startApp();
            }
          );
        });
    });
  });
};

// Start the application
startApp();
