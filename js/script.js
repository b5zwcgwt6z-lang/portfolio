// [최승아 포트폴리오 스크립트]

// GSAP 플러그인 연결
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 1. 커스텀 마우스 효과
const dot = document.querySelector('.mouse-dot');
const circle = document.querySelector('.mouse-circle');

window.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(dot, { x: x, y: y, duration: 0 });
    gsap.to(circle, { x: x - 20, y: y - 20, duration: 0.15 });
});

// 2. 프로세스 섹션: 클릭하면 확장되는 로직
const processBoxes = document.querySelectorAll('.process-box');

processBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        // 모든 박스에서 active 클래스 제거
        processBoxes.forEach(function(el) {
            el.classList.remove('active');
        });
        // 클릭한 박스에만 active 클래스 추가
        box.classList.add('active');
    });
});

// 3. 스크롤할 때 프로젝트 카드가 나타나는 효과
const cards = document.querySelectorAll('.project-card');

cards.forEach(function(card) {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 4. 상단 메뉴 클릭 시 부드럽게 이동
const links = document.querySelectorAll('.nav-menu a, .btn-top');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetSection, offsetY: 50 },
            ease: "power3.inOut"
        });
    });
});
