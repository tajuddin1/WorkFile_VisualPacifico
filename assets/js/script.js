

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    const carousel = document.getElementById('carouselSlider');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        ride: 'carousel',
        interval: 5000,
    });
    function playVideoAndPauseCarousel() {
        video.currentTime = 0;
        video.play();
        carouselInstance.pause();
    }
    video.addEventListener('ended', function () {
        carouselInstance.next(); 
    });
    carousel.addEventListener('slid.bs.carousel', function () {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        if (activeSlide.id === 'firstSlide') {
            playVideoAndPauseCarousel();
        }
    });
    carousel.addEventListener('slide.bs.carousel', function (e) {
        if (e.to === 0) { 
            playVideoAndPauseCarousel(); 
        }
    });
    if (carousel.querySelector('.carousel-item.active').id === 'firstSlide') {
        playVideoAndPauseCarousel();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".portfolio-grid");
    const items = document.querySelectorAll(".portfolio-card");
    const gap = 15;
    function arrangeItems() {
        const screenWidth = window.innerWidth;
        let columns;
        if (screenWidth > 1024) {
            columns = 3; 
        } else if (screenWidth > 481) {
            columns = 2;
        } else {
            columns = 1;
        }
        const columnHeights = Array(columns).fill(0);
        items.forEach((item, index) => {
            const columnIndex = index % columns;
            const x = columnIndex * (gallery.clientWidth / columns);
            const y = columnHeights[columnIndex];
            item.style.transform = `translate(${x}px, ${y}px)`;
            columnHeights[columnIndex] += item.offsetHeight + gap;
        });
        gallery.style.height = `${Math.max(...columnHeights)}px`;
    };
    arrangeItems();
    window.addEventListener("resize", arrangeItems);
});


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-list .tabs-nav-item');
    const contentBlocks = document.querySelectorAll('.content-block');
    const currentNumberWrapper = document.querySelector('.current_number'); 
    function updateTabOnScroll() {
        let currentIndex = 0;
        const lastContentBlockIndex = contentBlocks.length - 1;
        contentBlocks.forEach(function (block, index) {
            const rect = block.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentIndex = index;
            }
        });
        if (contentBlocks[lastContentBlockIndex].getBoundingClientRect().bottom <= window.innerHeight) {
            currentIndex = lastContentBlockIndex;
        }
        if (contentBlocks[0].getBoundingClientRect().top >= 0) {
            currentIndex = 0;
        }
        tabs.forEach(function (tab, index) {
            tab.classList.remove('active');
            if (index === currentIndex) {
                tab.classList.add('active');
            }
        });
        if (currentIndex === 0) {
            currentNumberWrapper.style.transform = 'translateY(0%)';
        } else if (currentIndex === 1) {
            currentNumberWrapper.style.transform = 'translateY(-100%)';
        } else if (currentIndex === 2) {
            currentNumberWrapper.style.transform = 'translateY(-200%)';
        }
    }
    updateTabOnScroll();
    window.addEventListener('scroll', updateTabOnScroll);
});
