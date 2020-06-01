const inquirer = require('inquirer');
const connection = require('../index');
const cTable = require('console.table')

function viewDepartments() {
    connection.query(`SELECT * FROM departments`, function(err, results) {
        if (err) throw err;

        console.table(results);
        return;
    })
}

function addDepartment () {
}

module.exports = {
    viewDepartments,
    addDepartment
}