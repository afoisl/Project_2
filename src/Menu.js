import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import logo from "./assets/img/로고.png";

const SubMenu = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  height: 0;
  opacity: 0;
  visibility: hidden;
  display: grid;
  grid-template-columns: 0.67fr 1fr 4.6fr 1.5fr 0.7fr;
  top: 70px;
  left: 0;
  z-index: 10;
  padding: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  height: 70px;
  display: grid;
  grid-template-columns: 0.7fr 1fr 4fr 1.5fr 0.7fr;
  transition: background-color 0.3s ease-in-out;
`;

const MenuContainer = styled.div`
  position: relative;

  &:hover ${SubMenu} {
    border-radius: 0 0 50% 50%;
    height: 180px;
    opacity: 1;
    visibility: visible;
    padding: 10px 0px 20px 0px;
  }
  &:hover ${Header} {
    background-color: #fff;
  }
  &:not(:hover) ${Header} {
    background-color: transparent;
    transition-delay: 0.01s;
  }
`;

const Img = styled.img`
  height: 50px;
  width: 76px;
  margin: 10px;
  background-size: cover;
`;

const MenuBtn = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  font-weight: 540;
  &:hover {
    color: #0d3276;
    font-weight: bold;
  }
`;

const SubMenuBtn = styled(Link)`
  padding: 5px;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  text-align: center;

  &:hover {
    color: #0d3276;
    font-weight: bold;
  }
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
  grid-template-columns: 2.2fr 1.35fr 1.95fr 1.7fr 1.87fr 1.57fr 2.3fr;
  gap: 3px;

  & > div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    text-align: center;
  }
`;

const SubRight = styled.div`
  width: 80px;
  margin: 0px 110px;
  padding: 0px 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken) {
      console.log("토큰 있음.");
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault(); // 링크의 기본 동작 방지
    sessionStorage.removeItem("JWT-Token");
    sessionStorage.removeItem("UserID");
    sessionStorage.removeItem("Authority");

    setIsLoggedIn(false);
    navigate(location.pathname, { replace: false });
  };

  return (
    <MenuContainer>
      <Header>
        <div></div>
        <a href="/">
          <Img src={logo} alt="logo"></Img>
        </a>
        <Center>
          <MenuBtn to="/intro/about">학원소개</MenuBtn>
          <MenuBtn to="/lecturelist">강의</MenuBtn>
          <MenuBtn to="/store">스토어</MenuBtn>
          <MenuBtn to="/mock"> 모의고사</MenuBtn>
          <MenuBtn to="/game">게임</MenuBtn>
          <MenuBtn to="/studyroom">스터디룸</MenuBtn>
          <MenuBtn to="/customer">고객센터</MenuBtn>
        </Center>
        <Right>
          {!isLoggedIn && (
            <MenuBtn to="/login" state={{ from: location.pathname }}>
              Login
            </MenuBtn>
          )}
          {!isLoggedIn && <MenuBtn to="/signup">Sign Up</MenuBtn>}
          {isLoggedIn && <MenuBtn to="/mypage/mylank">마이페이지</MenuBtn>}
          {isLoggedIn && <MenuBtn onClick={handleLogout}>Log Out</MenuBtn>}
        </Right>
      </Header>
      <SubMenu>
        <div></div>
        <div></div>
        <SubCenter>
          <div>
            <SubMenuBtn to="intro/about">About Us</SubMenuBtn>
            <SubMenuBtn to="intro/curriculum">커리큘럼</SubMenuBtn>
            <SubMenuBtn to="intro/address">오시는 길</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/lecturelist">전체강의</SubMenuBtn>
            <SubMenuBtn to="mypage/mylecture">학습현황</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/store">도서구매</SubMenuBtn>
            <SubMenuBtn to="/store">모의고사 구매권</SubMenuBtn>
          </div>
          <div>
            <SubMenuBtn to="/test">모의고사</SubMenuBtn>
            <SubMenuBtn to="/halloffame">명예의 전당</SubMenuBtn>
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
            <SubMenuBtn to="/customer">공지사항</SubMenuBtn>
            <SubMenuBtn to="/customer">Q n A</SubMenuBtn>
          </div>
        </SubCenter>
        {isLoggedIn && (
          <SubRight>
            <SubMenuBtn to="mypage/cart">장바구니</SubMenuBtn>
            <SubMenuBtn to="mypage/mylank">나의 랭킹</SubMenuBtn>
          </SubRight>
        )}
      </SubMenu>
    </MenuContainer>
  );
}
