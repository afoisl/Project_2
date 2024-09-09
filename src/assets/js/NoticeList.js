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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-weight: 200;
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

export function NoticeList({ notices, onNoticeClick }) {
  const navigate = useNavigate();

  const handlePostButtonClick = () => {
    navigate("/notice/write");
  };
  return (
    <>
      <List>
        {notices.map((notice) => (
          <ContList key={notice.noticeId} onClick={() => onNoticeClick(notice)}>
            <Title>{notice.title}</Title>
            <Content>{notice.writeDate}</Content>
          </ContList>
        ))}
        <PostButtonWrapper>
          <PostButton onClick={handlePostButtonClick}>글쓰기</PostButton>
        </PostButtonWrapper>
      </List>
    </>
  );
}
