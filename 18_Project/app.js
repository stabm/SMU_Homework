// // variable for data file 
// // var wine_data = wine_dataframe.csv;

// var wine_data = d3.csv("wine_dataframe.csv").then(function(data) {
//     console.log(data[0]);
// });

// function pull_data(wine_data) {
//     tbody.html("");
//     console.log(wine_data);
//     wine_data.forEach(function(appending) {
//         tbody.append("tr");
//         Object.entries(appending).forEach(function([key, value]) {
//             tbody.append("td").text(value);
//         })
//     })
// }


// // d3.csv("/data/cities.csv").then(function(data) {
// //   data.forEach(function(d) {
// //     d.population = +d.population;
// //     d["land area"] = +d["land area"];
// //   });
// //   console.log(data[0]);
// // });

// // variable to select tbody in html
// var tbody = d3.select("tbody");


// // function one 
// function pull_data(wine_data) {
//     tbody.html("");
//     console.log(wine_data);
//     wine_data.forEach(function(appending) {
//         tbody.append("tr");
//         Object.entries(appending).forEach(function([key, value]) {
//             tbody.append("td").text(value);
//         })
//     })
// }


// //function two 
// function filt_data() {
//     d3.event.preventDefault();
//     var filtered_data = wine_data;
//     var date_input = d3.select("#datetime").property("value");
//     console.log(date_input);
//     if (date_input) {
//         filtered_data = filtered_data.filter(temporary_row => temporary_row.datetime === date_input);
//     }
//     pull_data(filtered_data);
//     console.log(filtered_data);
// }

// pull_data(wine_data)

// d3.selectAll("#filter-btn").on("click", filt_data)


// define what the table data is and where it comes from 

// d3.csv("wine_dataframe.csv").then(function(data) {
//     data.forEach(function(d) {
//         d.country = +d.country;
//         d.variety = +d.variety;
//     });
//     console.log(data[0]);
// });


d3.csv("test.csv").then(function(wine_data) {
    var tbody = d3.select("tbody");
    tbody.html("");
    console.log(wine_data);
    wine_data.forEach(function(appending) {
        tbody.append("tr");
        Object.entries(appending).forEach(function([key, value]) {
            tbody.append("td").text(value);
        })
    })
})



// console.log(tableData)
// console.log(tableData);
// define tbody as the tbody 
// var tbody = d3.select("tbody");
// // Add all the information from data to the table 
// tableData.forEach((sheepleReport) => {
//     var row = tbody.append("tr");
//     Object.values(sheepleReport).forEach((value) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// // define our event listener as clicking button
// var button = d3.select("#filter-btn");
// button.on("click", function() {
//     var inputValue = d3.select("#datetime").property("value");
//     var inputCity = d3.select("#city").property("value").toLowerCase();
//     // remove all rows in the table
//     d3.select("tbody").selectAll("tr").remove();
//     var filteredData = tableData;
//     if (inputValue !== "") {
//         filteredData = tableData.filter(report => report.datetime === inputValue)
//     }
//     if (inputCity !== "") {
//         filteredData = tableData.filter(report => report.city === inputCity);
//     }
//     // console.log(filteredData);
//     filteredData.forEach((sheepleReport) => {
//         var row = tbody.append("tr");
//         Object.values(sheepleReport).forEach((value) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// });