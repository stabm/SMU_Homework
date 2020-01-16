// d3.csv("test.csv").then(function(wine_data) {
//     var tbody = d3.select("tbody");
//     tbody.html("");

//     wine_data.forEach(function(appending) {
//         tbody.append("tr");
//         Object.entries(appending).forEach(function([key, value]) {
//             tbody.append("td").text(value);
//         })
//     })
// })


function buildTable(country) {
    d3.json('https://winosmall.firebaseio.com/.json').then((data) => {

        data = data.wine.slice(0, 27);
        // Use d3 to select the panel with id of `#sample-metadata`
        var tbody = d3.select("tbody");
        // Use `.html("") to clear any existing metadata
        tbody.html("");
        console.log(data)
            // Use `Object.entries` to add each key and value pair to the panel
            // Hint: Inside the loop, you will need to use d3 to append new
            // tags for each key-value in the metadata

        var filteredData = data;
        if (country !== "") {
            filteredData = data.filter(wine => wine.country === country)
        }

        // if (province !== "") {
        //     filteredData = data.filter(wine => wine.province === province)
        // }


        for (var i = 0; i < filteredData.length; i++) {
            tbody.append("tr");
            Object.entries(filteredData[i]).forEach(([key, value]) => {
                tbody.append("td").text(`${value}`);
            });
        }

    });
}

$(document).ready(function() {
    $('#filter-btn').click(function(e) {
        e.preventDefault();
        var country = $('#countryInp').val();
        buildTable(country);
    });
});

buildTable("");