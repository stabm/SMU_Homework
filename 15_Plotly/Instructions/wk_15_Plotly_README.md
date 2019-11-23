# Week 15-Interactive-Visualizations-and-Dashboards 
## Objectives
* Use Plotly to create the fundamental charts: Box, scatter, bar, pie, and line plots.
* Use Plotly's `layout` object to customize the appearance of their charts.
* Annotate charts with labels; text; and hover info.
* Create and manipulate advanced Plotly charts.
* Create bubble charts to visualize three-dimensional data.
* Use Flask to serve data to a Plotly frontend.

### Why would I use Plotly instead of Matplotlib or another library?
* While Plotly.js is not necessarily "better" than Matplotlib or another plotting library, it is useful for a variety of reasons! Plotly is also incredibly popular in the data community.

* Plotly.js uses both D3.js and WebGL to render graphics, works with JSON schema, and supports a large variety of map charts, including basic, statistical, financial, and scientific!


### **Additional Resources**  
* [Plotly.js Getting Started Guide](https://plot.ly/javascript/getting-started/)



# 15.1 Lesson Plan - Introduction to Plotly.js
* Students will be able to use arrow functions, `.map()`, and `forEach()` for data manipulation.

* Students will learn to use Plotly to create the fundamental charts: Box, scatter, bar, pie, and line plots.

* Students will use Plotly's `layout` object to customize the appearance of their charts.

* Students will annotate charts with labels; text; and hover info.


* 01-Evr_ES6  
* 02-Ins_Basic_Plots  
* 03-Stu_First_Chart  
* 04-Ins_Multi_Trace  
* 05-Stu_Multi_Trace  
* 06-Ins_Sort_Slice  
* 07-Stu_HBar  
* 08-Stu_Scatter  


# 15.2 Lesson Plan - Plotly Advanced Charts
* Students should be able to successfully manipulate their charts through dropdown events.
* Students should be able to successfully manipulate their charts through button events
* Students should be able to successfully manipulate their charts through click events.
* Students should be able to successfully use Plotly.restyle.


* 01-Ins_Dropdown_Events  
* 02-Stu_Dropdown_Events  
* 03-Ins_D3_JSON  
* 04-Stu_Stocks  
* 05-Stu_Stocks_Dynamic  
* 06-Stu_Stocks_CandleStick  
* 07-Stu_Stocks_Rolling_Avg  
* 08-Stu_Stocks_Report  


# 15.3 Thanks a Plot!
* Students will be able to use Flask to render a Plotly visualization to the browser.

* Students will use Flask to serve data to a Plotly frontend.


* 01-Ins_Basic_Flask_Plotly  
* 02-Stu_Song_Lyrics  
* 03-Ins_Fullstack_Flask_Plotly  
* 04-Stu_Bigfoot  
* 05-Evr_Flask_Requests  
* 06_Ins_Flask_SQLAlchemy  
* 07-Stu_Pet_Pals  
* 08-Ins_Pet_Pals_Refactor  
* 09-Evr_Pet_Pals_Heroku


# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria_by_filterforgedotcom.jpg)

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity DataSet](http://robdunnlab.com/projects/belly-button-biodiversity/).

### Before You Begin

1. Create a new repository for this project called `plotly-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Plotly challenge. Use the folder name to correspond to the challenge: **Belly_Button_Diversity**.

4. This is a full stack app so add your html, js, css, python and sqlite files.

5. Push the above changes to GitHub or GitLab.

## Step 1 - Plotly.js

Use Plotly.js to build interactive charts for your dashboard.

* Create a PIE chart that uses data from your samples route (`/samples/<sample>`) to display the top 10 samples.

  * Use `sample_values` as the values for the PIE chart.

  * Use `otu_ids` as the labels for the pie chart.

  * Use `otu_labels` as the hovertext for the chart.

  ![PIE Chart](Images/pie_chart.png)

* Create a Bubble Chart that uses data from your samples route (`/samples/<sample>`) to display each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.

  ![Bubble Chart](Images/bubble_chart.png)

* Display the sample metadata from the route `/metadata/<sample>`

  * Display each key/value pair from the metadata JSON object somewhere on the page.

* Update all of the plots any time that a new sample is selected.

* You are welcome to create any layout that you would like for your dashboard. An example dashboard page might look something like the following.

![Example Dashboard Page](Images/dashboard_part1.png)
![Example Dashboard Page](Images/dashboard_part2.png)

## Step 2 - Heroku

Deploy your Flask app to Heroku.

* You can use the provided sqlite file for the database.

* Ask your Instructor and TAs for help!

- - -

## Advanced Challenge Assignment (Optional)

The following task is completely optional and is very advanced.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the Weekly Washing Frequency obtained from the `/metadata/<sample>`route.

* You will need to modify the example gauge code to account for values ranging from 0 - 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

- - -

## Flask API

Use Flask API starter code to serve the data needed for your plots.

* Test your routes by visiting each one in the browser.

- - -

## Hints

* Don't forget to `pip install -r requirements.txt` before you start your server.

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js Documentation](https://plot.ly/javascript/) when building the plots.

- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
