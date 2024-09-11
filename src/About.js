import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 메인사진 from "./assets/img/about2.png";
import 강의1 from "./assets/img/강의실1.png";
import 강의2 from "./assets/img/강의실 2.png";
import 강의3 from "./assets/img/강의실 3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  margin: 0 auto;
  background-color: #c9c9c9;
  width: 70%;
  height: 80px;
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
  margin-top: 20px;
  border-radius: 50px;
`;

const MenuTitle = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
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
const SliderWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const SlideImage = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  margin: auto;
`;

const RoomText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px auto;
`;

const roomArr = [
  { img: 강의1, key: 1 },
  { img: 강의2, key: 2 },
  { img: 강의3, key: 3 },
];

export function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <Header>
        <Img src={메인사진}></Img>
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
        <Container>
          <RoomText>
            인투어학원에서 많은 인원을 수용할 수 있는 강의실. 이 곳에서 함께
            불타는 열정을 느끼며 공부해봐요
          </RoomText>
          <SliderWrapper>
            <Slider {...settings}>
              {roomArr.map((room) => (
                <div key={room.key}>
                  <SlideImage src={room.img} alt={`Lecture Room ${room.key}`} />
                </div>
              ))}
            </Slider>
          </SliderWrapper>
        </Container>
      </Body>
    </>
  );
}
