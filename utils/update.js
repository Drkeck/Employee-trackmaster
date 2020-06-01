const db = require('../db/connection');
const inquirer = require('inquirer');

const updateEmployeeRole = () => {
    const sqlE = `SELECT first_name, last_name, id FROM employee`;
    const sqlR = `SELECT * FROM roles`
    db.query(sqlE, function (err, rowsE) {
        if (err) throw err;

        db.query(sqlR, function (err, rowsR) {


            console.log(rowsE);
            console.log(rowsR);
            const employees = rowsE.map(employee => {
                const employeeEntry = { name: (employee.first_name + " " + employee.last_name), value: employee.id };
                return employeeEntry;
            });

            const role = rowsR.map(roles => {
                const rolesEntry = { name: roles.title, value: roles.id};
                return rolesEntry;
            })

            inquirer.prompt(
                [
                    {
                        type: "list",
                        name: "Employed",
                        message: "which employee would you like to update?",
                        choices: employees
                    },
                    {
                        type: "list",
                        name: "Roles",
                        message: "What roll would you like to change them to?",
                        choices: role
                    }
                ]
            )
            .then(answer => {
                console.log(answer);
                const updateSql = 'UPDATE employee SET roles_id = ? WHERE id = ?';
                const params = [answer.Roles, answer.employees];

                db.query(updateSql, params, (err) => {
                    if (err) throw err;
                    console.log(`

                    =====================
                    Updated Employee Role
                    =====================

                    `)
                    return;
                })
            })
        })
    })

}

const updateEmployeeManager = () => {

}

module.exports = { updateEmployeeRole, updateEmployeeManager };