import Link from 'next/link';

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex md:hidden">
      <a href="tel:01041198317" className="flex-1 flex flex-col items-center justify-center py-3 text-gray-700 hover:bg-gray-50 text-xs font-medium gap-1">
        <span className="text-lg">📞</span>
        전화상담
      </a>
      <a href="https://pf.kakao.com/_xXXXXXX" target="_blank" rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-yellow-600 hover:bg-yellow-50 text-xs font-medium gap-1 border-x border-gray-200">
        <span className="text-lg">💬</span>
        카톡상담
      </a>
      <Link href="/estimate" className="flex-1 flex flex-col items-center justify-center py-3 bg-green-700 text-white text-xs font-semibold gap-1">
        <span className="text-lg">📝</span>
        견적신청
      </Link>
    </div>
  );
}
