import React, { useState } from 'react';
import Layout from '../components/Layout';

// 검색 페이지
const Search: React.FC = () => {
  const [query, setQuery] = useState('');  // 검색어 상태

  const handleSearch = () => {
    console.log(`검색어: ${query}`);  // 검색어 출력
    // 검색 로직 추가 가능
  };

  return (
    <Layout>
      <h2>플레이리스트 검색</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  // 검색어 업데이트
        placeholder="검색어 입력"
      />
      <button onClick={handleSearch}>검색</button>
    </Layout>
  );
};

export default Search;
