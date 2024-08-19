import React from "react";
import { useLocation } from "react-router-dom";
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
  padding-right: 15px;
  border-right: 1px solid #c8c8c8;
`;
const Date = styled.div`
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
const AnswerBox = styled.input`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 95%;
  height: 200px;
  margin-top: 200px;

  border: 1px solid #333;
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
  const qna = location.state?.qna;

  if (!qna) {
    return <div>Q&A를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Img></Img>
      <Box>
        <Top>
          <Category>Q&A</Category>
          <Date>{qna.writeDate}</Date>
        </Top>
        <Title>{qna.question}</Title>
        <Content>{qna.content}</Content>
        <AnswerBox></AnswerBox>
        <PostButtonWrapper>
          <PostButton>답변 등록</PostButton>
        </PostButtonWrapper>

        <ToBackWrapper>
          <ToBack onClick={() => window.history.back()}>목록으로</ToBack>
        </ToBackWrapper>
      </Box>
    </>
  );
}
