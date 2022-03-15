// Step 1: Set up our chart //

// SVG Dimensions
var svgWidth = 960;
var svgHeight = 500;

// Margins
var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

// Chart dimensions
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// Retrieve data from the CSV file and execute everything below
d3.csv("D3_data_journalism/data/data.csv").then(function(csvdata) {
    console.log(csvdata)

    // Parse data as number
    csvdata.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    // Scales for x and y axis
    var xScale = d3.scaleLinear()
    .domain([d3.min(csvdata, x => x.poverty), d3.max(csvdata, x => x.poverty)])
    .range([0, width]);

    var yScale = d3.scaleLinear()
    .domain([d3.min(csvdata, x => x.healthcare), d3.max(csvdata, x => x.healthcare)])
    .range([height, 0]);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    // Append x axis
    var xAxis = chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    // Append y axis
    yAxis = chartGroup.append("g")
    .call(leftAxis);

    // Append initial circles
    var circlesGroup = chartGroup.selectAll("circle")
    .data(csvdata)
    .enter()
    .append("circle")
    .attr("cx", x => xScale(x.poverty))
    .attr("cy", y => yScale(y.healthcare))
    .attr("r", 10)
    .attr("fill", "pink")
    .attr("opacity", ".5");

});