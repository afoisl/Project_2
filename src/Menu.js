import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const SubMenu = styled.div`
  width: 100%;
  background-color: white;
  height: 0;
  opacity: 0;
  visibility: hidden;
  display: grid;
  grid-template-columns: 0.7fr 1fr 4.6fr 1.5fr 0.7fr;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 10;
  padding: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  background-color: white;
  height: 70px;
  display: grid;
  grid-template-columns: 0.7fr 1fr 4fr 1.5fr 0.7fr;
  position: relative;
`;

const MenuContainer = styled.div`
  position: relative;

  &:hover ${SubMenu} {
    height: 200px;
    opacity: 1;
    visibility: visible;
    padding: 10px 0px 40px 0px;
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
  margin: 0px 105px;
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

  // function sessionCurrent() {
  //   const jwtToken = sessionStorage.getItem("JWT-Token");
  //   if (!jwtToken) {
  //     console.log("인증이 필요합니다.");
  //     return;
  //   }
  //   axios
  //     .get("http://localhost:8080/api/user/current", {
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("데이터:", response.data);
  //       if (response.data.resultCode == "SUCCESS") {
  //         console.log("세션 유지");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("에러 발생:", error.response.data);
  //     });
  // }
  const handleLogout = (e) => {
    e.preventDefault(); // 링크의 기본 동작 방지
    sessionStorage.removeItem("JWT-Token");
    sessionStorage.removeItem("UserID");
    sessionStorage.removeItem("Authority");

    setIsLoggedIn(false);
    navigate(location.pathname, { replace: false });
    // document.cookie =
    //   "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    // localStorage.removeItem("authToken");
    // sessionStorage.removeItem("authToken");
  };

  return (
    <MenuContainer>
      <Header>
        <div></div>
        <Img>
          <MenuBtn to="/"></MenuBtn>
        </Img>
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
            <SubMenuBtn to="mypage/mylecture">학습현황</SubMenuBtn>
            <SubMenuBtn to="mypage/mylank">나의 랭킹</SubMenuBtn>
            <SubMenuBtn to="mypage/cart">장바구니</SubMenuBtn>
            <SubMenuBtn to="mypage/purchased">구매 내역</SubMenuBtn>
          </SubRight>
        )}
      </SubMenu>
    </MenuContainer>
  );
}
