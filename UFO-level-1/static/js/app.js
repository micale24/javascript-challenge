// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //Button function to filter search
  d3.selectAll("button").on("click", function handleChange() {
    // var inputText = d3.select("#text");
    var text = d3.select("#text");
    var userInput = d3.event.target.value.select("#text");

  // var filterDate = userInput;
      console.log(userInput)
  //  output.text(filterDate);
      text.on("change", handleChange);
    
  });
 

// Function to handle input change










// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value
//   ul = document.getElementById("list-group");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }