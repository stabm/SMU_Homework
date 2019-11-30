function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    d3.json(`/metadata/${sample}`).then((data) => {
      var chalk = d3.select("#sample-metadata");
      chalk.html("");
      Object.entries(data).forEach(([key, value]) => {
        chalk.append("h6").text(`${key}: ${value}`);
      });
    });
    
    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

// buildMetadata(firstSample);

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/samples/${sample}`).then((data) => {
    var otuIDs = data.otu_ids
    var otuLabels = data.otu_labels
    var sampleValues = data.sample_values

    // @TODO: Build a Bubble Chart using the sample data
    tracebubble = [
      {
        x: otuIDs,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
      }}
    ];

    tracelayout = [
      {
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" }
      }];

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    tracepie = [
      {
        values: sampleValues.slice(0, 10),
        labels: otuIDs.slice(0, 10),
        hovertext: otuLabels.slice(0, 10),
        type: "pie"
      }
    ];

    layout = [
      {
        margin: {t:0, l:0}
      }
    ];


    Plotly.newPlot("pie", tracepie, layout);
    Plotly.newPlot("bubble", tracebubble, tracelayout);

})};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
console.log("hello world")