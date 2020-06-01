const db = require('../db/connection');
const inquirer = require('inquirer');

const addDepartment = () => {
    inquirer.prompt(
        [
            {
                type: "text",
                name: "Name",
                message: "What department do you wish to open",
                validate: (dep_name) => {
                    if (!dep_name) {
                        return false;
                    }
                    return true;
                }
            }
        ]
    )
    .then((ans) => {
        console.log(ans.Name);
        const sql = `INSERT INTO department (department_name)
                    VALUES (?)`
        const params = [ans.Name]
        db.query(sql, params, function(err, rows) {
            if (err) throw err;
            console.log(`
            ================
            Department added
            ================

            `);
            return rows;
        })
    })
    
};

const addRole = () => {
    inquirer.prompt(
        [
            {
                type: "text",
                name: "title",
                message: "What Role do you wish to add",
                validate: (role_title) => {
                    if (!role_title) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "salary",
                message: "How much does this role make? (example: 120000 is = 120,000)",
            },
            {
                type: "number",
                name: "department",
                message: "what department id dose this role fall under?"
            }
        ]
    )
    .then((ans) => {
        console.log(ans.title, ans.salary, ans.department);
        const sql = `INSERT INTO roles (title, salary, department_id)
                    VALUES (?,?,?)`
        const params = [ans.title, ans.salary, ans.department]
        db.query(sql, params, function(err, rows) {
            if (err) throw err;
            console.log(`
            ==========
            role added
            ==========
            `);
            return rows;
        })
    })
    
};

const addEmployee = () => {
    inquirer.prompt(
        [
            {
                type: "text",
                name: "firstName",
                message: "What is an employee's first name?",
                validate: (firstName) => {
                    if (!firstName) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "text",
                name: "lastName",
                message: "What is the employee's last name?",
                validate: (lastName) => {
                    if (!lastName) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "manager",
                message: "Who's this employee's manager by manager ID?",
            },
            {
                type: "text",
                name: "roleID",
                message: "What Role Id does this employee have?"
            }
        ]
    )
    .then((ans) => {
        console.log(ans.firstName, ans.lastName, ans.manager, ans.roleID);
        const sql = `INSERT INTO employee (first_name, last_name, manager_id, role_id)
                    VALUES (?,?,?,?)`
        const params = [ans.firstName, ans.lastName, ans.manager, ans.roleID];
        db.query(sql, params, function(err, rows) {
            if (err) throw err;
            console.log(`
            ==========
            role added
            ==========
            `);
            return rows;
        })
    })
    
};


module.exports = {
    addDepartment,
    addRole,
    addEmployee
}