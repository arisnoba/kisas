export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:px-10 lg:px-12">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-muted-foreground">
              Next.js + Tailwind CSS + shadcn/ui scaffold
            </p>
            <div className="flex max-w-3xl flex-col gap-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
                한국 예술 유학 아카데미 웹사이트
              </h1>
              <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                PRD 기준으로 홈, 과정, 국가별 유학, 합격 사례, 상담 신청
                흐름을 구현할 준비가 끝났습니다. 백엔드 연결 전까지는 정적
                목업 데이터와 명확한 API 경계로 프론트 작업을 진행합니다.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["정보 구조", "5~13페이지 범위에서 콘텐츠 확보 상황에 맞춰 조정"],
              ["프론트 범위", "Next.js App Router와 shadcn/ui 기반 퍼블리싱"],
              ["배포 기준", "Vercel 테스트 배포, lint/build/harness 검증"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="flex min-h-36 flex-col justify-between border bg-card p-5 text-card-foreground"
              >
                <h2 className="text-base font-semibold">{title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
