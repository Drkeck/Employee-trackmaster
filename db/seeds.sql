INSERT INTO department (dep_name)
VALUES
    ('TEST DEPARTMENT');

INSERT INTO role (title, salery, dep_id)
VALUES
    ('test role', 120000, 1);

INSERT INTO employee (first_name, last_name, role_id, dep_id)
VALUES
    ('alex', 'keckley', 1, 1);