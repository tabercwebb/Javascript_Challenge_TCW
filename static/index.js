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

    // Prevent Form From Refreshing Page
    d3.event.preventDefault();

    // Select the Input Element & Get the Value Property of Given Input Element
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    // Set TableData as the Value for FilteredData, Where FilteredData is a Replacement Table
    let filteredData = tableData;

    // Check to See if a Date was Entered & Filter Data Using That Date
    if (date) {

        // Filter the TableData to Match the Input Date
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Check to See if a City was Entered & Filter Data Using That City
    if (city) {

        // Filter the TableData to Match the Input City
        filteredData = filteredData.filter(row => row.city === city);
    }

    // Check to See if a State was Entered & Filter Data Using That State
    if (state) {

        // Filter the TableData to Match the Input State
        filteredData = filteredData.filter(row => row.state === state);
    }

    // Check to See if a Country was Entered & Filter Data Using That Country
    if (country) {

        // Filter the TableData to Match the Input Country
        filteredData = filteredData.filter(row => row.country === country);
    }

    // Check to See if a Shape was Entered & Filter Data Using That Shape
    if (shape) {

        // Filter the TableData to Match the Input Shape
        filteredData = filteredData.filter(row => row.shape === shape);
    }

    // Populate a New FilteredData Table
    populateTable(filteredData);
}

// Create an Event Listener and Attach it and the HandleClick function to the Filter Button
d3.selectAll("#filter-btn").on("click", handleClick);

// Populate the Table Upon Opening Webpage
populateTable(tableData);