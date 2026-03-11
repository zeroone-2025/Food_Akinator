# 🍔 푸드네이터 (Food-nator)

> **"오늘 뭐 먹지?" 10번의 질문으로 당신의 입맛을 스캔하는 음식 아키네이터**
> 
> 
> 🚀 **Team ZeroOne - 제로톤(Zero-Thon) 프로젝트** (2시간 해커톤 결과물)
> 

<br/>

## 📖 프로젝트 개요

점심시간마다 메뉴를 고르지 못해 귀중한 휴식 시간을 낭비하는 현대인들을 위한 **'결정장애 해결' 웹 서비스**입니다.
유명한 스무고개 게임인 '아키네이터'의 추론 알고리즘을 도입하여, 단 10개의 질문만으로 사용자의 현재 기분과 취향을 분석해 15가지 핵심 한식 중 가장 완벽한 메뉴를 제안합니다.

- **Pain Point**: 수많은 선택지 앞에서 결정을 내리지 못하는 '선택의 패러독스'와 메뉴 결정 피로감
- **Solution**: 질문과 답변을 통한 이분법적 속성 필터링으로 '재미'와 '명확한 결과' 제공

<br/>

## ✨ 핵심 기능 (Features)

1. **지능형 아키네이터 엔진**
    - 백엔드 서버 없이 프론트엔드 단에서 가볍게 동작하는 고속 필터링 엔진
    - 15종의 한식 DB와 속성 태그(국물 유무, 매운 정도 등)를 기반으로 한 교집합 검사 로직
2. **가변형 질문 UI**
    - 질문의 성격에 따라 2개(예/아니오)에서 최대 5개까지 유동적으로 변하는 답변 버튼 제공
    - 사용자의 애매한 마음까지 반영하는 디테일한 선택지 설정
3. **Early Exit (조기 종료) 및 결과 도출**
    - 10단계 질문이 끝나기 전이라도 조건에 맞는 음식이 1개로 좁혀지면 즉시 결과 노출
    - 추천된 음식의 명확한 사유(속성 매핑 결과) 제공

<br/>

## 🛠 기술 스택 (Tech Stack)

본 프로젝트는 2시간이라는 제한된 시간 내에 극강의 효율을 내기 위해 **순수 프론트엔드 환경**과 **AI 코딩 도구**를 적극 활용했습니다.

- **Framework / Library**: React (또는 Next.js Client Component)
- **Styling / UI**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand (또는 React Context API)
- **AI Tools**: Claude Code, Antigravity (코드 생성 및 환경 배포), NotebookLM (기획)

<br/>

## 📂 프로젝트 문서 (Docs)

기획부터 개발, 마케팅까지 각 파트별 상세 산출물은 아래 마크다운 파일에서 확인하실 수 있습니다.

- [📋 기획 문서 (plan.md)](https://www.notion.so/plan.md): 프로젝트 MVP 범위 및 15종 음식/질문 데이터셋
- [🛠️ 개발 문서 (dev.md)](https://www.notion.so/dev.md): 프론트엔드 아키텍처, 필터링 로직 및 AI 프롬프트
- [📢 마케팅 문서 (marketing.md)](https://www.notion.so/marketing.md): 타겟 분석 및 홍보 카피라이팅
- [🎤 발표 스크립트 (ppt.md)](https://www.notion.so/ppt.md): 제로톤 최종 발표용 5분 피치 덱

<br/>

## 🚀 시작하기 (Getting Started)

```bash
# 레포지토리 클론
git clone [<https://github.com/zeroone-2025/zerothon-template.git>](<https://github.com/zeroone-2025/zerothon-template.git>)

# 의존성 설치
npm install

# 로컬 서버 실행
npm run dev
```