# PLAN

## 현재 목표

- 한국 예술 유학 아카데미 웹사이트 프론트엔드를 가볍게 구축한다.
- Next.js, Tailwind CSS, shadcn/ui, Vercel 테스트 배포 기준으로 5~13페이지 규모를 준비한다.
- 백엔드는 별도 개발자가 연결하므로 프론트는 목업 데이터와 API 경계까지만 책임진다.

## 구현된 작업 포인트

- Codex 진입 지침을 `AGENTS.md`에 둔다.
- 작업 기억, 규칙, 계획을 `.ai/` 아래에 둔다.
- 재사용 워크플로를 `.agents/skills/web-publishing-harness/` Skill로 둔다.
- 의존성 없는 Node 스크립트로 `harness:smoke`, 파일을 갱신하지 않는 `harness:report`, 명시적 산출물 생성용 `harness:report:write`를 제공한다.
- `PRD.md`에 페이지 구조, 사용자 흐름, 콘텐츠 모델, 백엔드 연동 경계를 정리했다.
- Next.js App Router와 Tailwind CSS v4 프로젝트를 스캐폴딩했다.
- shadcn/ui는 preset `bIm4yi8`로 초기화했다.

## 다음 확장 후보

- 홈, 소개, 전공별 과정, 국가별 유학, 상담 신청부터 구현한다.
- `src/data`에 Program, Country, SuccessCase, Article 목업 데이터를 둔다.
- 상담 폼 API 어댑터를 별도 함수로 만들어 백엔드 연결 지점을 고정한다.
- Vercel 테스트 배포 후 주요 페이지를 모바일/데스크톱에서 확인한다.
