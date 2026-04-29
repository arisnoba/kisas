# MEMORY

## 저장소 목적

- 이 저장소는 웹사이트 퍼블리싱 작업을 Codex로 반복 가능하게 수행하기 위한 하네스 골격을 제공한다.
- 하네스는 Claude Code 플러그인형 코드리뷰 파이프라인을 Codex 방식으로 옮긴 것이다.
- 실제 웹사이트는 한국 예술 유학 아카데미 프론트엔드 프로젝트다.
- 기본 스택은 Next.js App Router, Tailwind CSS v4, shadcn/ui preset `bIm4yi8`, Vercel 테스트 배포다.
- 백엔드와 관리자, CMS, 실제 상담 저장은 별도 개발자가 담당한다.

## 하네스 구성

- 루트 지침: `AGENTS.md`
- 장기 컨텍스트: `.ai/MEMORY.md`
- 작업 계획: `.ai/PLAN.md`
- 작업 규칙: `.ai/RULES.md`
- 상세 하네스 설명: `.ai/CODEX_HARNESS.md`
- Codex Skill: `.agents/skills/web-publishing-harness/SKILL.md`
- 산출물: `.publish-artifacts/{branch-name}/`

## 고정 제약

- 새 의존성은 마지막 수단으로 본다.
- 검증 스크립트는 기본적으로 Node.js 표준 라이브러리만 사용한다.
- 실제 웹앱 코드가 추가되면 기존 프레임워크와 패키지 매니저를 우선 따른다.
- 커밋 메시지는 한국어 본문을 기본으로 한다.
- 프론트는 정적 목업 데이터로 먼저 완성하고, API 연결 예정 지점은 명확히 격리한다.
