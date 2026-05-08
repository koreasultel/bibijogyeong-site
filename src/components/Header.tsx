'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0c1f0c] text-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-black tracking-tight text-white">비비조경</Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">가격 안내</Link>
          <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">작업 갤러리</Link>
          <Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
          <Link href="/estimate" className="bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-full text-white font-bold transition-colors">
            무료 견적 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1.5" aria-label="메뉴">
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="md:hidden bg-[#0a1a0a] px-4 py-4 flex flex-col gap-4 text-sm font-medium border-t border-white/10">
          <Link href="/pricing" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">가격 안내</Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">작업 갤러리</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">FAQ</Link>
          <Link href="/estimate" onClick={() => setOpen(false)} className="bg-orange-500 text-center px-4 py-2.5 rounded-full font-bold">
            무료 견적 신청
          </Link>
        </nav>
      )}
    </header>
  );
}
