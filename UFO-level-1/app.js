// from data.js to a variable 'tableData' 
var tableData = data;

// Get a reference to the table body from HTML
var tbody = d3.select("tbody");

// append data to our table
function fillData(dataSet) {
    //clear out the data first so we can have only the filtered. 
    tbody.html("");
    // Append the data to our table
    dataSet.forEach((dataSetRow) => {
        var row = tbody.append("tr");
        //Iterating through each row for key, value pair from our object 
       Object.entries(dataSetRow).forEach(([key, value]) => {
            // append to each cell to populate table on our index page
           var cell = row.append("td");
            cell.text(value);
        });
});
}

// Reference our filter button with the correct id matching our html file. 
function filterData() {
    var dateFilter = d3.select("#datetime").property("value");
    var tableDataFilter = tableData.filter(daterow => daterow.datetime === dateFilter);
    console.log(tableDataFilter);
    fillData(tableDataFilter);
}
// pound sign is for filtering id tag 
var button = d3.selectAll("#filter-btn");

// code learn from class folder 14/ day 3/ 
button.on("click", filterData);

fillData(tableData);


// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
//adding this link for further study note! 