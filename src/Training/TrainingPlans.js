import React, { useState } from 'react';
import './TrainingPlans.css';

const TrainingPlans = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weeklyWorkouts, setWeeklyWorkouts] = useState('');
  const [trainingPlan, setTrainingPlan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // GPT에게 훈련 계획을 요청하는 함수 (나중에 실제 API 연동으로 수정)
    const plan = `훈련 시작일: ${startDate}, 종료일: ${endDate}, 주간 운동 횟수: ${weeklyWorkouts}회에 맞는 훈련 계획을 제공해주세요.`;
    setTrainingPlan(plan);
  };

  return (
    <div className="training-plans-container">
      <h1>🏃‍♂️ 훈련 계획 작성</h1>
      
      <form onSubmit={handleSubmit} className="training-form">
        <div className="input-group">
          <label htmlFor="startDate">훈련 시작일</label>
          <input 
            type="date" 
            id="startDate" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="endDate">훈련 종료일</label>
          <input 
            type="date" 
            id="endDate" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="weeklyWorkouts">주간 운동 횟수</label>
          <input 
            type="number" 
            id="weeklyWorkouts" 
            value={weeklyWorkouts} 
            onChange={(e) => setWeeklyWorkouts(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">훈련 계획 요청</button>
      </form>

      {/* 훈련 계획 출력 */}
      {trainingPlan && (
        <div className="training-plan-result">
          <h2>📝 훈련 계획</h2>
          <p>{trainingPlan}</p>
        </div>
      )}
    </div>
  );
};

export default TrainingPlans;