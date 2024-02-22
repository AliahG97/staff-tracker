# Staff-Tracker

## Description
The staff track is a tool made with node.js, inquirer and mySQL. It helps companies keep track of their employees easily by letting them see and control departments, roles and workers. It's made to be simple for people who aren't tech experts to use. Instead of doing everything manually, like checking info or adding new employees, the staff tracker intergrates user inputs automatically via interactive menus. 

## Table of contents
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Features](#features)
- [Usage](#usage)
- [credits](#credits)
- [License](#license)
- [Contributing](#contributing)


## Installation
1. Copy and paste repo in terminal
2. Git clone https://github.com/AliahG97/staff-tracker.git
3. Run "npm install" to install the necessary dependencies, including inquirer version 8.2.4.
4. Set up your mySQL database by importing the provided schema and seeds files.
5. Update the database connection details (PORT) in the application code.

## Screenshot
![ReadMe Gen Screenshot](./utils/assets/images/README.md-screenshot2.gif) https://aliahg97.github.io/staff-tracker/


## Features

1. View All Departments: Users can see a format playing department names and their corresponding IDs.

2. View All Roles: Users are presented with a table showing job titles, role Ids, the department each role belongs to and the salary for each role.

3. View All Employees:Users can view a formatted table containing employee data, including employee ID's, first name, last name, job title, departments, salaries and their manager.

4. Add a Department: Users are prompted to enter the name of a new department and upon submission it is added to the database. 

5. Add a Role: Users can add a new role by providing the name, salary and department for the role the entered information is then stored in the database.

6. Add an Employee: Users are prompted to input the first name, last name, role and manager of a new employee. once entered the employee's information is added to the database.

7. Update an Employee Role: Users Can select an employee to update and choose a new role for them. The application. the application then updates the employees role in the database.


## Usage
This app is ideal for employer or manger who wants to efficiently track and and update their staff roster information in the companies database.

## Credits
Aliah Guerra (https://github.com/AliahG97)

## License
Creative Commons License
by Aliah Guerra2024. Confidential and Proprietary. All Rights Reserved.

## Contributing
- Add start dates and tenure of employees to easily see who should be considered for promotion to manager roles, and get salary increases.

## Testing
1. Cd to project file
2. Npm install
3. Node index.js
4. Select a menu action
5. Answer all questions prompted
5. If new data was added or updated, return to view all (employee, departments or roles) to ensure the new date was added successfully



