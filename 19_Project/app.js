d3.json('https://winosmall.firebaseio.com/.json', function(error, data) {
    //use data here
})

function buildCharts(sample) {
    d3.json(`https://winosmall.firebaseio.com/.json`).then((data) => {
        const points = data.points;
        const price = data.price;
        const variety = data.variety;


        var pieData = [{
            values: variety,
            labels: points,
            hovertext: price,
            hoverinfo: "hovertext",
            type: "pie"
        }];

        var pieLayout = {
            margin: { t: 0, l: 0 }
        };

        Plotly.plot("pie", pieData, pieLayout);
    });
}

/// guy

function buildTable(country) {
    d3.json('https://winosmall.firebaseio.com/.json').then((data) => {
        var data = data.wine.slice(0, 27);
        var tbody = d3.select("tbody");
        tbody.html("");
        console.log(data);

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