# 최승아 포트폴리오 - CLAUDE.md

## 프로젝트 개요

신입 UIUX 디자이너 **최승아**의 구직용 개인 포트폴리오 사이트.
정적 프론트엔드 전용 (서버/백엔드 없음).

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| HTML | HTML5, 단일 진입점 `index.html` |
| CSS | CSS3, 커스텀 변수, Grid/Flexbox, `css/style.css` |
| JS | Vanilla JS, `js/script.js` |
| 애니메이션 | GSAP 3 (ScrollTrigger, ScrollToPlugin) |
| 슬라이더 | Swiper 11 |
| 폰트 | Pretendard (제목/UI), IBM Plex Sans (본문) — CDN |

**금지:** TypeScript, Tailwind CSS, React/Vue 등 프레임워크, 백엔드

---

## 파일 구조

```
portfolio/
├── index.html        ← 메인 HTML (유일한 루트 파일)
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── aboutmeimg.png   ← hero 섹션 인물 사진
│   └── heroimg.png      ← about 섹션 프로필 사진
└── CLAUDE.md
```

---

## 페이지 구조

```
<body>
  .mouse-dot / .mouse-circle  ← 커스텀 커서 (GSAP)

  <header>                    ← 고정 플로팅 pill 헤더
    logo | nav | HIRE ME 버튼

  <main>
    section#home.hero         ← 1. 히어로
    section#about.aboutme     ← 2. 어바웃
    section#projects.projects ← 3. 프로젝트 (services 앞으로 이동)
    section#services.services ← 4. 서비스 (인터랙티브)
    section#process.process   ← 5. 프로세스
    section#campus.campus     ← 6. 캠퍼스 라이프

  <footer>                    ← 컨택트 + 프로필 카드
```

---

## 섹션별 상세

### Header
- 화면 상단 고정 (`position: fixed`), pill 형태 (`border-radius: 100px`)
- nav 링크: `#home`, `#about`, `#projects`, `#process`
- HIRE ME 버튼 (`.btn-black`): 버터 옐로우 호버 + bouncy 애니메이션

### 1. Hero (`section#home`)
- 전체 화면 높이 (`100vh`)
- 배경: 대형 텍스트 "DESIGNER" (장식용, `z-index: -1`)
- 좌: 이름 타이틀 + 한마디 문구
- 우: 인물 사진 + 뱃지 3개 (UI/UX, MINIMALIST, CREATIVE)
- GSAP: 뱃지 둥둥 floating 애니메이션 (`repeat: -1, yoyo: true`)

### 2. About (`section#about`)
- 좌: 프로필 사진 (`.rounded-img`, 4:5 비율)
- 우: 인적사항 그리드 (BIRTH, EDUCATION, CERTIFICATE, CONTACT) + 스킬 태그
- 배경: `var(--bg)`

### 4. Services (`section#services`)
- 좌: 서비스 목록 3개 (01 UI/UX Design, 02 Branding, 03 Web Publishing)
- 우: 이미지 (`sticky` 배치)
- JS: 항목 클릭 시 `.active` 토글 + 우측 이미지 GSAP fade 교체

### 3. Projects (`section#projects`)
- 카드 4개 세로 배치
  1. 에어비앤비 앱리디자인 프로젝트 (2026.02.04 ~ 02.20 / figma)
  2. Horizon Finance (JAN 2026 / FINTECH)
  3. E-commerce Web App (FEB 2026 / WEB DESIGN)
  4. Brand Identity System (MAR 2026 / BRANDING)
- GSAP ScrollTrigger: 스크롤 진입 시 `y: 60 → 0` fade-up
- 카드 hover: 이미지 scale(1.05) + info-overlay translateY(-10px)

### 5. Process (`section#process`)
- 3단계 아코디언 패널 (DISCOVER, DESIGN, DELIVER)
- JS: 클릭 시 `.active` 토글 → CSS `flex` 비율로 확장 (`flex: 1 → flex: 3`)

### 6. Campus Life (`section#campus`)
- Swiper 슬라이더 (loop, autoplay 2s)
- 반응형: 모바일 2장, 768px+ 4장, 1200px+ 6장

### Footer
- 상단: 컨택트 CTA (`LET'S TALK ↗`)
- 하단: 프로필 카드 (소셜 링크, 위치, 이메일, 저작권)

---

## 디자인 시스템 (CSS 변수)

```css
--bg:       #f9f8ff  /* 라벤더 화이트 배경 */
--text:     #3d3445  /* 플럼 그레이 (기본 텍스트) */
--sub:      #7a7285  /* 보조 텍스트 */
--point:    #c3b1e1  /* 라벤더 (핵심 포인트) */
--butter:   #fff4a3  /* 버터 옐로우 (포인트 컬러) */
--lavender: #ebe4ff  /* 페일 퍼플 (보조 포인트) */
--light:    #f2efff  /* 섹션 구분용 연보라 */
```

**폰트:**
- 제목/UI: `Pretendard` (h1~h3, label, logo, nav, btn)
- 본문: `IBM Plex Sans`

---

## JavaScript 기능 목록

| 번호 | 기능 | 방식 |
|---|---|---|
| 1 | 커스텀 마우스 | `mousemove` + GSAP |
| 2 | 서비스 이미지 교체 | click + GSAP fade |
| 3 | 프로세스 아코디언 | click + CSS class toggle |
| 4 | 프로젝트 카드 등장 | GSAP ScrollTrigger |
| 5 | 네비 부드러운 스크롤 | GSAP ScrollToPlugin |
| 6 | 뱃지 floating 애니메이션 | GSAP repeat/yoyo |
| 7 | 캠퍼스 슬라이더 | Swiper |

---

## 코딩 규칙

1. **난이도**: 코딩 6개월 수준에 맞는 간결한 코드
2. **식별자**: 짧고 직관적으로
3. **접근성 속성** (`aria-*`, `role`) 추가하지 말 것
4. **JS 성능 최적화** 불필요 — 가독성 우선
5. **CSS 변수** 반드시 활용
6. **반응형**: 모바일 / 태블릿(1024px) / 데스크톱 모두 대응

---

## 알려진 이슈

1. **이미지 src 혼재** — `heroimg.png`/`aboutmeimg.png` 용도가 뒤바뀌어 있음
2. **외부 이미지 의존** — services, projects, process, footer가 `demo.7iquid.com` URL 사용 중 (로컬 이미지로 교체 필요)
3. **nav 링크 누락** — `#campus` 섹션이 nav에 없음
4. **`<footer>` 위치** — 현재 `<main>` 닫힘 전에 있음 (시멘틱 구조 오류)
