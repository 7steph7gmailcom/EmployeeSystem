DROP DATABASE IF EXISTS Employee_db;

CREATE DATABASE Employee_db

CREATE TABLE department( 
    id INT PRIMARY KEY, 
    name VARCHAR(30),
    PRIMARY KEY (dept_id)
);


CREATE TABLE employee( 
    id INT PRIMARY KEY, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT,
    PRIMARY KEY (emp_id),
    FOREIGN KEY (emp_role_id) REFERENCES company_role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
);

CREATE TABLE company_role( 
    role_id INT, 
    title VARCHAR(40), 
    salary DECIMAL, 
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);