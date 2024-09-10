import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  background-color: darkgray;
  height: 80px;
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
`;

const MenuTitle = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 23px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  height: 1900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;

const Blank = styled.div`
  width: 100%;
  height: 200px;
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 550;
  padding: 100px;
  margin: 50px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin: 100px 0px;
  gap: 50px;
`;

const InfoTextBox1 = styled.div`
  text-align: right;
  padding: 50px 0px;
`;

const InfoImg1 = styled.div`
  height: 400px;
  width: 400px;
  background-color: gray;
`;

const InfoText1_1 = styled.div`
  font-size: 3rem;
  padding: 10px 0px;
  font-weight: 550;
`;

const InfoText1_2 = styled.div`
  font-size: 2rem;
  padding: 10px 0px;
`;

const InfoTextBox2 = styled.div`
  text-align: left;
  padding: 50px 0px;
`;

const InfoImg2 = styled.div`
  height: 400px;
  width: 400px;
  background-color: gray;
  justify-self: right;
`;

const InfoText2_1 = styled.div`
  font-size: 3rem;
  padding: 10px 0px;
  font-weight: 550;
`;

const InfoText2_2 = styled.div`
  font-size: 2rem;
  padding: 10px 0px;
`;

const MidBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function About() {
  return (
    <>
      <Header>
        <Img></Img>
        <MenuBar>
          <div></div>
          <TitleWrapper>
            <MenuTitle to="/intro/about">About Us</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <MenuTitle to="/intro/curriculum">커리큘럼</MenuTitle>
          <MenuTitle to="/intro/address">오시는 길</MenuTitle>
          <div></div>
        </MenuBar>
      </Header>
      <Body>
        <Container>
          <Blank></Blank>
          <Title>인투어학원은</Title>
          <InfoWrapper>
            <InfoImg1></InfoImg1>
            <div></div>
            <InfoTextBox1>
              <InfoText1_1>점수가 오릅니다</InfoText1_1>
              <InfoText1_2>홍보문구 홍보문구 홍보문구</InfoText1_2>
            </InfoTextBox1>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTextBox2>
              <InfoText2_1>점수가 오릅니다</InfoText2_1>
              <InfoText2_2>홍보문구 홍보문구 홍보문구</InfoText2_2>
            </InfoTextBox2>
            <div></div>
            <InfoImg2></InfoImg2>
          </InfoWrapper>
        </Container>
        <MidBox>
          <p>수많은 사람들이 선택한 최고의 학원</p>
        </MidBox>
        <Container></Container>
      </Body>
    </>
  );
}
