
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
