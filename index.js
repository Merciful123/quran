// // Wait for the HTML document to be fully loaded before executing the script
// document.addEventListener("DOMContentLoaded", function () {
//   // Select all <td> elements in the table with class 'analysis-table'
//   var tdElements = document.querySelectorAll(".analysis-table td");

//   // Loop through each <td> element and log its text content (the value)
//   tdElements.forEach(function (td) {
//     console.log(td.textContent);
//   });
    
// });


// Wait for the HTML document to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the table body
    var tbody = document.querySelector('.analysis-table tbody');

    // Get all rows in the table body
    var rows = tbody.querySelectorAll('tr');

    // Initialize an array to store the result
    var dataArray = [];

    // Loop through each row
    rows.forEach(function (row) {
        // Get all cells in the row
        var cells = row.querySelectorAll('td');

        // Create an object to store data for the current row
        var rowData = {
            chapterIndex: cells[0].textContent,
            chapterName: cells[1].textContent,
            verses: cells[2].textContent,
            words: cells[3].textContent,
            chars: cells[4].textContent
        };

        // Add the object to the result array
        dataArray.push(rowData);
    });

    // Log the resulting array of objects
    console.log(dataArray);
});
