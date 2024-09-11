import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 메인사진 from "./assets/img/about2.png";
import 강의1 from "./assets/img/강의실1.png";
import 강의2 from "./assets/img/강의실 2.png";
import 강의3 from "./assets/img/강의실 3.png";
import 선생님 from "./assets/img/선생님들.png";
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
  margin: 50px auto;
`;

const InfoTextBox1 = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

const InfoImg1 = styled.img`
  height: 400px;
  width: 700px;
  margin: auto;
  display: block;
`;

const InfoText1_1 = styled.div`
  font-size: 2rem;
  padding: 10px 0px;
  font-weight: 550;
`;

const InfoText1_2 = styled.div`
  font-size: 1rem;
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
            <InfoImg1 src={선생님}></InfoImg1>

            <InfoTextBox1>
              <InfoText1_1>실력 있는 경력직 강사들</InfoText1_1>
              <InfoText1_2>
                <b>"경력직을 이길 사람은 없다!" </b>
                <br />
                <br />
                오랜 시간 한 분야에 깊이 몰두한 사람은 경험을 통해 가르치는
                능력, 수업 방식, 그리고 정답을 찾는 통찰력까지 탁월해질 수밖에
                없습니다.
                <br />
                인투어학원의 강사님들은 단순히 경력이 많은 것에 그치지 않고,
                진정한 실력을 갖춘 경력직 전문가들입니다!
                <br />
                이 강사님들 덕분에 학생들은 한 달에 평균 200점이라는 놀라운 성적
                향상을 이루어내고 있습니다. 강사님들의 탁월한 실력을 보여주는
                확실한 증거겠죠?
                <br />
                뿐만 아니라, 각 학생에게 맞춤형 학습 상담을 통해 한 명 한 명
                세심하게 케어하며 성공적인 학습 여정을 함께합니다.
              </InfoText1_2>
            </InfoTextBox1>
          </InfoWrapper>
          <InfoWrapper>
            <InfoImg1 src={선생님}></InfoImg1>

            <InfoTextBox1>
              <InfoText1_1>효율적인 학습 시스템</InfoText1_1>
              <InfoText1_2>
                인투어학원에서는 학생들에게 단순히 지식을 전달하는 것을 넘어,
                효과적인 공부 방법까지 체계적으로 알려드립니다.
                <br />
                토익 공부가 막막했던 학생들도, 강사님들이 제공하는 맞춤형
                학습법을 통해 입문반에서 시작해 고급반까지 도달할 수 있도록 돕고
                있습니다! <br />
                또한, 각 반별로 수준에 맞는 숙제를 제공하여 예습, 복습, 그리고
                단어 암기까지 꼼꼼하게 관리해 드립니다.
                <br />
                이러한 세심한 지원과 철저한 케어 덕분에 학생들은 확실한 성적
                향상을 경험하고 있습니다.
              </InfoText1_2>
            </InfoTextBox1>
          </InfoWrapper>
          <InfoWrapper>
            <InfoImg1 src={선생님}></InfoImg1>

            <InfoTextBox1>
              <InfoText1_1>수준별 그룹 스터디</InfoText1_1>
              <InfoText1_2>
                저희 인투어학원의 큰 장점 중 하나는 바로 그룹 스터디
                프로그램입니다!
                <br />
                입문반, 중급반, 중급 문제풀이반 등 각 반별로 맞춤형 그룹
                스터디를 운영하고 있으며, 저희는 이를 **ILC(Intensive Language
                Course)**라 부릅니다.
                <br />
                스파르타식 영어 강좌로서 각 반마다 리더가 지정되어, 학생들이
                함께 문제를 풀고 정답을 논의하며 학습 효과를 극대화하는
                방식입니다.
                <br />
                반마다 조금씩 다른 방식으로 진행되므로, 각 반의 특성에 맞춘
                맞춤형 학습을 경험하실 수 있습니다!
              </InfoText1_2>
            </InfoTextBox1>
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
