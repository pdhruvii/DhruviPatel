/*===========Typed.js Automated Text Home Catch Phrase===========*/
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.automated-text', {
        strings: [
            '<span style="color: #c3073f;">ideas into reality.</span>',
        ],
        typeSpeed: 75,
        backSpeed: 85,
        backDelay: 500,
        loop: true,
        smartBackspace: true,
        cursorChar: '<span style="color: #c3073f;">|</span>',
    });
});

/*===========Typed.js Automated Text for About Me Tag===========*/
// document.addEventListener('DOMContentLoaded', function () {
//     const typed = new Typed('.about-automated-text', {
//         strings: [
//             '<span style="color: #c3073f;">New Grad Roles for 2024!</span>',
//         ],
//         typeSpeed: 75,
//         backSpeed: 75,
//         backDelay: 500,
//         loop: true,
//         smartBackspace: true,
//         cursorChar: '<span style="color: #c3073f;">|</span>',
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const techElements = document.querySelectorAll('.technologies');
    techElements.forEach(element => {
        element.classList.add('cycle-colors');
    });
});


function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    // Handle click event on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            var menu = document.getElementById('nav-menu');
            menu.classList.remove('show'); // Hide menu after click (for mobile view)
        });
    });

    // Handle scroll event to update active link
    document.addEventListener('scroll', function() {
        sections.forEach(section => {
            var position = section.getBoundingClientRect();
            var id = section.getAttribute('id');

            if (position.top <= 0 && position.bottom > 0) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
