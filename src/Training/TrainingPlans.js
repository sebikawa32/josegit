import React from "react";

function TrainingPlans() {
  return (
    <div className="training-plans">
      <h2>훈련 계획</h2>
      <div className="plan">
        <h3>초급 훈련 계획</h3>
        <p>주 3회 훈련, 5km 목표</p>
        <button>계획 보기</button>
      </div>
      <div className="plan">
        <h3>중급 훈련 계획</h3>
        <p>주 4회 훈련, 10km 목표</p>
        <button>계획 보기</button>
      </div>
    </div>
  );
}

export default TrainingPlans;
