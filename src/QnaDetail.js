import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 700px;
  background-color: gray;
`;
const Box = styled.div`
  margin: 0 auto;
  width: 57%;
  margin-top: 100px;
`;
const Top = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 10px;
`;
const Category = styled.div`
  margin-top: -2px;
  padding-right: 15px;
  border-right: 1px solid #c8c8c8;
`;
const DateDiv = styled.div`
  padding-left: 15px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 30px 0px;
  border-bottom: 2px solid #c8c8c8;
`;
const Content = styled.div`
  height: auto;
  padding: 50px 10px;
  border-bottom: 2px solid #c8c8c8;
`;
const AnswerBox = styled.textarea`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 95%;
  height: 200px;
  margin-top: 200px;
  border: 1px solid #333;
  padding: 10px;
`;

const PostButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 30px;
  border: none;
  margin: 20px 30px;
`;

const ToBack = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #333;
  background-color: white;
  font-size: 1rem;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  border-top: 2px solid #c8c8c8;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export function QnaDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const qna = location.state?.qna;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!qna?.id) return;
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/reply/get?qnaId=${qna.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data); // 댓글 데이터를 상태로 저장
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [qna?.id]);

  const handlePostComment = async () => {
    if (!comment.trim()) return;

    try {
      const token = localStorage.getItem("JWT-Token");
      // 서버에 댓글 저장하는 API 요청 (가정)
      const response = await fetch("http://localhost:8080/api/reply/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          qnaId: qna.id, // 질문 ID
          text: comment,
          date: new Date().toISOString(), // 저장할 때 현재 시간도 함께 보냄
        }),
      });

      if (response.ok) {
        setComment(""); // 입력창 초기화
        // 새 댓글 리스트에 추가
        const newComment = await response.json();
        setComments([newComment, ...comments]); // 새로운 댓글을 상단에 추가
      } else if (response.status === 401) {
        console.error("Unauthorized. Please check your authentication.");
        navigate("/login");
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (!qna) {
    return <div>Q&A를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Img></Img>
      <Box>
        <Top>
          <Category>1:1 문의</Category>
          <DateDiv>{qna.writeDate}</DateDiv>
        </Top>
        <Title>{qna.title}</Title>
        <Content>{qna.text}</Content>

        <div>
          {comments.map((cmt, index) => (
            <div
              key={index}
              style={{ padding: "10px", borderBottom: "1px solid #c8c8c8" }}
            >
              <strong>{cmt.date}</strong>
              <p>{cmt.text}</p>
            </div>
          ))}
        </div>

        <AnswerBox
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></AnswerBox>
        <PostButtonWrapper>
          <PostButton onClick={handlePostComment}>답변 등록</PostButton>
        </PostButtonWrapper>

        <ToBackWrapper>
          <ToBack onClick={() => window.history.back()}>목록으로</ToBack>
        </ToBackWrapper>
      </Box>
    </>
  );
}
