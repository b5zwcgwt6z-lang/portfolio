# 최승아의 portfolio

 반응형 프로젝트입니다. 이 프로젝트는 고대비 "라이트 모드" 미학에 고급 GSAP 애니메이션을 적용한 정적 프론트엔드 애플리케이션입니다.

이 포르젝트는 신입 UIUX 디자이너 **최승아**의 개인 포트폴리오 사이트입니다. 구직용 포트폴리오야.
나는 코딩 배운지 6개월 됐어. 코드의 난이도를 내 경험에 맞춰줘.

## 프로젝트 개요

- **목적:** 최승아를 위한 개인 포트폴리오 웹사이트
- **핵심 기술:** 
    - **HTML5:** 모든 포트폴리오 섹션을 위한 시맨틱 구조.
    - **CSS3:** 커스텀 스타일링, 레이아웃(Grid/Flexbox), 반응형 디자인.
    - **Vanilla JavaScript:** 인터랙션 로직 및 GSAP 통합.
    - **GSAP (GreenSock Animation Platform):** ScrollTrigger, ScrollToPlugin 및 핵심 애니메이션(텍스트 노출, 마그네틱 버튼, 이미지 팔로잉)에 사용.
- **아키텍처:** 단일 진입점(`index.html`), 모듈형 스타일링(`style.css`), 인터랙션 로직(`script.js`)을 갖춘 깔끔하고 평탄한 구조.

## 빌드 및 실행

### 필수 조건
- 최신 웹 브라우저 (Chrome, Firefox, Safari, Edge).

### 프로젝트 실행
이 프로젝트는 클라이언트 사이드 전용 정적 사이트이므로 별도의 서버 설정이나 빌드 프로세스가 필요하지 않습니다.
1. 프로젝트 루트 디렉토리로 이동합니다.
2. 선호하는 웹 브라우저에서 `index.html`을 엽니다.

## 개발 컨벤션

### 기술 스택 제약 사항
- **프레임워크:** React, Vue 또는 기타 JavaScript 프레임워크를 사용하지 마십시오.
- **클라이언트 사이드 전용:** 백엔드, 서버 또는 데이터베이스 구현을 하지 않습니다.
- **라이브러리:** 애니메이션에는 GSAP 및 지정된 플러그인만 허용됩니다.

### 타이포그래피 (PRD 필수 사항)
원래 디자인의 느낌을 유지하면서 한국어 호환성을 위해 특정 폰트 매핑이 적용됩니다:
- **Heading/UI (Satoshi/Roboto Mono):** `Pretendard`로 대체 (CDN 사용).
- **Body (Noto Sans KR):** `IBM Plex Sans`로 대체 (CDN 사용).

### 코딩 스타일
- **CSS:** 색상, 폰트, 트랜지션에 CSS 변수를 사용하십시오. 미니멀한 "라이트 모드" 미학을 유지하십시오.
- **JavaScript:**
    - 모든 애니메이션 로직에 `gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)`을 사용하십시오.
    - 부드러운 전환을 위해 `gsap.to()`를 권장합니다.
    - `script.js`에 정의된 것과 같이 커스텀 커서 및 마그네틱 버튼 로직을 구현하십시오.
- **반응형 디자인:** 모든 섹션(Hero, Works, Services, Stats, Pricing 등)이 모바일, 태블릿, 데스크톱 뷰포트에 최적화되도록 하십시오.

### 프로젝트 구조
- `index.html`: 메인 구조 및 섹션 정의.
- `style.css`: 폰트 교체 및 반응형 미디어 쿼리를 포함한 모든 스타일링.
- `script.js`: GSAP 애니메이션, 커스텀 커서 로직, 부드러운 스크롤.
- `ExportBlock-.../prd1.md`: 원본 요구 사항 및 프로젝트 프롬프트

## 파일구조
index.html을 제외한 모든 파일의 형식별 폴더로 분류해 

## 지침
1. 신입 디자이너의 숙련도에 맞게 코딩해 
    1. 간결한 식별자
    2. 접근성 속성 넣지 말것
    3. 자바스크립트의 성능을 고려하지 말고 초보자가 이해할 수 있는 코드로 작성할 것

## 기술스택
**타입스크립트,테일윈드css 사용금지**
1. html
2. css
3. js


## 문서구조
1. 아래의 순서로 섹셔닝할것
  header+main(>section.hero+section.aboutme+section.projects)+footer

@home.png를 