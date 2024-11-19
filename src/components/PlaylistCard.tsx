import React from 'react';

// 플레이리스트를 표시하는 카드 컴포넌트입니다.
interface PlaylistCardProps {
  title: string;  // 플레이리스트 제목
  description: string;  // 플레이리스트 설명
  onClick: () => void;  // 클릭 시 동작
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, onClick }) => {
  return (
    <div onClick={onClick} className="playlist-card">
      <h2>{title}</h2>  {/* 플레이리스트 제목 */}
      <p>{description}</p>  {/* 플레이리스트 설명 */}
    </div>
  );
};

export default PlaylistCard;
