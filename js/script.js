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
        stack: {
            '프론트엔드': ['React 19', 'Vite', 'Tailwind CSS v4', 'React Router v7', 'Axios', 'FontAwesome'],
            '백엔드': ['Python FastAPI', 'TMDB API'],
            '디자인': ['Google Stitch', 'Figma'],
            '개발 방식': ['Gemini CLI', 'Claude Code'],
            '배포': ['Render'],
            '형상 관리': ['Git/GitHub', '모노레포'],
        },
        contribution: '34%',
        purpose: "성장에 맞춘 연령별 완벽 차단으로, 알고리즘의 위협으로부터 보호하기 위해 제작한 <strong style='font-weight:750'>키즈 OTT 서비스</strong>",
        problem: '브랜치 전략 및 협업 규칙 부재로 인한 코드 충돌과 소스 관리 체계의 혼선',
        solution: '개별 브랜치 작업 및 Pull Request 기반의 코드 리뷰 프로세스를 도입하고, KRDS 기반의 디자인 시스템을 구축하여 협업 규칙을 체계화',
    },
    {
        img: 'images/clink-logo.jpg',
        imgPosition: '0% center',
        imgScale: 1.6,
        imgOrigin: '0% center',
        plan: 'https://www.figma.com/deck/PXmBvzb8Rg4FfCQu5dGNEP',
        git: 'https://github.com/b5zwcgwt6z-lang/projectA',
        notion: null,
        site: 'https://b5zwcgwt6z-lang.github.io/projectA/',
        stack: ['Figma', 'Photoshop', 'Illustrator', 'HTML', 'JavaScript', 'CSS'],
        contribution: '100%',
        purpose: "노티드의 키치함에 상생 가치를 더한 <strong style='font-weight:750'>프리미엄 정체성</strong>를 구축",
        problem: '가치 전달과 시각적 피로도 사이의 균형 확보 난항',
        solution: '메인 비주얼의 시각적 단순화와 Swiper 구조를 활용한 정보 계층화',
    },
    {
        img: 'images/airbnb-mockup.PNG',
        imgScale: 1.4,
        imgPosition: '30% center',
        imgOrigin: '0% center',
        imgY: 20,
        imgX: 20,
        plan: 'https://www.figma.com/deck/vZAIU9Op6Fr4weP4Hx900A',
        videoLink: 'https://drive.google.com/file/d/1A3qdZKDHw9ueM23mhW15xwsj_IJfFSvm/view?usp=sharing',
        prototype: 'https://www.figma.com/design/NEDf02RUHkY7zLffMSZvTm/%EC%97%90%EC%96%B4%EB%B9%84%EC%95%A4%EB%B9%84-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=99-200&t=88QumeYN8SpKy3kj-1',
        git: null,
        notion: null,
        site: null,
        stack: ['Premiere Pro', 'Photoshop', 'Illustrator', 'Figma', 'Notion'],
        contribution: '34%',
        purpose: "보완점과 트렌드를 분석하여 불투명한 정보는 걷어내고, 복잡한 구조는 정제한 <strong style='font-weight:750'>사용자 중심의 리디자인</strong>",
        problem: '팀원별 디자인 수치(폰트·컬러)의 상이한 적용으로 인한 시각적 일관성 결여 및 작업물 간 부조화',
        solution: '팀원 누구나 동일한 결과물을 도출할 수 있도록 Figma 내 모든 요소를 스타일로 자산화하고 협업 규칙을 정형화',
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
const modalBtnVideo = document.getElementById('modal-btn-video');
const modalBtnProto = document.getElementById('modal-btn-proto');

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
            imgWrap.style.height = '';
            imgWrap.classList.add('is-video');
        } else {
            modalVideo.style.display = 'none';
            modalVideo.src = '';
            imgWrap.classList.remove('is-video');
            imgWrap.style.backgroundImage = '';
            imgWrap.style.height = '';
            modalImg.src = d.img;
            modalImg.style.display = 'block';
            modalImg.style.objectPosition = d.imgPosition || 'center';
            modalImg.style.transformOrigin = d.imgOrigin || 'center center';
            const ty = d.imgY ? `${d.imgY}px` : '0px';
            modalImg.style.transform = d.imgScale ? `scale(${d.imgScale}) translateY(${ty})` : 'scale(1)';
        }

        modalBtnPlan.href = d.plan || '#';
        modalBtnPlan.style.display = d.plan ? '' : 'none';
        modalBtnGit.href = d.git || '#';
        modalBtnGit.style.display = d.git ? '' : 'none';
        modalBtnNotion.href = d.notion || '#';
        modalBtnNotion.style.display = d.notion ? '' : 'none';
        modalBtnVideo.href = d.videoLink || '#';
        modalBtnVideo.style.display = d.videoLink ? '' : 'none';
        modalBtnProto.href = d.prototype || '#';
        modalBtnProto.style.display = d.prototype ? '' : 'none';
        modalBtnSite.href = d.site || '#';
        modalBtnSite.style.display = d.site ? '' : 'none';

        document.getElementById('modal-contribution').textContent = d.contribution;
        document.getElementById('modal-purpose').innerHTML = d.purpose;
        document.getElementById('modal-problem').textContent = d.problem;
        document.getElementById('modal-solution').textContent = d.solution;
        const stackWrap = document.getElementById('modal-stack');
        if (Array.isArray(d.stack)) {
            stackWrap.classList.add('modal-stack--flat');
            stackWrap.innerHTML = d.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');
        } else {
            stackWrap.classList.remove('modal-stack--flat');
            stackWrap.innerHTML = Object.entries(d.stack).map(([cat, items]) =>
                `<div class="stack-row">
                    <span class="stack-cat">${cat}</span>
                    <div class="stack-tags">${items.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
                </div>`
            ).join('');
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});


// GSAP 플러그인 연결
gsap.registerPlugin(ScrollToPlugin);

// 1. 커스텀 마우스 효과
const dot = document.querySelector('.mouse-dot');
const circle = document.querySelector('.mouse-circle');

window.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(dot, { x: x, y: y, duration: 0 });
    gsap.to(circle, { x: x - 20, y: y - 20, duration: 0.15 });
});




// 2. 서비스 섹션: 클릭 시 아코디언 + 카드 전환
const serviceItems = document.querySelectorAll('.service-item');
const archivePanels = document.querySelectorAll('.archive-cards');

// archive-cards 클릭 시 service-item 토글 방지
archivePanels.forEach(function(panel) {
    panel.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// 초기 상태: 1번 펼쳐진 채로 시작
serviceItems.forEach(el => el.classList.remove('active'));
archivePanels.forEach(p => p.classList.add('cards-hidden'));
serviceItems[0].classList.add('active');
archivePanels[0].classList.remove('cards-hidden');

serviceItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        serviceItems.forEach(el => el.classList.remove('active'));
        archivePanels.forEach(p => p.classList.add('cards-hidden'));
        if (!isActive) {
            item.classList.add('active');
            if (archivePanels[index]) {
                archivePanels[index].classList.remove('cards-hidden');
            }
        }
    });
});

// 3. 프로세스 섹션: 클릭하면 확장되는 로직
const processBoxes = document.querySelectorAll('.process-box');
processBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        processBoxes.forEach(function(el) {
            el.classList.remove('active');
            const iframe = el.querySelector('.process-video-card iframe');
            if (iframe) iframe.src = '';
        });
        box.classList.add('active');
        const videoCard = box.querySelector('.process-video-card');
        if (videoCard) {
            const iframe = videoCard.querySelector('iframe');
            iframe.src = videoCard.dataset.src + '?autoplay=1&mute=1';
        }
    });
});

// 4. 상단 메뉴 클릭 시 부드럽게 이동
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

// 8. Archive 카드 레벨 캐러셀
document.querySelectorAll('.archive-cards').forEach(function(archiveEl) {
    var stack = archiveEl.querySelector('.card-stack');
    if (!stack) return;

    var items = Array.from(stack.querySelectorAll('.ap-post'));
    var total = items.length;
    if (total < 2) return;
    var active = 0;

    function getLevel(index) {
        var diff = index - active;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return Math.max(-3, Math.min(3, diff));
    }

    function render() {
        items.forEach(function(item, i) {
            item.dataset.level = getLevel(i);
        });
    }

    function next() { active = (active + 1) % total; render(); }
    function prev() { active = (active - 1 + total) % total; render(); }

    // 사이드 카드 클릭 → 해당 방향으로 이동
    items.forEach(function(item) {
        item.addEventListener('click', function(e) {
            var level = parseInt(item.dataset.level);
            if (level > 0) { e.preventDefault(); next(); }
            else if (level < 0) { e.preventDefault(); prev(); }
        });
    });

    var prevBtn = archiveEl.querySelector('.ac-prev');
    var nextBtn = archiveEl.querySelector('.ac-next');
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    // 마우스 드래그로 슬라이드
    var dragStartX = 0;
    var isDragging = false;
    var hasMoved = false;

    stack.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDragging = true;
        hasMoved = false;
        dragStartX = e.clientX;
        stack.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging || hasMoved) return;
        var delta = e.clientX - dragStartX;
        if (Math.abs(delta) > 50) {
            hasMoved = true;
            if (delta < 0) next();
            else prev();
        }
    });

    document.addEventListener('mouseup', function() {
        if (!isDragging) return;
        isDragging = false;
        hasMoved = false;
        stack.style.cursor = '';
    });

    render();
});

// 7. 캠퍼스 레벨 캐러셀
(function() {
    var el = document.querySelector('.level-carousel');
    if (!el) return;

    var items = Array.from(el.querySelectorAll('.lc-item'));
    var total = items.length;
    var active = 0;

    function getLevel(index) {
        var diff = index - active;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return Math.max(-3, Math.min(3, diff));
    }

    function render() {
        items.forEach(function(item, i) {
            item.dataset.level = getLevel(i);
        });
    }

    function next() { active = (active + 1) % total; render(); }
    function prev() { active = (active - 1 + total) % total; render(); }

    // 카드 클릭 → 해당 방향으로 이동
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var level = parseInt(item.dataset.level);
            if (level > 0) next();
            else if (level < 0) prev();
        });
    });

    el.querySelector('.lc-prev').addEventListener('click', prev);
    el.querySelector('.lc-next').addEventListener('click', next);

    // 자동 재생 (마우스 오버 시 정지)
    var timer = setInterval(next, 3000);
    el.addEventListener('mouseenter', function() { clearInterval(timer); });
    el.addEventListener('mouseleave', function() { timer = setInterval(next, 3000); });

    render();
}());

// AI Zone 좋아요/싫어요 토글
document.querySelectorAll('.aizone-like-group').forEach(function(group) {
    const likeIcon = group.querySelector('.fa-thumbs-up');
    const dislikeIcon = group.querySelector('.fa-thumbs-down');

    likeIcon.parentElement.addEventListener('click', function() {
        const isActive = likeIcon.classList.contains('fa-solid');
        likeIcon.classList.toggle('fa-solid', !isActive);
        likeIcon.classList.toggle('fa-regular', isActive);
        if (!isActive) {
            dislikeIcon.classList.remove('fa-solid');
            dislikeIcon.classList.add('fa-regular');
        }
    });

    dislikeIcon.parentElement.addEventListener('click', function() {
        const isActive = dislikeIcon.classList.contains('fa-solid');
        dislikeIcon.classList.toggle('fa-solid', !isActive);
        dislikeIcon.classList.toggle('fa-regular', isActive);
        if (!isActive) {
            likeIcon.classList.remove('fa-solid');
            likeIcon.classList.add('fa-regular');
        }
    });
});

// Travel Gallery
(function() {
    var featured = document.getElementById('gallery-featured');
    var caption = document.getElementById('gallery-caption');
    var desc = document.getElementById('gallery-desc');
    var inner = document.querySelector('.film-strip-inner');
    var filmStrip = document.querySelector('.film-strip');
    if (!featured || !inner) return;

    var filmTween = null;
    var isDragging = false;
    var startY = 0;
    var currentY = 0;

    // 카테고리별 데이터 — 사진 추가 시 여기에 입력
    var galleryData = {
        '🎪 영어뮤지컬': {
            main: { src: 'images/musical-main.jpg', caption: '🎪 Duddenly - 영어 뮤지컬 동아리', desc: "2023년 3월 ~ 2023년 11월 | 학과 대표 영어뮤지컬 동아리 'Duddenly'의 총감독으로 1년간 24명의 단원을 통솔하며, 영화 <위대한 쇼맨>을 무대화하여 약 150명의 관객을 동원하며 성황리에 마무리했습니다." },
            frames: [
                { src: 'images/musical-main.jpg', place: '🎪 Duddenly', caption: '🎪 Duddenly - 영어 뮤지컬 동아리', desc: "2023년 3월 ~ 2023년 11월 | 학과 대표 영어뮤지컬 동아리 'Duddenly'의 총감독으로 1년간 24명의 단원을 통솔하며, 영화 <위대한 쇼맨>을 무대화하여 약 150명의 관객을 동원하며 성황리에 마무리했습니다." },
                { src: 'images/muscial1.png', place: '🎪 연습현장', caption: '🎪 연습현장', desc: '공연을 위한 열정적인 연습 시간' },
                { src: 'images/campus3.jpg', place: '🎪 무대뒤', caption: '🎪 무대뒤', desc: '긴장감 넘치는 백스테이지' },
                { src: 'images/campus4.jpg', place: '🎪 리허설', caption: '🎪 리허설', desc: '최종 점검 리허설' },
                { src: 'images/campus5.jpg', place: '🎪 공연중', caption: '🎪 공연중', desc: '관객과 하나되는 순간' },
                { src: 'images/campus6.jpg', place: '🎪 단체사진', caption: '🎪 단체사진', desc: '공연을 마친 후 단원들과 함께' }
            ]
        },
        '배낭여행': {
            main: { src: 'images/campus1.jpg', caption: '📍 유럽 배낭여행', desc: '2024년 1월 ~ 2월 | 영국, 프랑스, 스위스, 이탈리아 등 6개국을 돌며 넓은 세상을 경험하고 기록했습니다.' },
            frames: [
                { src: 'images/campus1.jpg', place: '📍 런던', date: '2024.01', caption: '📍 런던 타워브릿지', desc: '유럽 여행의 첫 시작' },
                { src: 'images/campus2.jpg', place: '📍 파리', date: '2024.02', caption: '📍 파리 에펠탑', desc: '낭만이 가득한 파리 시내' },
                { src: 'images/campus3.jpg', place: '📍 인터라켄', date: '2024.02', caption: '📍 스위스 융프라우', desc: '눈부신 설경의 알프스' }
            ]
        },
        '교회사역': {
            main: { src: 'images/campus4.jpg', caption: '📍 교회 사역', desc: '봉사와 헌신을 통해 나눔의 가치를 실천하고 팀워크를 배웠습니다.' },
            frames: [
                { src: 'images/campus4.jpg', place: '📍 수련회', date: '2024.04', caption: '📍 여름 수련회', desc: '함께 기도하고 성장하는 시간' },
                { src: 'images/campus5.jpg', place: '📍 봉사활동', date: '2024.06', caption: '📍 지역사회 봉사', desc: '이웃에게 사랑을 전하는 활동' },
                { src: 'images/campus6.jpg', place: '📍 성가대', date: '2024.08', caption: '📍 찬양 사역', desc: '음악으로 전하는 메시지' }
            ]
        }
    };

    function buildFrames(frames) {
        var html = '';
        frames.forEach(function(f, i) {
            html += '<div class="film-frame' + (i === 0 ? ' active' : '') + '"'
                  + ' data-src="' + f.src + '"'
                  + ' data-caption="' + f.caption + '"'
                  + ' data-desc="' + f.desc + '">'
                  + '<img src="' + f.src + '" alt="">'
                  + '<div class="film-label">'
                  + '<span class="film-place">' + f.place + '</span>'
                  + '</div></div>';
        });
        return html;
    }

    function initAnimation() {
        if (filmTween) filmTween.kill();
        
        var limit = inner.offsetHeight / 2;
        var curY = gsap.getProperty(inner, "y");
        
        if (curY > 0) curY -= limit;
        if (curY < -limit) curY += limit;
        gsap.set(inner, { y: curY });

        var remainingDist = Math.abs(-limit - curY);
        var totalDist = limit;
        var baseDuration = 25; 
        var duration = (remainingDist / totalDist) * baseDuration;

        filmTween = gsap.to(inner, {
            y: -limit,
            duration: duration,
            ease: "none",
            onComplete: function() {
                gsap.set(inner, { y: 0 });
                initAnimation(); 
            }
        });
    }

    function loadCategory(name) {
        var data = galleryData[name];
        if (!data) return;

        gsap.to(featured, { opacity: 0, duration: 0.2, onComplete: function() {
            featured.src = data.main.src;
            caption.textContent = data.main.caption;
            if (desc) desc.textContent = data.main.desc;
            gsap.to(featured, { opacity: 1, duration: 0.3 });
        }});

        var framesHTML = buildFrames(data.frames);
        inner.innerHTML = framesHTML + framesHTML;
        
        setTimeout(function() {
            gsap.set(inner, { y: 0 });
            initAnimation();
        }, 100);
    }

    // --- 드래그 로직 ---
    filmStrip.addEventListener('mousedown', function(e) {
        e.preventDefault(); 
        isDragging = true;
        startY = e.clientY;
        currentY = gsap.getProperty(inner, "y");
        if (filmTween) filmTween.kill();
        inner.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        var deltaY = e.clientY - startY;
        var nextY = currentY + deltaY;
        var limit = inner.offsetHeight / 2;

        if (nextY > 0) { nextY -= limit; startY += limit; }
        else if (nextY < -limit) { nextY += limit; startY -= limit; }
        
        gsap.set(inner, { y: nextY });
    });

    window.addEventListener('mouseup', function() {
        if (!isDragging) return;
        isDragging = false;
        inner.style.cursor = 'grab';
        initAnimation(); 
    });

    filmStrip.addEventListener('mouseenter', function() {
        if (!isDragging && filmTween) filmTween.pause();
    });
    filmStrip.addEventListener('mouseleave', function() {
        if (!isDragging) {
            initAnimation();
        }
    });

    document.querySelectorAll('.gallery-cat').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gallery-cat').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            loadCategory(btn.textContent.trim());
        });
    });

    inner.addEventListener('click', function(e) {
        var frame = e.target.closest('.film-frame');
        if (!frame) return;
        document.querySelectorAll('.film-frame').forEach(function(f) { f.classList.remove('active'); });
        document.querySelectorAll('.film-frame[data-src="' + frame.dataset.src + '"]').forEach(function(f) { f.classList.add('active'); });
        gsap.to(featured, { opacity: 0, duration: 0.2, onComplete: function() {
            featured.src = frame.dataset.src;
            caption.textContent = frame.dataset.caption;
            if (desc) desc.textContent = frame.dataset.desc || '';
            gsap.to(featured, { opacity: 1, duration: 0.3 });
        }});
    });

    loadCategory('🎪 영어뮤지컬');
}());
