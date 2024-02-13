-- Seeds for department table
INSERT INTO department (dept_name) VALUES
('Sales'),
('Marketing'),
('Finance'),
('Human Resources'),
('IT');

-- Seeds for role table
INSERT INTO role (title, salary, dept_id) VALUES
('Sales Manager', 60000, 1),
('Marketing Coordination', 45000, 2),
('Finance Analyst', 55000, 3),
('HR Specialist', 50000, 4),
('IT Technician', 48000, 5);

-- Seed for employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, NULL),
('Emily', 'William', 4, 1),
('David', 'Brown', 5, 3),
('Jennifer', 'Miller', 1, 4),
('Christopher', 'Davis', 2, NULL),
('Jessica', 'Wilson', 3, 2),
('Matthew', 'Moore', 4, 3),
('Amanda', 'Taylor', 5, NULL);

