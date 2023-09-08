// On after loading the page
window.addEventListener("DOMContentLoaded", function () {
    // Toggle sidebar on mobile screens
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.main-container');
    const sidebarToggle = document.querySelector('.sidebar-toggler-icon');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContainer.classList.toggle('sidebar-active');
    });


    
}); /* end of DOMContentLoaded */