import { useState } from 'react';

// 현재 선택된 플레이리스트 상태를 관리하는 훅
const usePlaylistStore = () => {
  const [myPlaylist, setMyPlaylist] = useState<any[]>([]);  // 내 플레이리스트 상태

  const addToPlaylist = (playlist: any) => {
    setMyPlaylist([...myPlaylist, playlist]);  // 플레이리스트 추가
  };

  return {
    myPlaylist,
    addToPlaylist,
  };
};

export default usePlaylistStore;
