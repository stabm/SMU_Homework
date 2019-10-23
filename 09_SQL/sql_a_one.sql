-- sql query one
-- listing employee number, last name, first name, gender, and salary 
-- joining tables employee and salaries with select columns, 
SELECT E.EMP_NO, E.LAST_NAME, E.FIRST_NAME, E.GENDER, S.SALARY 
	FROM EMPLOYEES AS E
	LEFT JOIN SALARIES AS S
	ON E.EMP_NO = S.EMP_NO 
	ORDER BY LAST_NAME ASC;
