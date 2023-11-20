// Gold Category table
// Function to create a table row for each data item
function createTableRow(data) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td class="align-middle">
            <p class="text-xs text-center ps-2 fw-bold mb-0">${data.goldNo}</p>
        </td>
        <td class="align-middle">
        <p class="text-xs ps-2 fw-bold mb-0">${data.goldCategory}</p>
        </td>
        <td class="align-middle">
            <p class="text-xs text-wrap fw-bold mb-0">${data.goldCategoryDescription}</p>
        </td>
        <td class="align-middle text-center text-sm">
            <span class="badge badge-sm"><div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div></span>
        </td>
    `;
    return row;
}

// Populate the table with dynamic data by json file orders.json
var backupTableBody = document.querySelector('#gold-category-table tbody');

async function getData() {
    const response = await fetch('gold-informations.json');
    const data = await response.json();
    return data;
}

// Function that uses getData
async function processData2() {
    try {
        const dataArray = await getData();
        dataArray.forEach(dataItem => {
            var row = createTableRow(dataItem);
            backupTableBody.appendChild(row);
        });

        // Initialize DataTables
        var dataTable = new DataTable(document.querySelector('#gold-category-table'), {
            "pageLength": 5,
            "language": {
                "lengthMenu": "Show <select class='form-select form-select-sm'>" +
                              "<option value='5'>5</option>" +
                              "<option value='10'>10</option>" +
                              "<option value='25'>25</option>" +
                              "<option value='50'>50</option>" +
                              "<option value='-1'>All</option>" +
                              "</select> entries"
            }
        });
        const entrySelectBox = document.querySelector('div.dataTables_wrapper div.dataTables_length select');
        entrySelectBox.style.padding = '0.694rem';

    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

// Call processData to initiate the data retrieval and processing
processData2();
