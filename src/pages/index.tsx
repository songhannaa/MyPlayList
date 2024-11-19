import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PlaylistCard from '../components/PlaylistCard';
import { fetchTrendingPlaylists } from '../utils/api';

const Home: React.FC = () => {
  const [playlists, setPlaylists] = useState<any[]>([]);  // 플레이리스트 상태

  // useEffect(() => {
  //   // 플레이리스트 정보를 가져오는 함수
  //   fetchTrendingPlaylists().then(data => setPlaylists(data));
  // }, []);

  // const handlePlaylistClick = (playlistId: string) => {
  //   console.log(`플레이리스트 클릭: ${playlistId}`);  // 클릭된 플레이리스트 ID 출력
  // };

  return (
    <Layout>
      <h2>현재 인기있는 플레이리스트</h2>
      <div>
        {/* {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            onClick={() => handlePlaylistClick(playlist.id)}
          />
        ))} */}
      </div>
    </Layout>
  );
};

export default Home;
