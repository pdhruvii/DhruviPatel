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

//prevent scrolling when the primary navigation is open and enable scrolling when it's closed
//hide the primaryNav when the user clicks on any of its items, you can update your event listener to include a logic that hides 
//the primaryNav (for smaller sizes only, like the mobile view) when an item is clicked. 
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.hamburger');
// const navLinks = document.querySelectorAll('.primary-navigation a');
const body = document.body;

navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible') === 'true';
  primaryNav.setAttribute('data-visible', !isVisible);

  // Check if the screen size matches the media query (max-width: 40em)
  if (window.matchMedia('(max-width: 40em)').matches) {
    if (!isVisible) {
      // Disable scrolling when the primary navigation opens
      body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when the primary navigation closes
      body.style.overflow = 'auto';
    }
  }
});

// Hide primaryNav when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if the screen size matches the media query (max-width: 40em)
    if (window.matchMedia('(max-width: 40em)').matches) {
      body.style.overflow = 'auto'; // Enable scrolling when a nav link is clicked
    }
    primaryNav.setAttribute('data-visible', false);
  });
});

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