import React, { useState } from 'react';
import './Crew.css';

const crewList = [
  { id: 1, title: '서울 마라톤 크루 모집', description: '서울 마라톤을 함께 준비할 크루를 모집합니다.', date: '2025-05-01' },
  { id: 2, title: '부산 마라톤 크루 모집', description: '부산 마라톤을 함께 달릴 크루를 찾습니다.', date: '2025-05-15' },
  { id: 3, title: '제주 마라톤 크루 모집', description: '제주 마라톤을 준비할 크루 모집!', date: '2025-06-01' },
];

const Crew = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCrewList = crewList.filter(crew => 
    crew.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crew.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crew-container">
      <h1>🏃‍♀️ 크루 모집</h1>
      
      {/* 검색바 */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="크루 제목 또는 설명 검색" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {/* 모집 목록 */}
      <ul className="crew-list">
        {filteredCrewList.map(crew => (
          <li key={crew.id} className="crew-item">
            <h3>{crew.title}</h3>
            <p>{crew.description}</p>
            <span className="crew-date">{crew.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crew;