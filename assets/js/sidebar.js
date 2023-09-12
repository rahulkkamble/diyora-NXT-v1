// On after loading the page
window.addEventListener("DOMContentLoaded", function () {
    // Toggle sidebar on mobile screens
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.main-container');
    const sidebarToggle = document.querySelector('.sidebar-toggler-icon');
    const listIcons = document.querySelectorAll('.sidebar .list-icon');
    
    let timerForSidebarOpening;
    let timerForSidebarClosing;
    let clickedOnSidebarIcon = false;

    // onclicking sidebarToggle btn
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContainer.classList.toggle('sidebar-active');
        clickedOnSidebarIcon = true;
        this.clearInterval(timerForSidebarOpening)
        this.clearInterval(timerForSidebarClosing)
    });
    
    // Sidebar will take full width when mouse remains 1.3s into the sidebar area
    sidebar.addEventListener('mouseenter', () => {
       timerForSidebarOpening = this.setTimeout(() => {
            sidebar.classList.add('active');
            mainContainer.classList.add('sidebar-active');
        },800);
        this.clearInterval(timerForSidebarClosing);
    });

    // Sidebar will remove width when mouse leave from the sidebar
    sidebar.addEventListener('mouseleave', () => {
        timerForSidebarClosing = this.setTimeout(() => {
            sidebar.classList.remove('active');
            mainContainer.classList.remove('sidebar-active');
        },500);
        if(clickedOnSidebarIcon){
            this.clearInterval(timerForSidebarClosing)
            clickedOnSidebarIcon = false;
        }
        this.clearInterval(timerForSidebarOpening)
    });

    listIcons.forEach( listItem => {
        listItem.addEventListener('mouseover', function (){
            sidebar.classList.add('active');
            mainContainer.classList.add('sidebar-active');
            clearInterval(timerForSidebarClosing);
            clearInterval(timerForSidebarOpening);
        });
        // listItem.addEventListener('mouseenter', () => {
        //     sidebar.classList.add('shadow--sm-inset-black');
        // });
        // listItem.addEventListener('mouseleave', () => {
        //     sidebar.classList.remove('shadow--sm-inset-black');
        // });
        // listItem.addEventListener('click', () => {
        //     sidebar.classList.add('shadow--sm-inset-black');
        // });
    })



}); /* end of DOMContentLoaded */