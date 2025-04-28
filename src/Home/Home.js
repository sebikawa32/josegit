import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

       <h2>추천 대회</h2>
      <div className="marathon-list">
        {/* 추천 마라톤 목록 */}

        <div className="marathon-card">
          <Link to="/MarathonSearch" className="marathon-card-content">
            <h3>마라톤 대회 1</h3>
            <p>2025년 5월 15일</p>
          </Link>
        </div>

        <div className="marathon-card">
          <Link to="/MarathonSchedule" className="marathon-card-content">
            <h3>마라톤 대회 2</h3>
            <p>2025년 6월 20일</p>
          </Link>
        </div>

        <div className="marathon-card">
          <Link to="/MarathonSearch" className="marathon-card-content">
            <h3>무한도전 마라톤</h3>
            <p>2025년 5월 25일</p>
          </Link>
        </div>

        {/* 다른 대회도 여기에 추가 */}
      </div>


      <div className="community-board-list">
        {/* 커뮤니티 게시판 목록 */}
        <div className="community-board">
          <h3>
            <Link to="/Community/Board">게시판</Link>
          </h3>
          <ul className="community-board-posts">
            <li>
              <Link to="/Community/Board/Post1">
                <div className="post">
                  <h4>잘뛰는법 공유해드림</h4>
                  <p>글쓴이: 조봉팔 | 날짜: 2025-04-28</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Community/Board/Post2">
                <div className="post">
                  <h4>뛰다가 배아플때</h4>
                  <p>글쓴이: 콩비비 | 날짜: 2025-04-27</p>
                </div>
              </Link>
            </li>
            {/* 추가 게시글 여기에 */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;