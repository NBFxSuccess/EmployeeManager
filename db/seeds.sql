INSERT INTO department (name)
VALUES  (""),
        (""),
        ("");

INSERT INTO role (title, salary, department_id)
VALUES  ("", 100000.20, 1),
        ("", 100000.34, 2),
        ("", 100000.11, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("", "", 3, 1),
        ("", "", 1, 1),
        ("", "", 3, 4),
        ("", "", 2, 3);