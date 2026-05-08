import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — 비비조경',
  description: '비비조경 자주 묻는 질문. 견적·예약·가격·결제·작업·지역·일정 모든 궁금증을 해결하세요.',
};

const faqs = [
  {
    category: '견적·예약',
    items: [
      { q: '견적은 어떻게 받나요?', a: '사이트 견적신청, 카카오톡, 전화 모두 가능합니다. 주소·분묘 기수·평수·사진을 보내주시면 30분 내 1차 견적 드립니다.' },
      { q: '견적은 유료인가요?', a: '사진·주소 기반 1차 견적은 100% 무료입니다. 현장 방문 견적은 출장비 5만원이 발생합니다.' },
      { q: '견적 받고 진행 안 해도 되나요?', a: '네, 견적만 받고 진행하지 않으셔도 됩니다.' },
    ],
  },
  {
    category: '가격·결제',
    items: [
      { q: '추가비용이 발생하나요?', a: '정찰제이므로 사전에 안내된 단가 외 추가비용은 없습니다. 단, 작업 중 도보거리 300m 초과·잡목 다량 발견 등 사전에 파악되지 않은 사정이 있을 경우 사전 동의 후 가산합니다.' },
      { q: '결제는 어떻게 하나요?', a: '계좌이체·카드·토스페이먼츠 모두 가능합니다. 작업 전 50%, 작업 후 50% 분할 결제도 가능합니다.' },
      { q: '세금계산서·현금영수증 발행되나요?', a: '네, 의뢰 시 사업자등록증 첨부해주시면 세금계산서, 개인 고객은 현금영수증 발행해드립니다.' },
    ],
  },
  {
    category: '작업·품질',
    items: [
      { q: '작업이 마음에 안 들면요?', a: '작업 후 전·후 사진 발송 후 10분간 현장에 대기합니다. 이때 알려주시는 부분은 즉시 보완해드립니다.' },
      { q: '작업 중 묘비가 파손되면요?', a: '비비조경은 배상책임보험에 가입되어 있어 보험으로 보상됩니다.' },
      { q: '비 오는 날도 작업하나요?', a: '안전·작업품질을 위해 강우 시 작업을 연기합니다. 전날 일정 조정 연락 드립니다.' },
    ],
  },
  {
    category: '지역·일정',
    items: [
      { q: '작업 가능 지역이 어디까지인가요?', a: '서울 전역·경기 전역·인천·강화 전 지역. 서울·인천 시내 무료, 경기 3만원, 강화·외곽 5만원 출장비.' },
      { q: '추석 직전에도 가능한가요?', a: '추석 30일 전부터는 일정이 마감되는 경우가 많습니다. 8월 초 이전 예약을 권장드리며, 정기관리 가입자는 우선 배정됩니다.' },
      { q: '정기관리는 어떻게 진행되나요?', a: '가입 후 봄(5~6월)·여름(8~9월) 두 번, 비비조경에서 먼저 연락드려 일정 잡습니다.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">자주 묻는 질문</h1>
      <p className="text-gray-500 mb-10">궁금한 게 있으면 언제든 카톡이나 전화로 문의해주세요</p>

      <div className="space-y-8">
        {faqs.map((group) => (
          <div key={group.category}>
            <h2 className="text-sm font-bold text-green-700 uppercase tracking-widest mb-3">{group.category}</h2>
            <div className="space-y-3">
              {group.items.map((faq) => (
                <details key={faq.q} className="bg-white border border-gray-200 rounded-xl px-5 py-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-green-700 text-lg flex-shrink-0 ml-2">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-800 text-white rounded-2xl p-8 text-center">
        <p className="font-bold text-lg mb-2">더 궁금한 게 있으신가요?</p>
        <p className="text-green-200 text-sm mb-6">30분 내 답변 드립니다</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/estimate" className="bg-orange-500 hover:bg-orange-600 font-bold px-6 py-3 rounded-full transition-colors">
            견적 신청하기
          </Link>
          <a href="tel:01041198317" className="bg-white text-green-800 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
            📞 010-4119-8317
          </a>
        </div>
      </div>
    </div>
  );
}
