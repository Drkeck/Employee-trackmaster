CREATE TABLE department (
    dep_id INTEGER PRIMARY KEY,
    dep_name VARCHAR(30)
);

CREATE TABLE role (
    role_id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    dep_id INTEGER UNSIGNED,
    CONSTRAINT fk_depID FOREIGN KEY (dep_id) REFERENCES department(dep_id) 
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED
    dep_id INTEGER UNSIGNED
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(role_id),
    CONSTRAINT fk_dep FOREIGN KEY (dep_id) REFERENCES department(dep_id)
);