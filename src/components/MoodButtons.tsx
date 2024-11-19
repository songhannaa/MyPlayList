import React from 'react';

interface MoodButtonProps {
  mood: string;  // 버튼에 표시될 기분 텍스트
  onClick: (mood: string) => void;  // 클릭 시 기분 값 전달
}

const MoodButton: React.FC<MoodButtonProps> = ({ mood, onClick }) => {
  return (
    <button onClick={() => onClick(mood)}>
      {mood} {/* 기분 텍스트 표시 */}
    </button>
  );
};

export default MoodButton;
