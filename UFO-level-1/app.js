// from data.js
var tableData = data;

//https://www.youtube.com/watch?v=EfkbksORz-Y&feature=youtu.be
//learn from this youtube video to grab our data from "data.js" file and put data into the table to be display on our website page


// Get a reference to the table body 
var tbody = d3.select("tbody");

//console.log the UFO data from data.js
console.log(tableData);

// Use d3 to loop through 'data' and populate our table in index.html
function readData(tableData) {
tableData.forEach((ufoSighted) => {
    var row = tbody.append("tr");
    //Iterating through each row for key, value pair from our object 
    Object.defineProperties(ufoSighted).forEach(([key, value]) => {
        console.log(key, value);
        // append to each cell to populate table on our index page
        var cell = row.append("td");
        cell.text(value);
    });
});
}

// select the filter type and value 
var filterType = d3.select("#filter-type");
var filterTypeValue =d3.select("#filter-type-value");


// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
//adding this link for further study note! 

// Get a reference to the table body
//var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
//data.forEach((weatherReport) => {
//  var row = tbody.append("tr");
//  Object.entries(weatherReport).forEach(([key, value]) => {
//    var cell = row.append("td");
//    cell.text(value);
//  });
//});