window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const homeSection = document.querySelector('#home');
    const navHeight = nav.offsetHeight; // 네비게이션 바의 높이
    
    // 현재 스크롤 위치가 home 섹션을 지나쳤을 때
    if (window.scrollY > homeSection.offsetTop + homeSection.offsetHeight) {
        nav.style.top = '0'; // 네비게이션 바를 화면 상단에 고정
    } else {
        nav.style.top = `-${navHeight}px`; // 네비게이션 바를 화면 밖으로 이동
    }
});
// 이미지를 배열로 가져옵니다.
const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg"
  ];
  
  // 이미지 슬라이더 요소를 가져옵니다.
  const imageSlider = document.querySelector('.header-image');
  
  let currentIndex = 0;
  
  // 이미지 변경 함수
  function changeImage() {
    // 다음 이미지의 인덱스로 이동합니다.
    currentIndex = (currentIndex + 1) % images.length;
    // 현재 이미지를 변경합니다.
    imageSlider.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
  }
  
  // 페이지 로드 후 처음 이미지를 표시합니다.
  changeImage();
  
  // 3초마다 이미지 변경 함수를 호출합니다.
  setInterval(changeImage, 3000);
  