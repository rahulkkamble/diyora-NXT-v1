// ********************************************** admin-dashboard **********************************************
// backup table
// Function to create a table row for each data item
function createTableRow(data) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td class="align-middle">
            <p class="text-xs ps-2 fw-bold mb-0">${data.backupNumber}</p>
        </td>
        <td>
            <div class="d-flex ps-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">${data.backupName}</h6>
                </div>
            </div>
        </td>
        <td class="align-middle">
            <p class="text-xs fw-bold mb-0"><a class="d-flex justify-content-center align-items-center" href="https://google.com"><img width="24px" height="24px" src="https://img.icons8.com/ios/50/download--v1.png" alt="download--v1"/></a></p>
        </td>
        <td class="align-middle text-center text-sm">
            <span class="badge badge-sm"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/filled-trash.png" alt="filled-trash"/></span>
        </td>
    `;
    return row;
}

// Populate the table with dynamic data by json file orders.json
var backupTableBody = document.querySelector('#backup-table tbody');

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
        var dataTable = new DataTable(document.querySelector('#backup-table'), {
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
