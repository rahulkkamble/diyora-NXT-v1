// Your dynamic data
var dynamicData = [
    {
        customer: "Deepak Kapri",
        productName: "inina bridal solitaire Ring",
        productImage: "https://img.icons8.com/arcade/64/diamond-ring.png",
        date: "04-09-23",
        status: "Delivered",
        totalAmount: 146660,
    },
    {
        customer: "Divine Khatri",
        productName: "inina bridal solitaire Ring",
        productImage: "https://img.icons8.com/ios/50/ring-front-view.png",
        date: "05-09-23",
        status: "Pending",
        totalAmount: 246660,
    },
    {
        customer: "Magenta Maria",
        productName: "inina bridal solitaire Ring",
        productImage: "https://img.icons8.com/officel/16/ring-front-view.png",
        date: "06-09-23",
        status: "Pending",
        totalAmount: 140000,
    },
    {
        customer: "Aman Gupta",
        productName: "inina bridal solitaire Ring",
        productImage: "https://img.icons8.com/color/48/engagement-ring--v1.png",
        date: "02-09-23",
        status: "Pending",
        totalAmount: 300000,
    },
    {
        customer: "Swati Tiwari",
        productName: "inina bridal solitaire Ring",
        productImage: "https://img.icons8.com/plasticine/100/diamond-ring.png",
        date: "07-09-23",
        status: "Pending",
        totalAmount: 45000,
    },
    // Add more data as needed
];

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

// Populate the table with dynamic data
var tableBody = document.querySelector('#recent-order-table tbody');

dynamicData.forEach(function(dataItem) {
    var row2 = createTableRow(dataItem);
    tableBody.appendChild(row2);
});

// Initialize DataTables
var dataTable = new DataTable(document.querySelector('#recent-order-table'));