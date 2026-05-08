import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '작업 갤러리 — 비비조경',
  description: '비비조경 실제 작업 전·후 사진. 벌초·예초·제초제·정기관리 모든 작업 사례를 공개합니다.',
};

const cases = [
  { id: 1, date: '준비 중', location: '강화군', type: '벌초 1기', label: '벌초 사례 1' },
  { id: 2, date: '준비 중', location: '김포시', type: '벌초 3기 정기관리', label: '정기관리 사례 1' },
  { id: 3, date: '준비 중', location: '파주시', type: '예초 200평', label: '예초 사례 1' },
  { id: 4, date: '준비 중', location: '양평군', type: '태양광 부지 제초제', label: '제초제 사례 1' },
];

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">작업 갤러리</h1>
      <p className="text-gray-500 mb-10">실제 작업 전·후 사진을 모두 공개합니다</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cases.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-2 gap-1 bg-gray-100">
              <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 text-sm">전</div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 text-sm">후</div>
            </div>
            <div className="p-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full mb-2">{c.type}</span>
              <p className="text-sm text-gray-600">📍 {c.location}</p>
              <p className="text-xs text-gray-400 mt-1">작업일: {c.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-green-50 rounded-2xl p-8">
        <p className="text-gray-600 mb-1">작업 사진은 매 작업마다 추가됩니다</p>
        <p className="text-sm text-gray-400">현재 사진 준비 중 — 곧 실제 작업 사례로 채워집니다</p>
      </div>
    </div>
  );
}
