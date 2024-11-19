// 유튜브 API를 호출하는 함수입니다.
export const fetchTrendingPlaylists = async () => {
    // 실제 API 호출은 여기에 작성
    const response = await fetch('https://api.example.com/trending');
    const data = await response.json();
    return data;
  };
  