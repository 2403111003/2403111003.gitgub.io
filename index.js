const images = document.querySelectorAll('.header-image img');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

function startImageSlider() {
    setInterval(changeImage, 7000);
}

// 이미지 로드를 기다린 후 슬라이더 시작
let imagesLoaded = 0;
images.forEach(image => {
    image.addEventListener('load', () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            startImageSlider();
        }
    });
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