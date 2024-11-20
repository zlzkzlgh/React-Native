import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";

const PostDetail2 = () => {
  const { id } = useParams(); // URL에서 게시글 ID를 가져옴
  const { boardList } = useContext(BoardContext); // Context에서 게시글 리스트 가져오기
  const navigate = useNavigate();

  // 해당 ID에 맞는 게시글 찾기
  const post = boardList.find((item) => item.id === parseInt(id));

  // 게시글이 없는 경우
  if (!post) {
    return (
      <div>
        <h1>게시글을 찾을 수 없습니다.</h1>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <div>
        <h2>{post.title}</h2>
        <p><strong>작성자:</strong> {post.author}</p>
        <p>{post.writingTime}</p>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          {post.content}
        </div>
      </div>
      <button onClick={() => navigate("/")}>목록으로 돌아가기</button>
    </div>
  );
};

export default PostDetail2;
