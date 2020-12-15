// Get a reference to the table body
var tbody = d3.select("tbody");
var text = d3.select("#text");
// Console.log the weather data from data.js
// console.log(data);

data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

    // Assign the data from `data.js` to a descriptive variable
var filterDate = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
var button = d3.select("#filter-btn")
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = filterDate.filter(dateInput => dateInput.datetime === inputValue);

  // remove the contents and update with user input date and data
  var newRows = d3.select("tbody");
  var newRowstext = d3.select("#text");
  newRows.html("")
  filteredData.forEach((filterweather) => {
    var newRowstext = newRows.append("tr");
    Object.entries(filterweather).forEach(([key, value]) =>{
      var cell = newRowstext.append("td");
      cell.text(value);
    });
  });
};
