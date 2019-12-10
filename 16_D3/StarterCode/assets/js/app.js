// @TODO: YOUR CODE HERE!

var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 4;
var margin = 20;
var labelArea = 110;
var tPadBot = 40;
var tPadLeft = 40;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

var circRadius;
function crGet() {
    if (width <= 530) {
      circRadius = 5;
    }
    else {
      circRadius = 10;
    }
  }
  crGet();

    svg.append("g").attr("class","xText");
    var xText = d3.select(".xText");
    xText.attr(
        "transform",
        "translate(" +
        ((width - labelArea) / 2 + labelArea) +
        ", " +
        (height - margin - tPadBot) +
        ")"
        );

    xText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

    var leftTextX = margin + tPadLeft;
    var leftTextY = (height + labelArea) / 2 - labelArea;

    svg.append("g").attr("class", "yText");
    var yText = d3.select(".yText");
    yText.attr(
    "transform",
    "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
    );

    yText
    .append("text")
    .attr("y", 26)
    .attr("data-name", "heathcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Lacks Healthcare (%)");
    d3.csv("assets/data/data.csv").then(function(data) {
    visualize(data);
    });

function visualize(theData) {
        var curX = "poverty";
        var curY = "healthcare";
        var xMin;
        var xMax;
        var yMin;
        var yMax;
        function xMinMax() {
          xMin = d3.min(theData, function(d) {
            return parseFloat(d[curX]) * 0.90;
          });
          xMax = d3.max(theData, function(d) {
            return parseFloat(d[curX]) * 1.10;
          });
        }
        function yMinMax() {
          yMin = d3.min(theData, function(d) {
            return parseFloat(d[curY]) * 0.90;
          });
          yMax = d3.max(theData, function(d) {
            return parseFloat(d[curY]) * 1.10;
          });
        }

xMinMax();
yMinMax();

var xScale = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([margin + labelArea, width - margin]);
var yScale = d3
      .scaleLinear()
      .domain([yMin, yMax])
      .range([height - margin - labelArea, margin]);
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("class", "xAxis")
      .attr("transform", "translate(0," + (height - margin - labelArea) + ")");
    svg
      .append("g")
      .call(yAxis)
      .attr("class", "xAxis")
      .attr("transform", "translate(" + (margin + labelArea) + ", 0)");

var theCircles = svg.selectAll("g theCircles").data(theData).enter();

var toolTip = d3
      .tip()
      .attr("class", "d3-tip")
      .offset([40, -60])
      .html(function(d) {
        // x key
        var theX;
        // Grab the state name.
        var theState = "<div>" + d.state + "</div>";
        // Snatch the y value's key and value.
        var theY = "<div>" + curY + ": " + d[curY] + "%</div>";
        // If the x key is poverty
          theX = "<div>" + curX + ": " + d[curX] + "%</div>";
        // Display what we capture.
        return theState + theX + theY;
      });

// Call the toolTip function.
      svg.call(toolTip);
        theCircles 
          .append("circle")
          .attr("cx", function(d) {
            return xScale(d["poverty"]);
          })
          .attr("cy", function(d){
            return yScale(d["healthcare"]);
          })
          .attr("r", 10).attr("fill", "#ADD8E6")
          .attr("class", function(d){
            return "stateCircle" + d.abbr;
          })
          .on("mouseover", function(d) {
            toolTip.show(d,this);
            d3.select(this).style("stroke", "#323232");
          })
          .on("mouseout", function(d) {
            toolTip.hide(d);
            d3.select(this).style("stroke", "#E3E3E3");
          });
        theCircles
          .append("text")
          .text(function(d) {
            return d.abbr;
          })
          .attr("dx", function(d) {
            return xScale(d[curX]);
          })
          .attr("dy", function(d) {
            return yScale(d[curY]) + 10 / 2.5;
          })
          .attr("font-size", 10)
          .attr("class", "stateText")
          .on("mouseover", function(d) {
            toolTip.show(d);
            d3.select("." + d.abbr).style("stroke", "#E3E3E3");
          });
      }
  