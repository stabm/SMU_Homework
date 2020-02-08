d3.json('https://winosmall.firebaseio.com/.json', function(error, data) {})

function buildCharts(sample) {
    d3.json(`https://winosmall.firebaseio.com/.json`).then((data) => {
        const points = data.wine.map(wine => wine.points);
        const price = data.wine.map(wine => wine.price);
        const variety = data.wine.map(wine => wine.variety);

        var pieData = [{
            title: "Varieties Around the World",
            values: points,
            labels: variety,
            hovertext: price,
            hoverinfo: "hovertext",
            type: "pie"
        }];
        var pieLayout = {
            margin: { t: 0, l: -1 }
        };
        Plotly.plot("pie", pieData, pieLayout);
    });
}

function buildTable(country) {
    d3.json('https://winosmall.firebaseio.com/.json').then((data) => {
        var data = data.wine.slice(0, 27);
        var tbody = d3.select("tbody");
        tbody.html("");
        var filteredData = data;
        if (country !== "") {
            filteredData = data.filter(wine => wine.country === country)
        }
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
buildCharts();


// d3.json('https://winosmall.firebaseio.com/.json', function(error,
//     data) {

// })​

// function buildCharts(sample) {
//     d3.json(`https://winosmall.firebaseio.com/.json`).then((data) => {
//         const points = data.wine.map(wine => wine.points);
//         const price = data.wine.map(wine => wine.price);
//         const variety = data.wine.map(wine => wine.variety);​
//         var varietyCount = $.unique(products.map(function(d) { return (d.category); }));
//         alert(varietyCount.length)

//         var pieData = [{
//             values: points,
//             labels: variety,
//             hovertext: price,
//             hoverinfo: "hovertext",
//             type: "pie"
//         }];​
//         var pieLayout = {
//             margin: { t: 0, l: 0 }
//         };​
//         Plotly.plot("pie", pieData, pieLayout);

//         var svg = d3.select("svg"),
//             margin = 200,
//             width = svg.attr("width") - margin,
//             height = svg.attr("height") - margin;

//         var xScale = d3.scaleBand().range([0, width]).padding(0.4),
//             yScale = d3.scaleLinear().range([height, 0]);

//         var g = svg.append("g")
//             .attr("transform", "translate(" + 100 + "," + 100 + ")");​
//         Plotly.plot("bar", xScale, yScale);
//     });
// });
// }​
// function buildTable(country) {
//     d3.json('https://winosmall.firebaseio.com/.json').then((data) => {
//         var data = data.wine.slice(0, 27);
//         var tbody = d3.select("tbody");
//         tbody.html("");
//         // console.log(data);
//         ​
//         var filteredData = data;
//         if (country !== "") {
//             filteredData = data.filter(wine => wine.country === country)
//         }​
//         for (var i = 0; i < filteredData.length; i++) {
//             tbody.append("tr");
//             Object.entries(filteredData[i]).forEach(([key, value]) => {
//                 tbody.append("td").text(`${value}`);
//             });
//         }​
//     });
// }​

// $(document).ready(function() {
//     $('#filter-btn').click(function(e) {
//         e.preventDefault();
//         var country = $('#countryInp').val();
//         buildTable(country);
//     });
// });​
// buildTable("");
// buildCharts();