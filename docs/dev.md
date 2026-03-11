# 🛠️ 개발 문서: 푸드네이터 (Food-nator)

# 🛠️ 개발 문서

## 기술 스택

| 분류 | 기술 | 용도 |
| --- | --- | --- |
| 프레임워크 | React (Vite) 또는 Next.js (Client Component) | 프런트엔드 UI 및 라우팅 (백엔드 없이 순수 클라이언트 구동) |
| UI | shadcn/ui + Tailwind CSS | 반응형 UI 컴포넌트 및 고속 스타일링 |
| 상태 관리 | Zustand 또는 React Context API | 클라이언트 상태 (질문 단계, 현재 남은 후보군 데이터 등) |
| 데이터베이스 | Local JSON / TS (정적 파일) | DB 없이 `foodData.ts` 파일에 15종 음식 데이터 하드코딩 |
| 개발 자동화 | Antigravity + Claude Code | 터미널 기반 레포지토리 관리 및 컴포넌트 자동 생성 |
| 기획/분석 | NotebookLM, Gemini | 데이터 인사이트 도출 및 문서 구조화 |

## 화면 구성

| 페이지 | 경로 | 설명 |
| --- | --- | --- |
| 메인 | `/` | 랜딩 페이지 및 '시작하기' 버튼 |
| 퀴즈 진행 | `/quiz` | 10단계 가변형 질문 및 진행률 바(ProgressBar) 표시 |
| 결과 확인 | `/result` | 최종 필터링된 음식 노출 및 추천 사유 (Early Exit 포함) |

## 컴포넌트 및 디렉토리 구조

```
src/
├── app/ (또는 pages/)# 라우팅 페이지 (Main, Quiz, Result)
├── components/
│   ├── ui/           # shadcn/ui 기본 컴포넌트 (버튼, 프로그레스 바 등)
│   ├── QuizCard.tsx  # 질문 텍스트 및 가변형 답변 버튼 렌더링
│   └── ResultCard.tsx# 최종 추론 결과(음식) 표시
├── data/
│   ├── foodData.ts   # 15종 한식 DB 및 속성 태그 (서버 DB 대체용)
│   └── questions.ts  # 10단계 질문 리스트 및 답변별 필터링 조건
├── hooks/
│   └── useAkinator.ts# 배열 기반 필터링 알고리즘 (핵심 로직 훅)
└── store/            # Zustand 전역 상태 (현재 step, 남은 후보군 배열 등)
```

## 4. AI (Claude Code) 프롬프트 가이드

개발 효율을 높이기 위해 아래 프롬프트를 Claude에게 입력하세요:

> **프롬프트 1 (데이터 구축)**:
"15개의 한국 음식 데이터를 담은 JSON 배열을 만들어줘. 속성으로는 `id`, `name`, `tags` (예: spicy(boolean), soup(boolean), meat(string))를 포함해 줘."
> 

> **프롬프트 2 (필터링 로직)**:
"React로 아키네이터 방식의 필터링 로직을 구현해 줘. 사용자가 질문에 답하면 그 조건에 맞지 않는 항목을 배열에서 제외시키고, 남은 항목이 1개이거나 10번째 질문이 끝나면 결과를 반환하는 상태 관리 훅(Hook)을 작성해."
> 

> **프롬프트 3 (UI)**:
"Tailwind CSS를 활용해서 화면 중앙에 질문 카드가 있고, 답변 버튼 2~3개가 있는 깔끔한 퀴즈 화면 UI를 만들어줘."
> 

## 5. 데이터셋 구조 예시 (JSON)

```json
{
  "id": "kimchi_stew",
  "name": "김치찌개",
  "tags": {
    "soup": true,
    "spicy": "high",
    "meat": "pork",
    "temperature": "hot"
  },
  "desc": "스트레스 팍 풀리는 매콤하고 뜨끈한 국물이 당기는 당신에게 딱!"
}
```