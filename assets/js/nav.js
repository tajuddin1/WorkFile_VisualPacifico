document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const headergap = document.getElementById('headerGap');
    if (window.scrollY > 100) {
        navbar.classList.add('fixed-top');
        headergap.classList.add('d-block');
        if(navbar.classList.contains('light')){
            navbar.classList.remove('nav-transparent-light');
        }else if(navbar.classList.contains('dark')){
            navbar.classList.remove('nav-transparent-dark');
        }
    } else if (window.scrollY === 0) {
        navbar.classList.remove('fixed-top');
        headergap.classList.remove('d-block');
        navbar.classList.remove('header-sticky');
        navbar.classList.add('sub-nav');
        if(navbar.classList.contains('light')){
            navbar.classList.add('nav-transparent-light');
        }else if(navbar.classList.contains('dark')){
            navbar.classList.add('nav-transparent-dark');
        }
    }
    if (window.scrollY > 60) {
        navbar.classList.add('header-sticky');
    }
    if (window.scrollY > 5) {
        navbar.classList.remove('sub-nav');
    }
});

const offcanvasElement = document.getElementById('offcanvasNavbar');

offcanvasElement.addEventListener('show.bs.offcanvas', function (event) {
    const toggleButton = event.relatedTarget; 
    const navbar = document.getElementById('navbar');
    toggleButton.classList.add('on');
    navbar.classList.add('offcanvas-show');
});

offcanvasElement.addEventListener('hide.bs.offcanvas', function () {
    const toggleButton = document.querySelector('[data-bs-target="#offcanvasNavbar"]');
    const navbar = document.getElementById('navbar');
    toggleButton.classList.remove('on');
    navbar.classList.remove('offcanvas-show');
});