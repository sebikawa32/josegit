import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Board.css';

const posts = [
  { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글 내용입니다.', date: '2025-04-29' },
  { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글 내용입니다.', date: '2025-04-28' },
  { id: 3, title: '세 번째 게시글', content: '이것은 세 번째 게시글 내용입니다.', date: '2025-04-27' },
];

const BoardListPage = () => {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/board/${id}`);
  };

  return (
    <div className="board-list-container">
      <h2>게시판</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
            <div className="post-title">{post.title}</div>
            <div className="post-summary">{post.content.substring(0, 50)}...</div>
            <div className="post-date">{post.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardListPage;