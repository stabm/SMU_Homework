-- sql four
-- listing employees of each department with their employee number, last name, and first name 
SELECT 
E.EMP_NO, 
E.LAST_NAME, 
E.FIRST_NAME, 
DS.DEPT_NAME 
FROM EMPLOYEES AS E
JOIN DEPT_EMP AS DE
	ON E.EMP_NO = DE.EMP_NO
JOIN DEPARTMENTS DS
	ON DE.DEPT_NO = DS.DEPT_NO
ORDER BY E.LAST_NAME; 