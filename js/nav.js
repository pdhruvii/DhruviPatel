const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
    }
    else{
        primaryNav.setAttribute('data-visible', false);
    }
})