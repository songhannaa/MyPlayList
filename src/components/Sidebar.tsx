// components/Sidebar.tsx
import Link from 'next/link';  // 페이지 이동을 위한 Link 임포트
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <ul>
        <li>
          <Link href="/">홈</Link>  {/* 메인 페이지로 이동 */}
        </li>
        <li>
          <Link href="/search">검색</Link>  {/* 검색 페이지로 이동 */}
        </li>
        <li>
          <Link href="/my-playlist">내 플레이리스트</Link>  {/* 내 플레이리스트 페이지로 이동 */}
        </li>
        <li>
          <Link href="/mood">기분에 맞는 추천</Link>  {/* 기분 추천 페이지로 이동 */}
        </li>
      </ul>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    sidebar: {
      width: '250px',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
};

export default Sidebar;
