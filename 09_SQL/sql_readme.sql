-- ## Background
-- Research project on employees of the corporation from the 1980s and 1990s. 

-- #### Data Modeling
-- Inspect the CSVs and sketch out an ERD of the tables. [http://www.quickdatabasediagrams.com](http://www.quickdatabasediagrams.com).

-- #### Data Engineering
-- * Use the information you have to create a table schema for each of the six CSV files. Remember to specify data types, primary keys, foreign keys, and other constraints.

-- #### Data Analysis
-- 1. each employee: employee number, last name, first name, gender, and salary.
-- 2. employees who were hired in 1986.
-- 3. manager of each department with the following information: department number, department name, the manager's employee number, last name, first name, and start and end employment dates.
-- 4. department of each employee with the following information: employee number, last name, first name, and department name.
-- 5. all employees whose first name is "Hercules" and last names begin with "B."
-- 6. all employees in the Sales department, including their employee number, last name, first name, and department name.
-- 7. all employees in the Sales and Development departments, including their employee number, last name, first name, and department name.
-- 8. descending order, list the frequency count of employee last names, i.e., how many employees share each last name.

-- ## Bonus (Optional)
-- Creeping suspicion that the dataset is fake. You surmise that your boss handed you spurious data in order to test the data engineering skills of a new employee. To confirm your hunch, you decide to take the following steps to generate a visualization of the data, with which you will confront your boss:
-- 1. Import the SQL database into Pandas. (Yes, you could read the CSVs directly in Pandas, but you are, after all, trying to prove your technical mettle.) This step may require some research. Feel free to use the code below to get started. Be sure to make any necessary modifications for your username, password, host, port, and database name:
--    ```sql
--    from sqlalchemy import create_engine
--    engine = create_engine('postgresql://localhost:5432/<your_db_name>')
--    connection = engine.connect()
--    ```
-- * Consult [SQLAlchemy documentation](https://docs.sqlalchemy.org/en/latest/core/engines.html#postgresql) for more information.
-- * If using a password, do not upload your password to your GitHub repository. See [https://www.youtube.com/watch?v=2uaTPmNvH0I](https://www.youtube.com/watch?v=2uaTPmNvH0I) and [https://martin-thoma.com/configuration-files-in-python/](https://martin-thoma.com/configuration-files-in-python/) for more information.
-- 2. Create a histogram to visualize the most common salary ranges for employees.
-- 3. Create a bar chart of average salary by title.

-- ## Epilogue
-- "Search your ID number." You look down at your badge to see that your employee ID number is 499942.

-- ## Submission
-- * Create an image file of your ERD.
-- * Create a `.sql` file of your table schemata.
-- * Create a `.sql` file of your queries.
-- * (Optional) Create a Jupyter Notebook of the bonus analysis.