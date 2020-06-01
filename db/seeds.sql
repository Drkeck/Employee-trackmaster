 INSERT INTO department (department_name)
VALUES
    ('TEST DEPARTMENT');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('test role', 120000, 1);

INSERT INTO employee (first_name, last_name, manager_id, roles_id)
VALUES
    ('alex', 'keckley', NULL , 1);