
// Function to create a table row for each data item
function createTableRow(data) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td class="align-middle">
            <p class="text-xs ps-2 fw-bold mb-0">${data.customer}</p>
        </td>
        <td>
            <div class="d-flex ps-2 py-1">
                <div>
                    <img src="${data.productImage}"
                        class="avatar avatar-sm me-3">
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">${data.productName}</h6>
                </div>
            </div>
        </td>
        <td class="align-middle">
            <p class="text-xs fw-bold mb-0">${data.date}</p>
        </td>
        <td class="align-middle text-center text-sm">
            <span class="badge badge-sm bg-${data.status === 'Delivered' ? 'success' : 'warning'}">${data.status}</span>
        </td>
        <td class="align-middle text-center">
            <span class="text-secondary text-xs fw-bold">₹${data.totalAmount}</span>
        </td>
    `;
    return row;
}

// Populate the table with dynamic data by json file orders.json
var tableBody = document.querySelector('#recent-order-table tbody');

async function getData() {
    const response = await fetch('./assets/js/orders.json');
    const data = await response.json();
    return data;
}

// Function that uses getData
async function processData() {
    try {
        const dataArray = await getData();
        dataArray.forEach(dataItem => {
            var row = createTableRow(dataItem);
            tableBody.appendChild(row);
        });

        // Initialize DataTables
        var dataTable = new DataTable(document.querySelector('#recent-order-table'), {
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

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call processData to initiate the data retrieval and processing
processData();
