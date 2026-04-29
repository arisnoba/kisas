# Codex 작업 지침

## 기본 원칙

- 이 저장소는 웹사이트 퍼블리싱 작업을 Codex로 안정적으로 진행하기 위한 하네스를 포함한다.
- 작업 전에는 현재 구현을 먼저 읽고, 필요한 범위만 작게 수정한다.
- 추측으로 완료하지 않는다. 가능한 검증 명령을 실행하고, 실행하지 못한 검증은 이유를 남긴다.
- 커밋 메시지는 별도 지시가 없으면 한국어로 작성한다. 영어 Conventional Commit 접두사는 사용할 수 있지만 본문은 한국어만 쓴다.

## 먼저 읽을 문서

1. `.ai/MEMORY.md`
2. `.ai/RULES.md`
3. `.ai/PLAN.md`
4. `PRD.md`
5. 작업이 퍼블리싱, 배포 전 점검, 웹 UI 검수에 해당하면 `.agents/skills/web-publishing-harness/SKILL.md`

## 프로젝트 개요

- 이 프로젝트는 한국 예술 유학 아카데미 웹사이트의 프론트엔드 작업이다.
- 예상 페이지 수는 5~13페이지다.
- 기술 스택은 Next.js App Router, Tailwind CSS v4, shadcn/ui, Vercel 테스트 배포를 기본으로 한다.
- shadcn/ui는 preset `bIm4yi8`로 초기화되어 있다.
- 백엔드, 관리자, 실제 상담 저장, 인증, CMS 연동은 별도 개발자가 담당한다.
- 프론트 작업은 정적 목업 데이터와 명확한 API 연동 경계를 기준으로 진행한다.

## 프론트엔드 작업 규칙

- `PRD.md`의 정보 구조, 사용자 흐름, 성공 기준을 우선 따른다.
- 구현은 가볍게 유지한다. 새 의존성은 꼭 필요할 때만 추가한다.
- shadcn/ui는 실제로 사용하는 컴포넌트만 추가한다.
- 서버 연동 전에도 모든 페이지가 목업 데이터로 확인 가능해야 한다.
- API 연결 예정 지점은 데이터 레이어나 어댑터 함수로 격리한다.
- 상담 폼은 백엔드 연결 전까지 클라이언트 검증, 로딩, 성공, 실패 상태 UI를 갖춘다.
- 모바일 360px, 태블릿 768px, 데스크톱 1280px 이상에서 주요 페이지를 확인한다.
- 배포 전에는 `npm run lint`, `npm run build`, `npm run harness:smoke`, `npm run harness:report`를 우선 실행한다.

## 주요 명령

- 개발 서버: `npm run dev`
- 린트: `npm run lint`
- 프로덕션 빌드: `npm run build`
- 하네스 점검: `npm run harness:smoke`
- 하네스 리포트: `npm run harness:report`

## Skill routing

When the user's request matches an available skill, use the specialized workflow before ad-hoc work.

- Product ideas, brainstorming, project shaping: `office-hours`
- Bugs, errors, broken behavior: `investigate`
- QA, browser testing, "does this work?": `qa`
- Code review or diff review: `review`
- Ship, deploy, PR, release: `ship`
- Design system, brand, visual direction: `design-consultation`
- Visual audit or UI polish: `design-review`
- Architecture and implementation planning: `plan-eng-review`
- Checkpoint or resume work: `checkpoint`

## 기본 작업 루프

1. 현재 브랜치와 변경 파일을 확인한다.
2. 요청의 성공 조건과 수정 범위를 짧게 정리한다.
3. 실제 코드나 문서를 수정한다.
4. 가능한 순서대로 검증한다.
   - `npm run harness:smoke`
   - `npm run harness:report`
   - 프로젝트에 실제 앱 코드가 있으면 해당 프로젝트의 `lint`, `typecheck`, `build`, 테스트 명령
5. 결과, 영향, 실행한 검증을 사용자에게 짧게 보고한다.

## 산출물 위치

- 하네스 리포트와 퍼블리싱 점검 산출물은 `.publish-artifacts/{branch-name}/` 아래에 둔다.
- 일회성 로그나 빌드 산출물은 커밋하지 않는다.
