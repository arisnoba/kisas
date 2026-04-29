import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KISAS | 한국 예술 유학 아카데미",
  description:
    "한국 예술 유학 준비생을 위한 포트폴리오, 국가별 입시, 전공별 과정 안내 아카데미 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
