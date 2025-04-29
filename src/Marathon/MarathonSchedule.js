import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MarathonSchedule.css'; 

const marathons = [
  { id: 1, name: '서울마라톤', date: '2025-05-10' },
  { id: 2, name: '부산마라톤', date: '2025-05-25' },
  { id: 3, name: '제주마라톤', date: '2025-06-01' },
];

const MarathonSchedule = () => {
  const navigate = useNavigate();
  const [today] = useState(new Date());
  const [sortedMarathons, setSortedMarathons] = useState([]);

  const calculateDDay = (date) => {
    const target = new Date(date);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const upcoming = marathons
      .map((m) => ({ ...m, dday: calculateDDay(m.date) }))
      .filter((m) => m.dday >= 0)
      .sort((a, b) => a.dday - b.dday);
    setSortedMarathons(upcoming);
  }, [today]);

  const isMarathonDate = (dateString) => {
    return marathons.some(m => m.date === dateString);
  };

  const handleMarathonClick = (id) => {
    navigate(`/marathon/${id}`);
  };

  const renderCalendar = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="calendar-cell empty" />);
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasMarathon = isMarathonDate(dateStr);

      calendar.push(
        <div
          key={day}
          className={`calendar-cell ${hasMarathon ? 'marathon-day' : ''}`}
        >
          {day}
          {hasMarathon && <div className="dot" />}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="marathon-schedule-container">
      {/* 왼쪽: 캘린더 */}
      <div className="calendar-section">
        <h2>🗓️ 이번 달 달력</h2>
        <div className="calendar-grid">
          {renderCalendar()}
        </div>
      </div>

      {/* 오른쪽: D-Day 리스트 */}
      <div className="list-section">
        <h2>🏃‍♂️ 다가오는 마라톤</h2>
        <ul className="marathon-list">
          {sortedMarathons.map(m => (
            <li
              key={m.id}
              className="marathon-item"
              onClick={() => handleMarathonClick(m.id)}
            >
              <div className="marathon-date"><strong>{new Date(m.date).toLocaleDateString()}</strong></div>
              <div className="marathon-name">D-{m.dday} {m.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarathonSchedule;