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