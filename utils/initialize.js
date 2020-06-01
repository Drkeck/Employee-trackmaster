const db = require('../db/connection');
const inquirer = require('inquirer');
const CTable = require('console.table');
const { addDepartment, addEmployee, addRole } = require('./add');
const { updateEmployeeRole, updateEmployeeManager } = require('./update');

const sqlBaseline = `SELECT first_name, last_name, manager_id, title, salary, department_name
FROM employee
JOIN roles ON employee.roles_id = roles.id
JOIN department ON roles.department_id = department.id`

const initializeList = (list) => {
    if (!list) {
        list = sqlBaseline
    }

    db.query(list, function (err, res) {
        if (err) throw err;

        console.table(res);
        initialQuery();
    }
    )
}

function initialQuery() {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What brings you here with us today?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add new department",
                "Add new roles",
                "Add new employee",
                "Update an employee's roll",
                "Exit"
            ]
        }
    ])
        .then((answer) => {
            const { choices } = answer;

            if (choices === "View all departments") {

                console.log('this is what i could find on our departments:');

                let sql = `SELECT * FROM department`;

                initializeList(sql);
            }
            if (choices === "View all roles") {

                console.log('Here is our list of employee roles:');

                let sql = `SELECT title, salary, department_name 
                            FROM roles
                            JOIN department 
                            ON roles.department_id = department.id`;

                initializeList(sql);
            }
            if (choices === "View all employees") {

                console.log('I have the list of all our recorded employees');
                initializeList(sqlBaseline);
            }
            if (choices === "Add new department") {
                addDepartment();
            }
            if (choices === "Add new roles") {
                addRole();
            }
            if (choices === "Add new employee") {
                addEmployee();
            }
            if (choices === "Update an employee's roll") {
                updateEmployeeRole();
            }
            if (choices === "Exit") {
                console.log('goodbye');
                db.end();
            }
        })
};

module.exports = {initializeList, initialQuery}