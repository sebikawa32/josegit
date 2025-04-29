import React, { useState } from "react";
import './My.css';

const My = () => {
  const [userProfile, setUserProfile] = useState({
    name: '홍길동',
    email: 'hong@example.com',
    phone: '010-1234-5678',
  });

  const [trainingPlans, setTrainingPlans] = useState([
    { id: 1, name: '서울 마라톤 훈련', date: '2025-05-10' },
    { id: 2, name: '부산 마라톤 훈련', date: '2025-05-25' },
  ]);

  const [favoriteMarathons, setFavoriteMarathons] = useState([
    { id: 1, name: '서울 마라톤', date: '2025-05-10' },
    { id: 2, name: '부산 마라톤', date: '2025-05-25' },
  ]);

  return (
    <div className="my-page-container">
      <h1>👤 내 프로필</h1>
      <div className="profile-section">
        <h2>내 프로필 관리</h2>
        <p><strong>이름:</strong> {userProfile.name}</p>
        <p><strong>이메일:</strong> {userProfile.email}</p>
        <p><strong>전화번호:</strong> {userProfile.phone}</p>
        <button className="edit-button">프로필 수정</button>
      </div>

      <div className="training-section">
        <h2>내 훈련 관리</h2>
        {trainingPlans.length > 0 ? (
          <ul>
            {trainingPlans.map((plan) => (
              <li key={plan.id} className="training-item">
                {plan.name} (일정: {plan.date})
              </li>
            ))}
          </ul>
        ) : (
          <p>훈련 계획이 없습니다.</p>
        )}
        <button className="add-training-button">훈련 계획 추가</button>
      </div>

      <div className="favorite-marathons-section">
        <h2>내가 관심 등록한 마라톤</h2>
        {favoriteMarathons.length > 0 ? (
          <ul>
            {favoriteMarathons.map((marathon) => (
              <li key={marathon.id} className="marathon-item">
                {marathon.name} (일정: {marathon.date})
              </li>
            ))}
          </ul>
        ) : (
          <p>관심 있는 마라톤이 없습니다.</p>
        )}
        <button className="add-marathon-button">마라톤 추가</button>
      </div>
    </div>
  );
};

export default My;