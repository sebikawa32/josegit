// SearchPage.js
import React, { useState } from "react";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const events = [
    { name: "서울 마라톤", date: "2025-05-15" },
    { name: "부산 마라톤", date: "2025-06-20" },
    { name: "대구 마라톤", date: "2025-07-10" },
  ];

  return (
    <div className="search-container">
      <h1>대회 검색</h1>
      <input
        type="text"
        placeholder="대회명 검색..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="events-list">
        {events
          .filter((event) =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <button>참가하기</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;