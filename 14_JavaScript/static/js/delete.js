// variable for data file 
var UFO_table = data;

// variable to select tbody in html
var tbody = d3.select("tbody");

// variable to append row to tbody in html 
var row = tbody.append("tr");

// loop 
UFO_table.forEach((sheeple) => {
    var row = tbody.append("tr");
    Object.entries(sheeple).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
console.log(UFO_table);

// 
var button = d3.select("#filter-btn");

button.on("click", function() {
    var date_input = d3.select("#datetime");
    var date_output = date_input.property("value");

    var city_output = d3.select("#city").property("value");

    // remove all table body rows 
    d3.select("tbody").selectAll("tr").remove();

    let date_filter = UFO_table.filter(UFO_row => UFO_row.datetime === date_output);
    
    if (date_input !== "") {
        filter_data = filter_data.filter(UFO_row => UFO_row.city === city_output)
    };
    
    date_filter = date_filter.filter(UFO_row => UFO_row.city === city_output);
    console.log(date_filter);

    date_filter.forEach((sheeple) => {
        var row = tbody.append("tr");
        Object.values(sheeple).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
