// On after loading the page
window.addEventListener("DOMContentLoaded", function () {
    // Toggle sidebar on mobile screens
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.main-container');
    const headerNav = document.querySelector('.header-nav');
    const sidebarToggle = document.querySelector('.sidebar-toggler-icon');
    const listIcons = document.querySelectorAll('.sidebar .list-icon');
    const listIconAncher = document.querySelectorAll('.sidebar .list-icon a');

    // for icon fill
    const iconsFi = document.querySelectorAll('i.fi');
    listIconAncher.forEach( a => {
        if(a.classList.contains('active')){
            a.querySelector('i.fi').classList.add(a.querySelector('i.fi').classList.toString().split(" ")[1].replace('rr', 'sr'));
        }
    })

    let timerForSidebarOpening;
    let timerForSidebarClosing;
    let clickedOnSidebarIcon = false;

    // onclicking sidebarToggle btn
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContainer.classList.toggle('sidebar-active');
        headerNav.classList.toggle('sidebar-active');
        clickedOnSidebarIcon = true;
        this.clearInterval(timerForSidebarOpening)
        this.clearInterval(timerForSidebarClosing)
    });

    // Sidebar will take full width when mouse remains 1.3s into the sidebar area
    sidebar.addEventListener('mouseenter', () => {
        timerForSidebarOpening = this.setTimeout(() => {
            sidebar.classList.add('active');
            mainContainer.classList.add('sidebar-active');
            headerNav.classList.toggle('sidebar-active');
        }, 800);
        this.clearInterval(timerForSidebarClosing);
    });

    // Sidebar will remove width when mouse leave from the sidebar
    sidebar.addEventListener('mouseleave', () => {
        timerForSidebarClosing = this.setTimeout(() => {
            sidebar.classList.remove('active');
            mainContainer.classList.remove('sidebar-active');
            headerNav.classList.remove('sidebar-active');
        }, 500);
        if (clickedOnSidebarIcon) {
            this.clearInterval(timerForSidebarClosing)
            clickedOnSidebarIcon = false;
        }
        this.clearInterval(timerForSidebarOpening)
    });

    listIcons.forEach(listItem => {
        listItem.addEventListener('mouseover', function () {
            sidebar.classList.add('active');
            mainContainer.classList.add('sidebar-active');
            headerNav.classList.add('sidebar-active');
            clearInterval(timerForSidebarClosing);
            clearInterval(timerForSidebarOpening);
        });
    })

    listIconAncher.forEach((ancher) => {
        // click event for each ancher tag inside list-icon

        let iconFiClasses = ancher.querySelector('i.fi').classList;
        let selectedFiClass = iconFiClasses.toString().split(" ")[1];
        let filledFiClass = selectedFiClass.replace('rr', 'sr');

        ancher.addEventListener('click', (currentAncher) => {

            // removing all active classes from each ancher tag when clicked on any ancher tag
            listIconAncher.forEach(a => {
                console.log(a)
                a.classList.remove('active');
                // iconFiClasses.remove(filledFiClass);
                // iconFiClasses.add(selectedFiClass);
            });
            // add active class to currently targeted ancher tag
            ancher.classList.add('active');
            // if(ancher.classList.contains('active')){
            //     ancher.querySelector('i.fi').classList.add(filledFiClass)
            // }
            // iconFiClasses.remove(filledFiClass);


        })

        // filled the icons on hover

        ancher.addEventListener('mouseenter', (currentAncher) => {
            iconFiClasses.remove(selectedFiClass);
            iconFiClasses.add(filledFiClass);
        })
        ancher.addEventListener('mouseleave', (currentAncher) => {
            if (ancher.classList.contains('active')) {
                iconFiClasses.add(filledFiClass);
                iconFiClasses.remove(selectedFiClass);
            } else {
                iconFiClasses.add(selectedFiClass);
                iconFiClasses.remove(filledFiClass);
            }

        })
    });

    // filling solid icon after clicked





}); /* end of DOMContentLoaded */