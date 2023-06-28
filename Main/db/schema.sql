-- need to create tables for DEPARTMENT, ROLES, EMPLOYEES, (ADD DEPARTMENT, ADD A ROLE, ADD EMPLOYEE, UPDATE EMPLOYEE ROLE)

DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

-- Creating a table for departments
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Creating a table for employees
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

-- Creating a table for roles
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT NOT NULL,
    PRIMARY KEY (id)
);