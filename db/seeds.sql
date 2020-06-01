INSERT INTO department (department_name)
VALUES
    ('Software engineering'),
    ('Server Staff'),
    ('Front office');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Programer', 70000, 1),
    ('Server manager', 100000, 2),
    ('Front desk', 50000, 3);

INSERT INTO employee (first_name, last_name, manager_id, roles_id)
VALUES
    ('Alex', 'Keckley', NULL , 1),
    ('Jason', 'Debri', 1, 1),
    ('Alison', 'Vaus', NULL, 2),
    ('Eric', 'Davon', 1, 3),
    ('Sherry', 'Thomas', 4, 3);