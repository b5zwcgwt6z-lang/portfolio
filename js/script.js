// [최승아 포트폴리오 스크립트]

// 0. 프로젝트 데이터
const projectData = [
    {
        video: 'https://www.youtube.com/embed/lulHEK_Dnn8',
        img: 'images/rookiz-mockup.jpg',
        imgPosition: 'center',
        plan: 'https://www.figma.com/deck/j0h7huh52FIXXjH69xFaTl',
        git: 'https://github.com/seoyun-tech/Rookiz',
        notion: 'https://mbcdomain.notion.site/AI-OTT-33a97cee1df0804b9981f9114dcc43cd',
        site: 'https://rookiz-front.onrender.com/',
        stack: ['Figma', 'React', 'Spring Boot', 'MySQL', 'AWS'],
        contribution: '34%',
        purpose: "아이들의 성장에 맞춘 연령별 완벽 차단으로, 무분별한 알고리즘의 위협으로부터 보호하기 위해 제작한 <strong style='font-weight:900'>키즈 OTT 서비스</strong>",
        problem: 'Git 브랜치 전략 및 협업 규칙 부족으로 코드 충돌이 발생하고, 서로의 작업물이 덮어씌워지는 등 소스코드 관리의 혼선이 있었습니다.',
        solution: '각자 개인 브랜치에서 작업 후 Pull Request를 통해 리뷰를 거쳐 dev에 반영하도록 했으며 디자인 부분에서도 KRDS의 시스템을 참고해 규칙을 구축했습니다.',
    },
    {
        img: 'images/clink-logo.jpg',
        imgPosition: '0% center',
        imgScale: 1.6,
        plan: 'https://www.figma.com/deck/PXmBvzb8Rg4FfCQu5dGNEP',
        git: 'https://github.com/b5zwcgwt6z-lang/projectA',
        notion: null,
        site: 'https://b5zwcgwt6z-lang.github.io/projectA/',
        stack: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Swiper'],
        contribution: '100%',
        purpose: "노티드의 키치함에 상생 가치를 더한 <strong style='font-weight:900'>프리미엄 정체성</strong>를 구축",
        problem: '가치 전달과 시각적 피로도 사이의 균형 확보 난항',
        solution: '메인 비주얼의 시각적 단순화와 Swiper 구조를 활용한 정보 계층화',
    },
    {
        img: 'images/airbnb-mockup.PNG',
        imgScale: 1.8,
        imgPosition: '30% 30%',
        plan: null,
        git: null,
        notion: null,
        site: null,
        stack: ['Figma'],
        contribution: '34%',
        purpose: '에어비앤비앱의 보완점과 최근 여행 플렛폼 트렌드를 분석하여 불투명한 정보는 걷어내고, 복잡한 구조는 정제한 사용자 중심의 리디자인입니다.',
        problem: '팀원마다 폰트 크기나 컬러값이 조금씩 달라 결과물을 합쳤을 때 전체적인 디자인이 조화롭지 않고 제각각이었습니다.',
        solution: '누가 작업해도 같은 결과가 나오도록 Figma에서 사용하는 모든 디자인 요소를 스타일로 등록하고 규칙을 하나하나 정형화했습니다.',
    },
];

// 모달
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalVideo = document.getElementById('modal-video');
const modalBtnSite = document.getElementById('modal-btn-site');
const modalBtnPlan = document.getElementById('modal-btn-plan');
const modalBtnGit = document.getElementById('modal-btn-git');
const modalBtnNotion = document.getElementById('modal-btn-notion');

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modalVideo.src = '';
}

document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('click', function() {
        const d = projectData[card.dataset.index];
        if (!d) return;

        const imgWrap = document.querySelector('.modal-img-wrap');
        if (d.video) {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = d.video + '?autoplay=1&mute=1';
            imgWrap.style.backgroundImage = 'none';
            imgWrap.classList.add('is-video');
        } else {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'none';
            imgWrap.classList.remove('is-video');
            imgWrap.style.height = '320px';
            imgWrap.style.backgroundImage = `url('${d.img}')`;
            imgWrap.style.backgroundSize = d.imgScale ? `${d.imgScale * 100}%` : 'cover';
            imgWrap.style.backgroundPosition = d.imgPosition || 'center';
            imgWrap.style.backgroundRepeat = 'no-repeat';
        }

        modalBtnPlan.href = d.plan || '#';
        modalBtnPlan.style.display = d.plan ? '' : 'none';
        modalBtnGit.href = d.git || '#';
        modalBtnGit.style.display = d.git ? '' : 'none';
        modalBtnNotion.href = d.notion || '#';
        modalBtnNotion.style.display = d.notion ? '' : 'none';
        modalBtnSite.href = d.site || '#';
        modalBtnSite.style.display = d.site ? '' : 'none';

        document.getElementById('modal-contribution').textContent = d.contribution;
        document.getElementById('modal-purpose').innerHTML = d.purpose;
        document.getElementById('modal-problem').textContent = d.problem;
        document.getElementById('modal-solution').textContent = d.solution;
        const stackWrap = document.getElementById('modal-stack');
        stackWrap.innerHTML = (d.stack || []).map(s => `<span class="stack-tag">${s}</span>`).join('');

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});


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
        if (!serviceTargetImg) return;
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
