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

// 2. 서비스 섹션: 클릭하면 이미지 교체되는 로직
const serviceItems = document.querySelectorAll('.service-item');
const serviceTargetImg = document.querySelector('#target-service-img');

serviceItems.forEach(function(item) {
    item.addEventListener('click', function() {
        serviceItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        const newImg = item.getAttribute('data-img');
        gsap.to(serviceTargetImg, {
            opacity: 0,
            duration: 0.2,
            onComplete: function() {
                serviceTargetImg.setAttribute('src', newImg);
                gsap.to(serviceTargetImg, { opacity: 1, duration: 0.4 });
            }
        });
    });
});

// 3. 프로세스 섹션: 클릭하면 확장되는 로직
const processBoxes = document.querySelectorAll('.process-box');
processBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        processBoxes.forEach(el => el.classList.remove('active'));
        box.classList.add('active');
    });
});

// 4. 스크롤할 때 프로젝트 카드가 나타나는 효과
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

// 5. 상단 메뉴 클릭 시 부드럽게 이동
const links = document.querySelectorAll('.nav-menu a, .btn-top, .btn-top-small');
links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === "#") return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: targetSection, offsetY: 50 },
                ease: "power3.inOut"
            });
        }
    });
});

// 6. 배지 둥둥 떠다니는 애니메이션 (강화 버전)
const badges = document.querySelectorAll('.img-badge');
badges.forEach(function(badge, index) {
    const floating = gsap.to(badge, {
        y: index % 2 === 0 ? 12 : -12,
        duration: 2 + (index * 0.4),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    badge.addEventListener('mouseenter', function() {
        floating.pause();
    });

    badge.addEventListener('mouseleave', function() {
        floating.resume();
    });
});

// 7. 캠퍼스 라이프 Swiper 설정
const campusSwiper = new Swiper('.campus-swiper', {
    slidesPerView: 2, // 기본 (모바일)
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // 화면 너비가 768px 이상일 때
        768: {
            slidesPerView: 4,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
            slidesPerView: 6,
        },
    },
});
