SELECT first_name, last_name, manager, title, salary, department_name
FROM employee
JOIN roles ON employee.roles_id = roles.id
JOIN department ON roles.department_id = department.id;