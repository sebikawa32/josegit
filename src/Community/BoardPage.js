import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BoardPage.css';

const posts = [
  { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글 내용입니다. 아주 중요한 내용이 있습니다.', date: '2025-04-29' },
  { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글 내용입니다. 더 많은 정보가 포함되어 있습니다.', date: '2025-04-28' },
  { id: 3, title: '세 번째 게시글', content: '이것은 세 번째 게시글 내용입니다. 추가적인 설명이 포함됩니다.', date: '2025-04-27' },
];

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const currentPost = posts.find((p) => p.id === parseInt(id));
    setPost(currentPost);
  }, [id]);

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <div className="post-date">{post.date}</div>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default PostDetailPage;