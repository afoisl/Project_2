import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContList = styled.div`
  margin: 0 auto;
  width: 57%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
`;

const List = styled.div``;

const Title = styled.div`
  padding-left: 10px;
  font-size: 1.2rem;
  margin: 20px 0;
  font-weight: 600;
`;

const Writer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-weight: 200;
`;

const Right = styled.div`
  display: flex;
  gap: 50px;
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

const PostButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`;

export function QnaList({ qnas, onQnaClick }) {
  const navigate = useNavigate();

  const handlePostButtonClick = () => {
    navigate("/qna/write");
  };

  console.log("QNA List Data:", qnas);

  return (
    <>
      <List>
        {qnas.map((qna) => (
          <ContList key={qna.qnaId} onClick={() => onQnaClick(qna)}>
            <Title>{qna.title}</Title>
            <Right>
              <Writer>{qna.user.userId}</Writer>
              <Date>{qna.writeDate}</Date>
            </Right>
          </ContList>
        ))}
        <PostButtonWrapper>
          <PostButton onClick={handlePostButtonClick}>문의하기</PostButton>
        </PostButtonWrapper>
      </List>
    </>
  );
}
