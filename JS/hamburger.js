const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const close_icon = document.querySelector('.close');
const hamburger_container = document.getElementById('hamburger-container');
const home_image = document.getElementById('home-image');

hamburger.addEventListener('click', () => {
    nav.classList.add('nav-active');
    // Display the close icon
    close_icon.classList.add('close-active');
    // Hide the hamburger icon
    hamburger.classList.add('hamburger-hide');

    // change header styling
    hamburger_container.style.zIndex = '2'
    hamburger_container.style.backgroundColor = '#fff';
    hamburger_container.style.maxWidth = '100%';

    // Change Home Image styling
    home_image.classList.remove('cit-video-wrap');

    // Body overflow on for the fullscreen effect
    document.body.style.overflow = 'hidden';
})

close_icon.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    close_icon.classList.remove('close-active');
    hamburger.classList.remove('hamburger-hide');
    hamburger_container.removeAttribute('style');
    
    // Body overflow remove
    document.body.removeAttribute('style');

    // Change Home Image styling
    home_image.classList.add('cit-video-wrap');
})

