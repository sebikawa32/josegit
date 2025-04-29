import React from "react";
import { Link } from "react-router-dom";
import './NotionBoard.css'; 

const notices = [
  { id: 1, title: "마라톤 행사 일정 변경", date: "2025-04-28", description: "마라톤 행사 일정이 변경되었습니다. 자세한 내용은 링크를 확인하세요." },
  { id: 2, title: "회원가입 이벤트", date: "2025-04-25", description: "지금 회원가입하면 마라톤 참가비 할인 혜택을 드립니다." },
  { id: 3, title: "마라톤 결과 발표", date: "2025-04-20", description: "지난 마라톤 대회의 결과가 발표되었습니다. 자세한 내용은 여기에서 확인하세요." },
  // 필요시 추가 공지사항
];

function NotionBoard() {
  return (
    <div className="notion-board-container">
      <h2>공지사항</h2>
      <ul className="notion-board-list">
        {notices.map((notice) => (
          <li key={notice.id} className="notion-board-item">
            <Link to={`/Community/BoardPage?id=${notice.id}`} className="notion-board-link">
              <div className="notion-board-title">{notice.title}</div>
              <div className="notion-board-date">{notice.date}</div>
              <div className="notion-board-description">{notice.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotionBoard;