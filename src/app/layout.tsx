import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export const metadata: Metadata = {
  title: "비비조경 — 서울·경기·강화 벌초·예초 대행 정찰제",
  description: "서울·경기·강화권 벌초·예초·제초제·정기관리 전문. 1기당, 평당 정해진 단가. 추가비용 0원. 작업 후 전·후 사진으로 확인하세요.",
  keywords: "벌초대행, 예초, 제초제, 정기관리, 서울, 경기, 강화, 조경, 벌초업체",
  openGraph: {
    title: "비비조경 — 벌초·예초 정찰제",
    description: "서울·경기·강화 벌초·예초 전문. 추가비용 없는 정찰제.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
