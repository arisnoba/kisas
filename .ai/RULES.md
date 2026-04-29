# RULES

## 수정 범위

- 하네스 자체 변경은 `AGENTS.md`, `.ai/`, `.agents/skills/web-publishing-harness/`, `scripts/`, `package.json` 안에서 우선 처리한다.
- 실제 웹사이트 코드가 생기면 해당 코드의 기존 구조와 명명 규칙을 우선 따른다.
- 인접 코드를 불필요하게 리팩터링하지 않는다.
- 앱 구현은 `src/app`, `src/components`, `src/lib`, `src/data` 범위에서 우선 처리한다.
- shadcn/ui 설정은 `components.json`과 `src/app/globals.css`를 기준으로 한다.

## 검증 우선순위

1. 하네스 자체 점검: `npm run harness:smoke`
2. 하네스 리포트 생성: `npm run harness:report`
3. 정적 검증: `npm run lint`
4. 빌드 검증: `npm run build`
5. UI 변경이 있으면 브라우저 확인: 데스크톱/모바일 주요 화면

## 퍼블리싱 기준

- 라우팅, 메타데이터, 접근성, 반응형, 이미지, 폼, 빌드 결과를 함께 본다.
- SEO와 공유 미리보기는 페이지별 title, description, canonical, Open Graph 값을 확인한다.
- 배포 전에는 환경변수와 공개/비공개 값의 경계를 확인한다.
- 검증하지 못한 항목은 리포트에 "미검증"으로 남긴다.
- 상담 폼은 백엔드 연결 전에도 로딩, 성공, 실패, 유효성 오류 상태가 깨지지 않아야 한다.
