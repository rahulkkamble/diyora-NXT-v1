// Gold Category table
// Function to create a table row for each data item
function createTableRow(data) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td class="align-middle border border-1">
            <p class="text-xs text-center ps-2 fw-bold mb-0">${data.goldNo}</p>
        </td>
        <td class="align-middle border border-1">
        <p class="text-xs ps-2 fw-bold mb-0">${data.goldCategory}</p>
        </td>
        <td class="align-middle border border-1">
            <p class="text-xs text-wrap fw-bold mb-0">${data.goldCategoryDescription}</p>
        </td>
        <td class="align-middle text-center text-sm border border-1">
            <span class="badge badge-sm"><div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" class="btn btn-success">Edit</button>
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

// modal form edit
const editFormGold = document.querySelector('.edit-category-modal .edit-form-gold');
const editFormGoldBody = document.querySelector('.edit-category-modal .edit-form-gold .form-body');
var addBtnColor = document.querySelector('.edit-category-modal .add-btn-color');
var addBtnQuality = document.querySelector('.edit-category-modal .add-btn-quality');
var addBtnAlias = document.querySelector('.edit-category-modal .add-btn-alias');
var addBtnPurity = document.querySelector('.edit-category-modal .add-btn-purity');
var addBtnRate = document.querySelector('.edit-category-modal .add-btn-rate');

addBtnColor.addEventListener('click', () => {
    const divNew = document.createElement('div');
    divNew.classList.add('mb-3','removable','position-relative');
    divNew.innerHTML = `
    <div class="row g-3 align-items-center">
        <div class="col-3">
            <label for="inputColor" class="col-form-label">Color</label>
        </div>
        <div class="col-9">
            <input type="text" id="inputColor" class="form-control"
                aria-describedby="titleHelp">
        </div>
    </div>
    <div class="remove-input-color position-absolute end-0 top-25 mt-2 me-2">
        <img width="32" height="32" src="https://img.icons8.com/color/32/cancel--v1.png" alt="cancel--v1"/>
    </div>`;
    editFormGoldBody.appendChild(divNew);
    addBtnColor.style.display = 'none';
    const removeInput = document.querySelector('.removable .remove-input-color');
    removeInput.addEventListener('click', () => {
        editFormGoldBody.removeChild(divNew);
        addBtnColor.style.display = 'block';

    });
});
addBtnQuality.addEventListener('click', () => {
    const divNew = document.createElement('div');
    divNew.classList.add('mb-3','removable','position-relative');
    divNew.innerHTML = `
    <div class="row g-3 align-items-center">
        <div class="col-3">
            <label for="inputQuality" class="col-form-label">Quality</label>
        </div>
        <div class="col-9">
            <input type="text" id="inputQuality" class="form-control"
                aria-describedby="titleHelp">
        </div>
    </div>
    <div class="remove-input-quality position-absolute end-0 top-25 mt-2 me-2">
        <img width="32" height="32" src="https://img.icons8.com/color/32/cancel--v1.png" alt="cancel--v1"/>
    </div>`;
    editFormGoldBody.appendChild(divNew);
    addBtnQuality.style.display = 'none';
    const removeInput = document.querySelector('.removable .remove-input-quality');
    removeInput.addEventListener('click', () => {
        editFormGoldBody.removeChild(divNew);
        addBtnQuality.style.display = 'block';

    });
});
addBtnAlias.addEventListener('click', () => {
    const divNew = document.createElement('div');
    divNew.classList.add('mb-3','removable','position-relative');
    divNew.innerHTML = `
    <div class="row g-3 align-items-center">
        <div class="col-3">
            <label for="inputAlias" class="col-form-label">Alias</label>
        </div>
        <div class="col-9">
            <input type="text" id="inputAlias" class="form-control"
                aria-describedby="titleHelp">
        </div>
    </div>
    <div class="remove-input-alias position-absolute end-0 top-25 mt-2 me-2">
        <img width="32" height="32" src="https://img.icons8.com/color/32/cancel--v1.png" alt="cancel--v1"/>
    </div>`;
    editFormGoldBody.appendChild(divNew);
    addBtnAlias.style.display = 'none';
    const removeInput = document.querySelector('.removable .remove-input-alias');
    removeInput.addEventListener('click', () => {
        editFormGoldBody.removeChild(divNew);
        addBtnAlias.style.display = 'block';

    });
});
addBtnPurity.addEventListener('click', () => {
    const divNew = document.createElement('div');
    divNew.classList.add('mb-3','removable','position-relative');
    divNew.innerHTML = `
    <div class="row g-3 align-items-center">
        <div class="col-3">
            <label for="inputPurity" class="col-form-label">Purity</label>
        </div>
        <div class="col-9">
            <input type="text" id="inputPurity" class="form-control"
                aria-describedby="titleHelp">
        </div>
    </div>
    <div class="remove-input-purity position-absolute end-0 top-25 mt-2 me-2">
        <img width="32" height="32" src="https://img.icons8.com/color/32/cancel--v1.png" alt="cancel--v1"/>
    </div>`;
    editFormGoldBody.appendChild(divNew);
    addBtnPurity.style.display = 'none';
    const removeInput = document.querySelector('.removable .remove-input-purity');
    removeInput.addEventListener('click', () => {
        editFormGoldBody.removeChild(divNew);
        addBtnPurity.style.display = 'block';

    });
});
addBtnRate.addEventListener('click', () => {
    const divNew = document.createElement('div');
    divNew.classList.add('mb-3','removable','position-relative');
    divNew.innerHTML = `
    <div class="row g-3 align-items-center">
        <div class="col-3">
            <label for="inputRate" class="col-form-label">Rate & Markup</label>
        </div>
        <div class="col-9">
            <input type="text" id="inputRate" class="form-control"
                aria-describedby="titleHelp">
        </div>
    </div>
    <div class="remove-input-rate position-absolute end-0 top-25 mt-2 me-2">
        <img width="32" height="32" src="https://img.icons8.com/color/32/cancel--v1.png" alt="cancel--v1"/>
    </div>`;
    editFormGoldBody.appendChild(divNew);
    addBtnRate.style.display = 'none';
    const removeInput = document.querySelector('.removable .remove-input-rate');
    removeInput.addEventListener('click', () => {
        editFormGoldBody.removeChild(divNew);
        addBtnRate.style.display = 'block';
    });
});
