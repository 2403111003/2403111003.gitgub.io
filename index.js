const images = document.querySelectorAll('.header-image img');
    let currentIndex = 0;
    let intervalId;

    function changeImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    function startImageSlider() {
        intervalId = setInterval(changeImage, 7000);
    }

    let imagesLoaded = 0;
    images.forEach(image => {
        image.addEventListener('load', () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                startImageSlider();
            }
        });
    });

    window.addEventListener('beforeunload', () => {
        clearInterval(intervalId);
    });
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const homeSection = document.querySelector('#home');
    const navHeight = nav.offsetHeight;
    if (window.scrollY > homeSection.offsetTop + homeSection.offsetHeight) {
        nav.style.top = '0';
    } else {
        nav.style.top = `-${navHeight}px`;
    }
});
