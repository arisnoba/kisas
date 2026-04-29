# Codex 웹사이트 퍼블리싱 하네스

## 목적

이 하네스는 Codex가 웹사이트 퍼블리싱 작업에서 매번 같은 순서로 읽고, 수정하고, 검증하도록 만드는 최소 작업 틀이다.

## Claude Code 하네스와의 대응

| Claude Code 흐름 | Codex 하네스 대응 |
| --- | --- |
| `/mafia-codereview:auto` | `$web-publishing-harness` 실행 또는 명시 요청 |
| 설계의도 작성 | 퍼블리싱 의도와 영향 범위 기록 |
| 평가기준 수립 | 접근성, SEO, 반응형, 빌드, 배포 기준 생성 |
| PR 본문 생성 | 배포 메모 또는 PR 본문 작성 |
| 코드리뷰 실행 | 코드, UI, 빌드 산출물 점검 |
| 리뷰 반영 + QA | 수정 반영 후 smoke/report/앱 검증 반복 |

## 산출물 정책

- 기본 검증은 `npm run harness:smoke`로 실행한다.
- `npm run harness:report`는 터미널에만 리포트를 출력하며 파일을 갱신하지 않는다.
- `.publish-artifacts/{branch-name}/publish-report.md`는 `npm run harness:report:write` 또는 `npm run publish:report`를 명시적으로 실행할 때만 갱신한다.
- 필요 시 `.publish-artifacts/{branch-name}/publishing-intent.md`
- 필요 시 `.publish-artifacts/{branch-name}/review-checklist.md`
- 필요 시 `.publish-artifacts/{branch-name}/pr-body.md`

## 완료 기준

- 변경 범위가 설명되어 있다.
- 실행 가능한 검증 명령이 적어도 하나 이상 실행되었다.
- 실제 웹앱이 있는 경우 빌드 또는 그에 준하는 검증 결과가 보고되었다.
- 미검증 항목은 숨기지 않고 명시되어 있다.
