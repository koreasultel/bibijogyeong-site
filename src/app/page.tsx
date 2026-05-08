import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. 히어로 — 풀스크린 다크 그린 배경 */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: 'calc(100svh - 64px)',
          background: 'linear-gradient(160deg, #0c1f0c 0%, #0f2d0f 25%, #1a5c1a 55%, #0f2d0f 80%, #0c1f0c 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-20">
          <p className="text-green-400 text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            서울 · 경기 · 인천 · 강화
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            벌초·예초<br />
            <span className="text-orange-400">정찰제</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-3">
            1기당·1평당 정해진 단가. 추가비용 0원.
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-12">
            작업 후 <strong className="text-white">전·후 사진</strong>으로 직접 확인하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl"
            >
              📝 무료 견적 신청
            </Link>
            <a
              href="tel:01041198317"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-green-900 font-bold px-10 py-4 rounded-full text-lg transition-all"
            >
              📞 010-4119-8317
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.3em] select-none">
          SCROLL ↓
        </div>
      </section>

      {/* 2. 신뢰 배지 */}
      <section className="bg-white border-b border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🏢', text: '사업자등록 정식업체' },
            { icon: '🛡️', text: '배상책임보험 가입' },
            { icon: '🧾', text: '현금영수증·세금계산서' },
            { icon: '✅', text: '정찰제 — 추가비용 없음' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
              <span className="text-xl flex-shrink-0">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 서비스 4종 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">제공 서비스</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌿', title: '벌초 대행', desc: '조상님 묘소 정성껏.\n1기당 정찰제로 부담 없이.' },
              { icon: '✂️', title: '예초 작업', desc: '일반 부지·태양광·전원주택.\n평당 단가 투명 공개.' },
              { icon: '💧', title: '제초제 살포', desc: '1개월 효과 보증.\n일반·강제초제 선택.' },
              { icon: '📅', title: '연 2회 정기관리', desc: '봄·여름 자동 방문.\n단발 대비 15% 할인. ★' },
            ].map((s) => (
              <div key={s.title} className="group border border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all bg-white">
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed mb-4">{s.desc}</p>
                <Link href="/pricing" className="text-sm text-green-700 font-semibold group-hover:underline">자세히 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 가격 미리보기 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">정해진 가격</h2>
            <p className="text-gray-500 text-sm">견적 후 현장에서 절대 추가 청구 없음</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            {[
              { service: '벌초 1기 (개인묘 30평 이하)', price: '100,000원' },
              { service: '예초 작업', price: '평당 2,500원~' },
              { service: '제초제 살포', price: '평당 2,000원~' },
              { service: '연 2회 정기관리', price: '연 300,000원~' },
            ].map((r, i) => (
              <div key={r.service} className={`flex justify-between items-center px-6 py-5 ${i !== 3 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-gray-700">{r.service}</span>
                <span className="font-bold text-green-800 text-lg">{r.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="inline-block bg-green-800 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full transition-colors">
              전체 가격표 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 작업 프로세스 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">작업 흐름</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: '📝', title: '견적 신청', desc: '사이트·카톡·전화 어디서든\n30분 내 1차 견적 발송' },
              { step: '02', icon: '📅', title: '일정 확정', desc: '사진 기반 확정 견적\n원하시는 날짜로 예약' },
              { step: '03', icon: '🌿', title: '작업 수행', desc: '숙련된 작업자 직접 시행\n안전장비·배상보험 완비' },
              { step: '04', icon: '📸', title: '전·후 사진', desc: '작업 후 즉시 사진 발송\n미진한 부분 즉시 수정' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <p className="text-5xl font-black text-gray-100 mb-1 leading-none">{p.step}</p>
                <span className="text-2xl block mb-2">{p.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1.5">{p.title}</h3>
                <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 갤러리 미리보기 */}
      <section className="py-20 px-4 bg-[#0f2d0f]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">GALLERY</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">작업 사례</h2>
          <p className="text-green-200 text-sm mb-10">실제 작업 전·후 사진을 모두 공개합니다</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {['벌초 1기', '예초 100평', '제초제 살포', '정기관리'].map((label) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl aspect-square flex flex-col items-center justify-center text-green-300 text-sm gap-2">
                <span className="text-3xl">📷</span>
                <span className="font-medium">{label}</span>
                <span className="text-xs text-green-500">준비 중</span>
              </div>
            ))}
          </div>
          <Link href="/gallery" className="inline-block border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold px-8 py-3 rounded-full transition-all">
            갤러리 전체 보기 →
          </Link>
        </div>
      </section>

      {/* 7. FAQ 4개 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">자주 묻는 질문</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: '견적은 무료인가요?', a: '네, 사진·주소만 알려주시면 30분 내 1차 견적 무료입니다.' },
              { q: '작업 가능 지역이 어디까지인가요?', a: '서울·경기 전역·인천·강화 전 지역. 외곽은 출장비 5만원 가산됩니다.' },
              { q: '추석 직전에도 가능한가요?', a: '추석 30일 전부터 일정 마감이 빠릅니다. 8월 초 예약을 권장드립니다.' },
              { q: '작업이 마음에 안 들면요?', a: '작업 후 10분간 현장 대기, 미진한 부분 즉시 보완합니다.' },
            ].map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl px-5 py-4">
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <span className="text-green-700 text-xl flex-shrink-0 leading-none">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-green-700 font-semibold hover:underline text-sm">자주 묻는 질문 전체 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 8. 마지막 CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">지금 무료 견적 받으세요</h2>
          <p className="text-gray-400 mb-10">서울·경기·강화 어디든 30분 내 답변</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all"
            >
              📝 견적 신청하기
            </Link>
            <a
              href="tel:01041198317"
              className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 rounded-full text-lg transition-all"
            >
              📞 010-4119-8317
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">운영시간 09:00 ~ 19:00</p>
        </div>
      </section>
    </>
  );
}
