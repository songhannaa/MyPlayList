# 🎵 youtube 플레이리스트 추천 프로젝트

이 프로젝트는 Next.js와 TypeScript를 사용하여 유튜브 플레이리스트를 추천하는 웹 애플리케이션입니다. 사용자의 기분, 트렌드, 선호도를 기반으로 한 다양한 추천 기능을 제공합니다. (개발중..)

---

## 🛠 주요 기능

1. **메인 페이지**: 현재 인기 있는 유튜브 플레이리스트를 추천합니다.
2. **검색 페이지**: 키워드를 입력하여 원하는 플레이리스트를 검색할 수 있습니다.
3. **내 플레이리스트 페이지**: 좋아하는 플레이리스트를 저장하여 쉽게 접근할 수 있습니다.
4. **기분 기반 추천 페이지**: 기분에 따라 맞춤 플레이리스트를 추천받을 수 있습니다.

---


## 🗂 프로젝트 구조

📦src  
┣ 📂components  // 재사용 가능한 컴포넌트들  
┃ ┣ 📜Layout.tsx  // 공통 레이아웃 컴포넌트  
┃ ┣ 📜Sidebar.tsx  // 사이드 네비게이션 바  
┃ ┗ 📜PlaylistCard.tsx  // 플레이리스트 카드 UI  
┣ 📂pages  // 각 페이지 경로  
┃ ┣ 📜_app.tsx  // 전체 앱 설정  
┃ ┣ 📜index.tsx  // 메인 페이지  
┃ ┣ 📜search.tsx  // 검색 페이지  
┃ ┣ 📜my-playlist.tsx  // 내 플레이리스트 페이지  
┃ ┗ 📜mood.tsx  // 기분 추천 페이지  
┣ 📂styles  // 스타일 파일  
┃ ┗ 📜globals.css  // 글로벌 스타일 및 리셋 CSS  
┣ 📂utils  // 유틸리티 함수  
┃ ┗ 📜api.ts  // API 호출 관련 함수  
┗ 📜README.md  // 프로젝트 설명 파일  

---

## ⚙️ 기술 스택

- **프레임워크**: Next.js  
- **언어**: TypeScript  
- **스타일링**: CSS  
- **상태 관리**: React Hook  
- **API 호출**: Axios (또는 Fetch)  


---
