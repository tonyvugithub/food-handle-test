const navSlide = () => {
    const menuBar = document.querySelector('.menu-bar');
    const nav = document.querySelector('.nav-link');

    menuBar.addEventListener('click', () => {
        nav.classList.toggle('nav-link-active');
    });
}

navSlide();