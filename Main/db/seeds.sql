USE tracker_db;

INSERT INTO department (department_name)
VALUES
('Sales'),
('Legal'),
('Finance'),
('HR'),
('Marketing'),
('Technology');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jesse', 'Pinkman', 2, NULL),
('Walter', 'White', 1, 1),
('Peewee', 'Hermit', 3, NULL),
('Mickey', 'Mouse', 5, 5),
('Minnie', 'Mouse', 4, NULL),
('Goofy', 'Dog', 6, 6);

INSERT INTO roles (title, salary, deparment_id)
VALUES
('Sale Man', 100000, 1),
('Lawyer', 10000, 2),
('Accountant', 30000, 3),
('HR Director', 50000, 4),
('Marketing Director', 40000, 5),
('Developer', 60000, 6);