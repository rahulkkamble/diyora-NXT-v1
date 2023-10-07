window.addEventListener('load', function() {
    // Your JavaScript code to be executed when all page resources have finished loading goes here
    console.log('All page resources have finished loading.');
    // You can place your code here.


    const listIcons = document.querySelectorAll(".list-icon");
    // const listIconImg = document.querySelectorAll(".list-icon img");

    listIcons.forEach(listIcon => {
        // console.log(listIcon);
        listIcon.addEventListener("click", listIcon => {
            console.log(listIcon)
        })
    })
    // console.log(listIcons);
  });
  