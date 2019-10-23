-- sql five 
-- listing all employees first name 'Hercules' and last name beginning with 'B'
SELECT * FROM EMPLOYEES AS E
WHERE FIRST_NAME = 'Hercules' AND LAST_NAME LIKE 'B%';
