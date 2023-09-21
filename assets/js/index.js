// Get references to the modal and the link that triggers it
const modal = document.getElementById("addCustomerModal");
const addCustomerBtn = document.getElementById("addCustomerBtn");

// Function to open the modal
function openModal() {
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Attach event listener to the link
addCustomerBtn.addEventListener("click", openModal);

// Close the modal when the user clicks anywhere outside it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// for address toggle
document.getElementById("toggleAddress").addEventListener("change", function () {
    const addressFields = document.getElementById("addressFields");
    if (this.checked) {
        addressFields.style.display = "block";
    } else {
        addressFields.style.display = "none";
    }
});
