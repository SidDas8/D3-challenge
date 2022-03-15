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