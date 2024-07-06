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