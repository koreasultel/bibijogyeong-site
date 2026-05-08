import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. 히어로 */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-green-200 text-sm font-medium mb-3 tracking-widest">서울 · 경기 · 강화</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            벌초·예초 <span className="text-orange-400">정찰제</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-2">작업 후 <strong className="text-white">전·후 사진</strong>으로 확인하세요</p>
          <p className="text-green-200 text-sm mb-8">1평당, 분묘 1기당 정해진 단가. 추가 비용 0원.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/estimate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg">
              📝 무료 견적 신청
            </Link>
            <a href="https://pf.kakao.com/_xXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg">
              💬 카톡으로 상담
            </a>
          </div>
        </div>
      </section>

      {/* 2. 신뢰 배지 */}
      <section className="bg-green-50 py-8 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-medium text-green-900">
          {[
            { icon: '🏢', text: '사업자등록 정식업체' },
            { icon: '🛡️', text: '배상책임보험 가입' },
            { icon: '🧾', text: '현금영수증·세금계산서' },
            { icon: '✅', text: '정찰제 — 추가비용 없음' },
          ].map((b) => (
            <div key={b.text} className="flex flex-col items-center gap-1 p-3 bg-white rounded-xl shadow-sm">
              <span className="text-2xl">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 서비스 4종 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-10">제공 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🌿', title: '벌초 대행', desc: '조상님 묘소 정성껏.\n1기당 정찰제로 부담 없이.' },
              { icon: '✂️', title: '예초 작업', desc: '일반 부지·태양광·전원주택.\n평당 단가 투명 공개.' },
              { icon: '💧', title: '제초제 살포', desc: '1개월 효과 보증.\n일반·강제초제 선택.' },
              { icon: '📅', title: '연 2회 정기관리 ★', desc: '봄·여름 자동 방문.\n단발 대비 15% 할인.' },
            ].map((s) => (
              <div key={s.title} className="border border-green-100 rounded-2xl p-5 hover:shadow-md transition-shadow bg-white">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-bold text-green-900 mt-2 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{s.desc}</p>
                <Link href="/pricing" className="mt-3 inline-block text-sm text-green-700 font-medium hover:underline">자세히 보기 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 가격 미리보기 */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">정해진 가격, 추가비용 없음</h2>
          <p className="text-gray-500 text-sm mb-8">견적 후 현장에서 절대 추가 청구 없음</p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            {[
              { service: '벌초 1기 (개인묘)', price: '10만원부터' },
              { service: '예초 작업', price: '평당 2,500원부터' },
              { service: '제초제 살포', price: '평당 2,000원부터' },
              { service: '연 2회 정기관리', price: '연 30만원부터' },
            ].map((r, i) => (
              <div key={r.service} className={`flex justify-between items-center px-6 py-4 ${i !== 3 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-gray-700">{r.service}</span>
                <span className="font-bold text-green-800">{r.price}</span>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="mt-6 inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            전체 가격표 보기 →
          </Link>
        </div>
      </section>

      {/* 5. 작업 프로세스 */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-10">작업 흐름</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '📝', title: '견적 신청', desc: '사이트·카톡·전화 어디서든.\n30분 내 1차 견적 발송.' },
              { step: '2', icon: '📅', title: '일정 확정', desc: '현장 또는 사진 기반 확정견적.\n원하시는 날짜로 예약.' },
              { step: '3', icon: '🌿', title: '작업 수행', desc: '숙련된 작업자가 직접.\n안전장비·배상보험 완비.' },
              { step: '4', icon: '📸', title: '전·후 사진 발송', desc: '작업 후 사진 발송.\n미진한 부분 즉시 수정.' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-bold text-green-900 mt-1 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 갤러리 미리보기 */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">작업 사례</h2>
          <p className="text-gray-500 text-sm mb-8">실제 작업 전·후 사진을 모두 공개합니다</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['벌초 1기', '예초 100평', '제초제 살포', '정기관리'].map((label) => (
              <div key={label} className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center text-gray-500 text-sm">
                📷 {label}
              </div>
            ))}
          </div>
          <Link href="/gallery" className="mt-6 inline-block text-green-700 font-semibold hover:underline">
            갤러리 전체 보기 →
          </Link>
        </div>
      </section>

      {/* 7. FAQ 4개 */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-8">자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              { q: '견적은 무료인가요?', a: '네, 사진·주소만 알려주시면 30분 내 1차 견적 무료입니다.' },
              { q: '작업 가능 지역이 어디까지인가요?', a: '서울·경기 전역·인천·강화 전 지역. 외곽은 출장비 5만원 가산됩니다.' },
              { q: '추석 직전에도 가능한가요?', a: '추석 30일 전부터 일정 마감이 빠릅니다. 8월 초 예약을 권장드립니다.' },
              { q: '작업이 마음에 안 들면요?', a: '작업 후 10분간 현장 대기, 미진한 부분 즉시 보완합니다.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-xl px-5 py-4 group">
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-green-700 text-lg">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq" className="text-green-700 font-semibold hover:underline">FAQ 전체 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 8. 마지막 CTA */}
      <section className="bg-green-800 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">지금 견적 받으세요</h2>
          <p className="text-green-200 mb-8">서울·경기·강화 어디든 30분 내 답변</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/estimate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors">
              📝 견적 신청하기
            </Link>
            <a href="https://pf.kakao.com/_xXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              💬 카톡 상담하기
            </a>
          </div>
          <p className="mt-4 text-green-300 text-sm">📞 010-4119-8317 (09:00~19:00)</p>
        </div>
      </section>
    </>
  );
}
