// Function to create a table row for each data item
function createTableRow(data) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td class="align-middle">
        <div>
        <img src="${data.productImage}"
            class="avatar avatar-xl me-3">
    </div>
        </td>
        <td class="align-middle">
            <div class="ps-2 py-1">
                <h6 class="mb-0 text-sm">${data.productName}</h6>
            </div>
        </td>

        <td class="align-middle">
            <p class="text-xs fw-bold mb-0">${data.trackId} <span class="copy-me"><img src="./assets/images/img/u_copy-alt.svg"> </span></p>
        </td>
        
        <td class="align-middle">
            <p class="text-xs text-center fw-bold mb-0">${data.date},${data.time}</p>
        </td>
        <td class="align-middle">
            <p class="text-xs text-center fw-bold mb-0">${data.orderType}</p>
        </td>
        
        <td class="align-middle text-center">
            <span class="text-secondary text-xs fw-bold">₹${data.totalAmount}</span>
        </td>
        <td class="align-middle text-center text-sm">
            <span class="badge px-3 py-1 badge-sm bg-${data.status === 'Delivered' ? 'success' : 'warning'}">${data.status}</span>
        </td>
        <td class="align-middle text-center text-sm">
            <span class="badge px-3 py-1 badge-sm bg-danger">${data.actions}</span>
        </td>
    `;
    row.className = `line-height-4`;
    return row;
}

// Populate the table with dynamic data by json file orders.json
var tableBody = document.querySelector('#customer-order-table tbody');

async function getData() {
    const response = await fetch('./assets/js/orders.json');
    const data = await response.json();
    return data;
}

// Function that uses getData
async function processData() {
    try {
        // pass the selected customer name here... for eg. Pragnesh Navadiya
        const selectedCustomerName = 'Pragnesh Navadiya';
        const dataArray = await getData();
        // if selected customer is in json
        const filteredDataArray = dataArray.filter(dataItem => dataItem.customer === selectedCustomerName);
        filteredDataArray.forEach(dataItem => {
            var row = createTableRow(dataItem);
            tableBody.appendChild(row);
        });

        // Initialize DataTables
        var dataTable = new DataTable(document.querySelector('#customer-order-table'), {
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

        // Find the DataTables search input element
        var searchInput = document.querySelector('.dataTables_filter input');

        // Create a new <span> element
        var additionalDiv = document.createElement('div');
        additionalDiv.className = "d-flex gap-3"
        additionalDiv.innerHTML = 
        `<div class = "border rounded rounded-2 px-2 py-1 d-flex align-items-center gap-2">
            <img src="../assets/images/img/filter-dataTable.svg">
            <p class="pb-0 mb-0"> Filter</p> 
        </div>
        
        <div class = "border rounded rounded-2 px-2 py-1 d-flex align-items-center gap-2">
            <img src="../assets/images/img/Calendar-filter-dataTable.svg">
            <p class="pb-0 mb-0"> Filter</p> 
        </div>
        
        <div class = "border rounded rounded-2 px-2 py-1 d-flex align-items-center gap-2">
            <img src="../assets/images/img/share-order-dataTable.svg">
            <p class="pb-0 mb-0"> Share</p> 
        </div>
        
        <button class = "btn btn-success rounded rounded-3 px-4 py-2">
            Create Order
        </button>
        ` ;

        
        searchInput.parentNode.className = `d-flex justify-content-center align-items-center gap-3`
        searchInput.parentNode.insertBefore(additionalDiv, searchInput.nextSibling);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call processData to initiate the data retrieval and processing
processData();

