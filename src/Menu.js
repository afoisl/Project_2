import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";

const SubMenu = styled.div`
  width: 100%;
  background-color: white;
  height: 200px;
  display: none;
  grid-template-columns: 0.7fr 1fr 4.5fr 1.5fr 0.7fr;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 10;
  padding: 10px 0px 40px 0px;
`;

const Header = styled.div`
  width: 100%;
  background-color: white;
  height: 70px;
  display: grid;
  grid-template-columns: 0.7fr 1fr 4fr 1.5fr 0.7fr;

  position: relative;

  &:hover + ${SubMenu} {
    display: grid;
    transform: translateY(0);
    transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1),
      opacity 1s cubic-bezier(0.25, 1, 0.5, 1);
  }
`;

const Img = styled.div`
  background-color: gray;
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const MenuBtn = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
`;

const SubMenuBtn = styled(Link)`
  padding: 5px;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  justify-content: right;
`;

const SubCenter = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1.3fr 2fr 1.7fr 1.85fr 1.6fr 2.4fr;
  gap: 3px;

  & > div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    text-align: center;
  }
`;

const SubRight = styled.div`
  width: 80px;
  margin: 0px 90px;
  padding: 0px 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const MenuContainer = styled.div`
  position: relative;

  &:hover ${SubMenu} {
    display: grid;
  }
`;

export function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <MenuContainer>
      <Header>
        <div></div>
        <Img>
          <MenuBtn to="/"></MenuBtn>
        </Img>
        <Center>
          <MenuBtn to="/about">학원소개</MenuBtn>
          <MenuBtn to="/lecturelist">강의</MenuBtn>
          <MenuBtn to="/store">스토어</MenuBtn>
          <MenuBtn to="/test"> 모의고사</MenuBtn>
          <MenuBtn to="/game">게임</MenuBtn>
          <MenuBtn to="/studyroom">스터디룸</MenuBtn>
          <MenuBtn to="/customer">고객센터</MenuBtn>
        </Center>
        <Right>
          {!isLoggedIn && <MenuBtn to="/login">Login</MenuBtn>}
          {!isLoggedIn && <MenuBtn to="/signup">Sign Up</MenuBtn>}
          {isLoggedIn && <MenuBtn to="/mypage">마이페이지</MenuBtn>}
          {isLoggedIn && <MenuBtn to="/mypage">Log Out</MenuBtn>}
        </Right>
      </Header>
      <SubMenu>
        <div></div>
        <div></div>
        <SubCenter>
          <div>
            <SubMenuBtn to="/about">About Us</SubMenuBtn>
            <SubMenuBtn to="/about">커리큘럼</SubMenuBtn>
            <SubMenuBtn to="/about">오시는 길</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/lectureList">전체강의</SubMenuBtn>
            <SubMenuBtn to="/mylecture">수강현황</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/store">도서구매</SubMenuBtn>
            <SubMenuBtn to="/store">모의고사 구매권</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/test">모의고사</SubMenuBtn>
            <SubMenuBtn to="/test">명예의 전당</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/game">플레이센터</SubMenuBtn>
            <SubMenuBtn to="/game">랭킹</SubMenuBtn>
            <SubMenuBtn to="/gameshop">상점</SubMenuBtn>
            <SubMenuBtn to="/gameshop">출석체크</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/studyroom">커뮤니티</SubMenuBtn>
            <SubMenuBtn to="/speciallecroom">실시간특강</SubMenuBtn>
            <SubMenuBtn to="/grouplecroom">그룹수강</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/customer">Q n A</SubMenuBtn>
            <SubMenuBtn to="/customer">공지사항</SubMenuBtn>
          </div>
        </SubCenter>
        {isLoggedIn && (
          <SubRight>
            <SubMenuBtn to="/mylecture">학습현황</SubMenuBtn>
            <SubMenuBtn to="/mypage">나의 랭킹</SubMenuBtn>
            <SubMenuBtn to="/cart">장바구니</SubMenuBtn>
            <SubMenuBtn to="/purchased">구매 내역</SubMenuBtn>
          </SubRight>
        )}
      </SubMenu>
    </MenuContainer>
  );
}
