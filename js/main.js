/*===========Sections Active Link===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });
}

/*===========Typed.js Automated Text Home Catch Phrase===========*/
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.automated-text', {
        strings: [
            '<span style="color: #c3073f;">ideas into reality.</span>',
        ],
        typeSpeed: 75,
        backSpeed: 75,
        backDelay: 500,
        loop: true,
        smartBackspace: true,
        cursorChar: '<span style="color: #c3073f;">|</span>',
    });
});

/*===========Typed.js Automated Text for About Me Tag===========*/
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.about-automated-text', {
        strings: [
            '<span style="color: #c3073f;">New Grad Roles for 2024!</span>',
        ],
        typeSpeed: 75,
        backSpeed: 75,
        backDelay: 500,
        loop: true,
        smartBackspace: true,
        cursorChar: '<span style="color: #c3073f;">|</span>',
    });
});


// Get the current window width
var windowWidth = window.innerWidth;

// Log the window width to the console
console.log("Window width: " + windowWidth + " pixels");
