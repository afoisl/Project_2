import styled from "styled-components";
import { Link } from "react-router-dom";
import 메인사진 from "./assets/img/커리큘럼.png";
import 왕기초반 from "./assets/img/커리큘럼1.png";
import 입문반 from "./assets/img/커리큘럼2.png";
import 중급반 from "./assets/img/커리큘럼3.png";
import 고급반 from "./assets/img/커리큘럼5.png";
import { motion } from "framer-motion";

const Header = styled.div``;

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
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: GmarketMedium;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 100px 0;
`;

const Box = styled.div`
  width: 470px;
  height: auto;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  font-family: GmarketMegium;
`;

const Title = styled.div`
  text-align: left;
  font-size: 1.4rem;
  font-family: GmarketBold;
  margin-bottom: 20px;
  padding-left: 5px;
`;
const Content = styled.div`
  margin-bottom: 25px;
`;
const Grade = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const List = styled.div`
  height: 18px;
  padding: 3px 13px;
  border-radius: 25px;
  font-size: 0.7rem;
  background-color: #0d3276;
  color: white;
`;
const ListContent = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  line-height: 1.4;
`;
const Book = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;

const ImgBox = styled.img`
  border-radius: 25px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export function Curriculum() {
  return (
    <>
      <Header>
        <Img src={메인사진}></Img>
        <MenuBar>
          <div></div>
          <MenuTitle to="/intro/about">About Us</MenuTitle>
          <TitleWrapper>
            <MenuTitle to="/intro/curriculum">커리큘럼</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <MenuTitle to="/intro/address">오시는 길</MenuTitle>
          <div></div>
        </MenuBar>
      </Header>
      <TextWrapper>
        <Text>
          인투어학원에서는 학생들이 스스로 공부할 수 있는 습관을 길러주고,
          지속적인 관리와 피드백을 통해 <br />
          최상의 결과를 얻을 수 있도록 돕습니다.
        </Text>
      </TextWrapper>

      <Container>
        <BoxWrapper>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <Wrap>
              <ImgBox src={왕기초반}></ImgBox>
              <Box>
                <Title>왕기초반</Title>
                <Content>
                  왕기초반은 TOEIC을 처음 접하는 학습자를 위한 반입니다. 영어
                  기초보다는 TOEIC 시험에 맞춘 기초적인 문제 유형과 시험 형식에
                  익숙해지도록 돕는 것이 목표입니다. Part 1부터 Part 7까지의
                  시험 구조와 기본 문제 유형을 학습하며, 시험에 대한 두려움을
                  없애고 기초 실력을 쌓을 수 있습니다.
                </Content>
                <Grade>
                  <List>학습대상</List>
                  <ListContent>
                    TOEIC 시험에 대해 전혀 경험이 없는 학습자
                    <br />
                    영어 문법이나 어휘는 알지만 TOEIC에 특화된 기초부터 배우고
                    싶은 분
                  </ListContent>
                </Grade>
                <Book>
                  <List>학습교재</List>
                  <ListContent>67패턴</ListContent>
                </Book>
              </Box>
            </Wrap>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <Wrap>
              <Box>
                <Title>입문반</Title>
                <Content>
                  입문반은 기초적인 TOEIC 시험 경험이 있거나, 기초를 다진 후
                  점수를 올리고자 하는 학습자를 위한 반입니다. 이 반에서는 주로
                  파트별 핵심 전략과 자주 출제되는 문제 유형을 학습하며,
                  기본적인 청취와 독해 실력을 키워 점수를 안정적으로 끌어올리는
                  것을 목표로 합니다.
                </Content>
                <Grade>
                  <List>학습대상</List>
                  <ListContent>
                    기초적인 실력을 토대로 좀 더 체계적으로 학습하고 싶은 분
                  </ListContent>
                </Grade>
                <Book>
                  <List>학습교재</List>
                  <ListContent>67패턴</ListContent>
                </Book>
              </Box>
              <ImgBox src={입문반}></ImgBox>
            </Wrap>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <Wrap>
              <ImgBox src={중급반}></ImgBox>
              <Box>
                <Title>중급반</Title>
                <Content>
                  중급반은 TOEIC 시험에 어느 정도 익숙하며, 기본적인 문제 풀이
                  능력을 갖춘 학습자를 위한 반입니다. 문제 풀이 속도와 정확성을
                  높이고, 어려운 문제를 풀기 위한 심화 전략을 배우게 됩니다.
                  고득점을 목표로 한 실전 대비 훈련을 통해 더 높은 점수를 목표로
                  합니다.
                </Content>
                <Grade>
                  <List>학습대상</List>
                  <ListContent>
                    TOEIC 시험에서 600점 이상을 목표로 하는 학습자
                  </ListContent>
                </Grade>
                <Book>
                  <List>학습교재</List>
                  <ListContent>Lorem ipsum dolor</ListContent>
                </Book>
              </Box>
            </Wrap>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <Wrap>
              <Box>
                <Title>고급반</Title>
                <Content>
                  고급반은 TOEIC 고득점을 목표로 하는 학습자를 위한 반입니다.
                  고난도 문제를 해결할 수 있는 전략과 고급 어휘 및 문장 구조를
                  집중적으로 다루며, 모의고사를 통해 실전 감각을 극대화합니다.
                  이 반에서는 800점 이상의 고득점을 목표로 하고, 실전 문제 풀이
                  기술과 시간 관리 능력을 강화합니다.
                </Content>
                <Grade>
                  <List>학습대상</List>
                  <ListContent>
                    TOEIC 시험에서 800점 이상을 목표로 하는 학습자
                  </ListContent>
                </Grade>
                <Book>
                  <List>학습교재</List>
                  <ListContent>Lorem ipsum dolor</ListContent>
                </Book>
              </Box>
              <ImgBox src={고급반}></ImgBox>
            </Wrap>
          </motion.div>
        </BoxWrapper>
      </Container>
    </>
  );
}
