// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Building the table
function buildTable(data) {
    // Clear any existing data
    tbody.html('');
    // Iterate through each object in the data array
    data.forEach((dataRow) => {
        // Append one table row to the table body 
        // for each object in the array
        let row = tbody.append('tr');
        // Iterate through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Add data values to each cell in the table 
            let cell = row.append('td');
            cell.text(val);
            }
        );
    }); 
}

// Create filter function
function handleClick() {
    // call on the datetime value and set it to the variable 'date'
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // Check for a date, return data filtered on that date 
    if (date) {
        // Apply the date filter to match exactly to the 'datetime' values
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table for the filtered data using the buildTable function
    buildTable(filteredData);
}

// Code the function to run when the button with tag '#filter-btn' is clicked
d3.selectAll('#filter-btn').on('click', handleClick);

// Build the table when the page loads
buildTable(tableData);

