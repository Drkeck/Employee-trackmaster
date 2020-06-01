const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const {viewDepartments, addDepartments} = require('./utils/department');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'TrotskY1@4',
    database: 'employee_managerDB'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    console.log("welcome to employee taskmaster.")
    initialQuery();
});

initialQuery = () => {
    connection.query(
        `SELECT first_name, last_name, manager, title, salary, department_name
        FROM employee
        JOIN roles ON employee.roles_id = roles.id
        JOIN department ON roles.department_id = department.id;`, function(err, res) {
            if (err) throw err;

            console.table(res);

            inquirer.prompt([
                {
                    type: "list",
                    name: "initialChoices",
                    message: "What brings you here with us today?",
                    choices: [
                        "View all departments",
                        "View all roles",
                        "View all employees",
                        "Add new department",
                        "Add new roles",
                        "Add new employee",
                        "update an employee's roll"
                    ]
                }
            ])
            .then((answer) => {
                if (answer === "View all departments") {
                    viewDepartments();
                }
                if (answer === "View all roles") {
                    //function
                }
                if (answer === "view all employees") {
                    //function
                }
                if (answer === "Add new department") {
                    //f
                }
                if (answer === "Add new roles") {
                    //f
                }
                if (answer === "Add new employee") {
                    //f
                }
                if (answer === "update employee's roll") {
                    //s
                }
            })
        });
}
