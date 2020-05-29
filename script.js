
let burger = document.querySelector('.burger');
let nav = document.querySelector('.hamburger');
let links = document.querySelector(".links");

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        links.classList.toggle('fade');
    })

// $(".gallery").magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery:{
//         enabled: true
//     }
// })


