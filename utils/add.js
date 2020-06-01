const db = require('../db/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

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
        })
    })
    return;
};

const addRole = () => {
    
};

const addEmployee = () => {

};


module.exports = {
    addDepartment,
    addRole,
    addEmployee
}