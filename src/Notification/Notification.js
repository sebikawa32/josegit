// src/Notification.js
import React, { useState } from "react";
import "./Notification.css";


// 더미 알림 데이터
const notifications = [
  { id: 1, message: "새로운 마라톤 대회가 등록되었습니다.", date: "2025-04-29" },
  { id: 2, message: "훈련 계획이 업데이트되었습니다.", date: "2025-04-28" },
  { id: 3, message: "마라톤 대회 신청 마감일이 다가오고 있습니다.", date: "2025-04-27" },
  { id: 4, message: "새로운 훈련 세션이 추가되었습니다.", date: "2025-04-25" },
];

function Notification() {
  const [notificationsList] = useState(notifications);

  return (
    <div className="notification-container">
      <h2>알림 센터</h2>
      
      <div className="notification-list">
        {notificationsList.length > 0 ? (
          notificationsList.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-message">{notification.message}</div>
              <div className="notification-date">{notification.date}</div>
            </div>
          ))
        ) : (
          <div>알림이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Notification;