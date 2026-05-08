import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '가격 안내 — 비비조경',
  description: '비비조경 정찰제 단가. 벌초·예초·제초제·정기관리 모든 가격을 투명하게 공개합니다.',
};

const tables = [
  {
    title: '🌿 벌초 대행',
    rows: [
      ['개인묘 1기 (30평 이하)', '100,000원'],
      ['개인묘 1기 (30~60평)', '130,000원'],
      ['개인묘 1기 (60~100평)', '160,000원'],
      ['문중묘·공원묘지 1기', '별도 견적'],
    ],
    note: '• 봉분+벌초+송풍기 마무리 포함\n• 도보 300m 초과 시 100m마다 1만원 가산',
  },
  {
    title: '✂️ 예초 작업',
    rows: [
      ['50평 미만', '평당 3,000원'],
      ['50~200평', '평당 2,500원'],
      ['200평 이상', '평당 2,000원'],
      ['임야·법면', '별도 견적'],
    ],
    note: '• 풀 높이 50cm 이상 시 10~20% 가산\n• 폐기물 반출 필요 시 별도 협의',
  },
  {
    title: '💧 제초제 살포',
    rows: [
      ['일반 제초제', '평당 2,000원'],
      ['강제초제 (잡목 포함)', '평당 3,000원'],
    ],
    note: '• 살포 후 1개월 내 효과 미진 시 1회 무상 재살포\n• 농림축산식품부 등록 제품만 사용',
  },
  {
    title: '📅 연 2회 정기관리',
    rows: [
      ['1기 / 30평 이하', '연 300,000원'],
      ['2~3기 / 30~80평', '연 500,000원'],
      ['4기 이상', '별도 견적'],
    ],
    note: '• 봄(5~6월) + 여름(8~9월) 각 1회\n• 단발 합계 대비 15% 할인\n• 추석 성수기 우선 배정',
  },
  {
    title: '➕ 부가 서비스',
    rows: [
      ['묘비·상석 청소', '30,000원~'],
      ['폐기물 반출 (1톤 기준)', '50,000원~'],
      ['사진 영상 촬영', '무료'],
    ],
    note: '',
  },
  {
    title: '🚗 출장비',
    rows: [
      ['서울·인천 시내', '무료'],
      ['경기도', '30,000원'],
      ['강화·외곽', '50,000원'],
    ],
    note: '• 현장 방문 견적 시 출장비 발생\n• 작업 진행 시 출장비 면제',
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">가격 안내</h1>
      <p className="text-gray-500 mb-10">정찰제 — 사전 안내 단가 외 추가비용 없음</p>

      <div className="space-y-8">
        {tables.map((t) => (
          <div key={t.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-green-700 text-white px-5 py-3 font-bold">{t.title}</div>
            <table className="w-full text-sm">
              <tbody>
                {t.rows.map(([item, price], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-gray-700">{item}</td>
                    <td className="px-5 py-3 text-right font-bold text-green-800">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {t.note && (
              <div className="px-5 py-3 bg-green-50 text-xs text-gray-600 whitespace-pre-line border-t border-green-100">
                {t.note}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-800 text-white rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">정확한 견적이 필요하신가요?</h2>
        <p className="text-green-200 text-sm mb-6">사진·주소만 알려주시면 30분 내 1차 견적 드립니다</p>
        <Link href="/estimate" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors">
          무료 견적 신청 →
        </Link>
      </div>
    </div>
  );
}
