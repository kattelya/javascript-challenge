// from data.js
var tableData = data;

//https://www.youtube.com/watch?v=EfkbksORz-Y&feature=youtu.be
//learn from this youtube video to grab our data from "data.js" file and put data into the table to be display on our website page

// Get a reference to the table body 
var tbody = d3.select("tbody");


// Step 1: loop through 'data' and console.log each UFO report object 
tableData.forEach((ufoSighted) => {
    var row = tbody.append("tr");
    //Iterating through each row for key, value pair from our object 
    Object.defineProperties(ufoSighted).forEach(([key, value]) => {
        // append to each cell to populate table on our index page
        var cell = row.append("td");
        cell.text(value);
    });
});

//console.log the UFO data from data.js
console.log(tableData);