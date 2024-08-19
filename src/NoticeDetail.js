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
`;
const ToBack = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: white;
  font-size: 1rem;
  margin: 30px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  border-top: 2px solid #c8c8c8;
`;

export function NoticeDetail() {
  const location = useLocation();
  const notice = location.state?.notice;

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Img></Img>
      <Box>
        <Top>
          <Category>공지사항</Category>
          <Date>{notice.writeDate}</Date>
        </Top>
        <Title>{notice.title}</Title>
        <Content>{notice.content}</Content>
        <ButtonWrapper>
          <ToBack onClick={() => window.history.back()}>목록으로</ToBack>
        </ButtonWrapper>
      </Box>
    </>
  );
}
