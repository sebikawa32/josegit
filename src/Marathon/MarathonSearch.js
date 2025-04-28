import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MarathonSearch.css";

function MarathonSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [filterType, setFilterType] = useState("");

  // 인기 검색어 목록 (예시)
  const popularKeywords = [
    "서울 마라톤",
    "부산 하프 마라톤",
    "2025년 마라톤",
    "10km 대회",
    "여름 마라톤"
  ];

  const handleSearch = () => {
    // 실제 대회 데이터를 가져오는 로직이 필요
    console.log(searchTerm, filterDate, filterRegion, filterType);
  };

  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
    handleSearch(); // 키워드 클릭 시 자동으로 검색
  };

  return (
    <div className="marathon-search">
      <h2>대회 검색</h2>

      {/* 검색 + 필터 한 박스 */}
      <div className="search-bar">
        {/* 검색 입력창 */}
        <input
          type="text"
          placeholder="대회 이름으로 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 날짜 필터 */}
        <select onChange={(e) => setFilterDate(e.target.value)} value={filterDate}>
          <option value="">날짜 전체</option>
          <option value="upcoming">다가오는 대회</option>
          <option value="past">지난 대회</option>
        </select>

        {/* 지역 필터 */}
        <input
          type="text"
          placeholder="지역"
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
        />

        {/* 대회 종류 필터 */}
        <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
          <option value="">종류 전체</option>
          <option value="marathon">풀코스 마라톤</option>
          <option value="half-marathon">하프 마라톤</option>
          <option value="10k">10km</option>
          <option value="5k">5km</option>
        </select>

        {/* 검색 버튼 */}
        <button onClick={handleSearch}>검색</button>
      </div>

      {/* 인기 검색어 목록 */}
      <div className="popular-keywords">
        <h3>인기 검색어</h3>
        <ul>
          {popularKeywords.map((keyword, index) => (
            <li key={index} onClick={() => handleKeywordClick(keyword)}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      {/* 대회 목록 */}
      <div className="marathon-recommend">
  <h3>추천 대회</h3>
  <div className="marathon-list">
    <div className="marathon-card">
      <h3>서울 마라톤</h3>
      <p>2025년 10월 10일</p>
      <p>서울</p>
      <Link to="/MarathonDetail">상세 보기</Link>
    </div>
    <div className="marathon-card">
      <h3>부산 하프 마라톤</h3>
      <p>2025년 5월 15일</p>
      <p>부산</p>
      <Link to="/MarathonDetail">상세 보기</Link>
    </div>
  </div>
</div> 
</div>
);

}

export default MarathonSearch;