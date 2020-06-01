const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/connection');
const {addDepartment, addEmployee, addRole} = require('./utils/add');

db.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + db.threadId);
    console.log("welcome to employee taskmaster.");

    const sql = `SELECT first_name, last_name, manager, title, salary, department_name
    FROM employee
    JOIN roles ON employee.roles_id = roles.id
    JOIN department ON roles.department_id = department.id;`

    initializeList(sql)

});

const initializeList = (list) => {
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
                "update an employee's roll",
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

                let sql = `SELECT first_name, last_name, manager, title, salary, department_name
                FROM employee
                JOIN roles ON employee.roles_id = roles.id
                JOIN department ON roles.department_id = department.id`;

                initializeList(sql);
            }
            if (choices === "Add new department") {
                addDepartment();
            }
            if (choices === "Add new roles") {
                //f
            }
            if (choices === "Add new employee") {
                //f
            }
            if (choices === "update employee's roll") {
                //s
            }
            if (choices === "Exit") {
                console.log('goodbye');
                db.end();
            }
        })
};