'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="text-xl font-bold tracking-tight">비비조경</Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/pricing" className="hover:text-green-200 transition-colors">가격 안내</Link>
          <Link href="/gallery" className="hover:text-green-200 transition-colors">작업 갤러리</Link>
          <Link href="/faq" className="hover:text-green-200 transition-colors">FAQ</Link>
          <Link href="/estimate" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-white font-semibold transition-colors">
            📝 무료 견적 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="메뉴">
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="md:hidden bg-green-900 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
          <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-green-200">가격 안내</Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="hover:text-green-200">작업 갤러리</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-green-200">FAQ</Link>
          <Link href="/estimate" onClick={() => setOpen(false)} className="bg-orange-500 text-center px-4 py-2 rounded-full font-semibold">
            📝 무료 견적 신청
          </Link>
        </nav>
      )}
    </header>
  );
}
