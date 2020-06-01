const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'TrotskY1@4',
    database: 'employee_managerDB'
});

module.exports = db;