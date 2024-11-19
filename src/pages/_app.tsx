// pages/_app.tsx
import '../styles/globals.css'; // 글로벌 스타일 가져오기
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Layout 컴포넌트를 여기서 사용할 수도 있음 */}
      <Component {...pageProps} /> {/* 개별 페이지를 렌더링 */}
    </div>
  );
}
