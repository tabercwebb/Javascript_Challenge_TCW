// Assign Data From Data.js to a Variable
var tableData = data;

// Select Tbody and Assign to a Variable
var tbody = d3.select("tbody");


// Create a Function to Populate Table
function populateTable(data) {

    // Clear Any Existing Table Data
    tbody.html("");

    // Loop Through Each Object in TableData
    data.forEach((tableObject) => {

        // Append a Row to the Table Body for Each Object in TableData
        var row = tbody.append("tr");

        // Loop Through Each Value in Given Object
        Object.values(tableObject).forEach((objectValue) => {

            // Append a Cell to Given Row for Each Value
            var cell = row.append("td");
            cell.text(objectValue);
        });
    });
}

// Create a Click Handler Function
function handleClick() {














}

// Create an Event Listener and Attach it and the HandleClick function to the Filter Button
d3.selectAll("#filter-btn").on("click", handleClick);

// Populate the Table Upon Opening Webpage
populateTable(tableData);