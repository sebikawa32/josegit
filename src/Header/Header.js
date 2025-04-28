import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMarathonDropdownOpen, setIsMarathonDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);

  const toggleMarathonDropdown = () => {
    setIsMarathonDropdownOpen(!isMarathonDropdownOpen);
  };

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
  };

  const toggleTrainingDropdown = () => {
    setIsTrainingDropdownOpen(!isTrainingDropdownOpen);
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        {/* 왼쪽: 로고 */}
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <h1>Runmate</h1>
          </Link>
        </div>

        {/* 가운데: 메뉴 */}
        <div className="nav-center">
          <ul className="nav-links">
            {/* 대회 드롭다운 */}
            <li 
              className="dropdown" 
              onMouseEnter={toggleMarathonDropdown} 
              onMouseLeave={toggleMarathonDropdown}
            >
              <span className="dropdown-title">대회 ▾</span>
              {isMarathonDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/MarathonSearch">대회검색</Link></li>
                  <li><Link to="/MarathonSchedule">대회일정</Link></li>
                </ul>
              )}
            </li>

            {/* 커뮤니티 드롭다운 */}
            <li 
              className="dropdown" 
              onMouseEnter={toggleCommunityDropdown} 
              onMouseLeave={toggleCommunityDropdown}
            >
              <span className="dropdown-title">커뮤니티 ▾</span>
              {isCommunityDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/Community/Board">게시판</Link></li>
                  <li><Link to="/Community/Crew">크루모집</Link></li>
                </ul>
              )}
            </li>

            {/* 훈련플래너 드롭다운 */}
            <li 
              className="dropdown" 
              onMouseEnter={toggleTrainingDropdown} 
              onMouseLeave={toggleTrainingDropdown}
            >
              <span className="dropdown-title">훈련플래너 ▾</span>
              {isTrainingDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/TrainingPlans">훈련계획</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* 오른쪽: 알림, MY */}
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/Notification">🔔</Link></li>
            <li><Link to="/My">MY</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;