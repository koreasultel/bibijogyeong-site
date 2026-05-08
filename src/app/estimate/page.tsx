'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function EstimatePage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/3659899@naver.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('done');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">견적 신청</h1>
      <p className="text-gray-500 mb-2">30분 내 1차 답변 드립니다 (09:00~19:00)</p>
      <div className="flex gap-4 text-sm text-green-700 font-medium mb-8">
        <span>✅ 견적은 무료</span>
        <span>✅ 사진만 보내도 OK</span>
        <span>✅ 진행 여부 자유</span>
      </div>

      {status === 'done' ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <p className="text-2xl mb-2">✅</p>
          <p className="font-bold text-green-900 text-lg mb-1">견적 신청 완료!</p>
          <p className="text-gray-600 text-sm">30분 내로 연락드리겠습니다. 감사합니다.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="[비비조경] 새 견적 신청" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
            <input name="이름" required placeholder="홍길동" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">연락처 <span className="text-red-500">*</span></label>
            <input name="연락처" required type="tel" placeholder="010-0000-0000" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">신청 서비스 <span className="text-red-500">*</span></label>
            <select name="서비스" required className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
              <option value="">선택해주세요</option>
              <option>벌초 대행</option>
              <option>예초 작업</option>
              <option>제초제 살포</option>
              <option>연 2회 정기관리</option>
              <option>복합 (여러 서비스)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">작업 주소 <span className="text-red-500">*</span></label>
            <input name="작업주소" required placeholder="○○도 ○○시 ○○면 ○○리" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">분묘 기수</label>
              <input name="분묘기수" placeholder="예: 2기" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">면적 (평)</label>
              <input name="면적" placeholder="예: 50평" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">희망 작업 시기</label>
            <input name="희망시기" placeholder="예: 8월 중순" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">추가 요청사항</label>
            <textarea name="요청사항" rows={3} placeholder="현장 사진 URL, 특이사항 등 자유롭게 작성해주세요" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500">
            수집 항목: 이름·연락처·주소·서비스 내용 / 목적: 견적 제공 및 서비스 진행 / 보유기간: 서비스 완료 후 1년
          </div>

          <button type="submit" disabled={status === 'sending'}
            className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white font-bold py-4 rounded-full text-lg transition-colors">
            {status === 'sending' ? '전송 중...' : '📝 견적 신청하기'}
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">전송 실패. 카톡 또는 전화로 문의해주세요.</p>
          )}
        </form>
      )}
    </div>
  );
}
