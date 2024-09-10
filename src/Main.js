import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Game } from "./Game";
import PaulT from "./assets/img/PaulT.png";
import YobelT from "./assets/img/YobelT.png";
import JaneT from "./assets/img/JaneT.png";
import { motion } from "framer-motion";
import mainLogo from "./assets/img/mainWide.png";
import mainImg from "./assets/img/인투어학원 시설.png";

const Container = styled.div`
  width: 100%;
  background-color: #e5e5e5;
`;

const Body = styled.div``;

const Box1 = styled.img`
  width: 100%;
  height: 920px;
  color: #e5e5e5;
`;

const Box2 = styled.div`
  background-color: #e5e5e5;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Box3 = styled.div`
  background-color: #fff;
  height: 840px;
  padding: 50px;
`;
const Box4 = styled.div`
  background-color: #e5e5e5;
  height: 2300px;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
  gap: 130px;
  padding-bottom: 50px;
`;

const Box5 = styled.div`
  background-color: #e5e5e5;
  height: 900px;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Box6 = styled.div`
  background-color: #e5e5e5;
  height: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Box7 = styled.div`
  background-color: #e5e5e5;
  height: 1000px;
  display: flex;
  justify-content: center;
`;

const Box8 = styled.div`
  height: 1000px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
`;

const Title2 = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 50px;
  margin: 350px 50px 50px 50px;
  color: #0d3276;
`;

const Lanking2 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 50px;
  margin: 230px 50px 50px 30px;
`;

const LankImg2 = styled.img`
  width: 600px;
  height: 450px;
  border-radius: 25px;
  background-color: white;
`;
const Title3 = styled.div`
  padding: 50px;
`;
const Title3_1 = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 5px;
`;
const Title3_2 = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
`;
const Lanking3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const LankImg3 = styled.div`
  width: 900px;
  height: 450px;
  background-color: #c8c8c8;
  border-radius: 25px;
`;

const Title4 = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  padding: 50px 150px;
  margin: 100px;
`;

const Lecture = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
`;

const Lecture1 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const TeacherImg1 = styled.img`
  width: 230px;
  height: 400px;
`;
const TeacherImg2 = styled.img`
  width: 250px;
  height: 400px;
`;
const TeacherImg3 = styled.div``;

const Info = styled.div`
  font-size: 2.5rem;
  padding: 50px;
`;
const Name = styled.div``;

const BtnWrapper = styled.div`
  display: flex;
  align-items: end;
  height: 150px;
`;

const LectureBtn = styled.div`
  font-size: 1.2rem;
  width: 180px;
  height: 30px;
  box-sizing: border;
  border-radius: 50px;
  background-color: white;
  text-align: center;
  line-height: 1.5;
  margin: 50px 0px;
  padding: 15px;
`;

const Box5Wrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 30px;
  margin: 50px 20px;
`;

const Title5 = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 50px 50px 50px 0px;
`;

const GameBtn = styled.div`
  font-size: 1.2rem;
  width: 180px;
  height: 30px;
  box-sizing: border;
  border-radius: 50px;
  background-color: white;
  line-height: 1.5;
  text-align: center;
  margin: 50px 0px;
  padding: 15px;
`;

const Box5Wrapper2 = styled.div`
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  margin: 100px 20px;
`;

const Line1 = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr 1fr;
  height: 800px;
`;
const Line2 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 680px;
`;
const Line3 = styled.div``;

const GameImg1 = styled.div`
  width: 260px;
  height: 210px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;

const GameImg2 = styled.div`
  width: 260px;
  height: 300px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;

const GameImg3 = styled.div`
  width: 260px;
  height: 210px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;
const GameImg4 = styled.div`
  width: 260px;
  height: 300px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;
const BookImg = styled.div`
  width: 450px;
  height: 550px;
  background-color: white;
  margin: 50px;
  border-radius: 25px;
`;
const BookInfo = styled.div`
  font-size: 1.4rem;
  text-align: right;
  margin: 50px 0px;
`;
const BookName = styled.div`
  font-size: 3rem;
`;
const StoreBtn = styled.div`
  font-size: 1.2rem;
  width: 180px;
  height: 30px;
  box-sizing: border;
  border-radius: 50px;
  background-color: white;
  line-height: 1.5;
  text-align: center;
  margin: 50px 0px;
  padding: 15px;
`;

const Box6Wrapper = styled.div`
  display: flex;
  justify-content: right;
  margin: 100px;
`;

const Box6Wrapper2 = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-top: 100px;
`;

const Box7Wrapper = styled.div`
  width: 70%;
  padding: 50px;
`;

const Text7 = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 50px;
  margin: 50px;
`;

const StudyRoomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StudyRoomImg1 = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  margin: 30px;
  border-radius: 25px;
`;

const StudyRoomImg2 = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  margin: 30px;
  border-radius: 25px;
`;

const StudyRoomImg3 = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  margin: 30px;
  border-radius: 25px;
`;

const Text7_1 = styled.div`
  font-size: 1.5rem;
  padding: 10px;
`;

const Text8_1 = styled.div`
  font-size: 1.7rem;
  padding: 60px 0px 5px 0px;
`;

const Text8_2 = styled.div`
  font-size: 3rem;
`;

const Box8Wrappper = styled.div`
  text-align: center;
  width: 70%;
  padding: 50px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text8 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button8wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LevelBtn = styled.div`
  font-size: 1.4rem;
  width: 220px;
  height: 40px;
  box-sizing: border;
  border-radius: 50px;
  background-color: white;
  text-align: center;
  line-height: 1.8;
  margin: 50px;
  padding: 15px;
`;

export function Main() {
  return (
    <>
      <Container>
        <Body>
          <Box1 src={mainLogo}></Box1>
          <Box2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <Title2>
                점수가 오르는 학원 <br />
                인투어학원
              </Title2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <Lanking2>
                <LankImg2 src={mainImg}></LankImg2>
              </Lanking2>
            </motion.div>
          </Box2>
          <Box3>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <Title3>
                <Title3_1>단기간 점수 향상!</Title3_1>
                <Title3_2>명예의 전당</Title3_2>
              </Title3>
              <Lanking3>
                <LankImg3></LankImg3>
              </Lanking3>
            </motion.div>
          </Box3>
          <Box4>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <Title4>
                탁월한 강사진들과 함께하는
                <br />
                LC, RC 쪽집게 강의
              </Title4>
            </motion.div>
            <Lecture>
              <div></div>
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
                <TeacherImg2 src={PaulT}></TeacherImg2>
              </motion.div>
              <Info>
                입문반은 내가 책임진다
                <Name>Paul 강사</Name>
                <BtnWrapper>
                  <LectureBtn>수강신청 바로가기</LectureBtn>
                </BtnWrapper>
              </Info>
            </Lecture>
            <Lecture1>
              <div></div>
              <Info>
                홍보문구
                <Name>Yobel 강사</Name>
                <LectureBtn>수강신청 바로가기</LectureBtn>
              </Info>
              <div></div>
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
                <TeacherImg1 src={YobelT}></TeacherImg1>
              </motion.div>
            </Lecture1>
            <Lecture>
              <div></div>
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
                <TeacherImg1 src={JaneT}></TeacherImg1>
              </motion.div>
              <Info>
                홍보문구
                <Name>Jane 강사</Name>
                <BtnWrapper>
                  <LectureBtn>수강신청 바로가기</LectureBtn>
                </BtnWrapper>
              </Info>
            </Lecture>
          </Box4>
          <Box5>
            <Box5Wrapper>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  y: { duration: 1 },
                }}
              >
                <Title5>
                  게임으로 재밌게 배우는
                  <br />
                  영어
                </Title5>
              </motion.div>
              <GameBtn>게임 바로가기</GameBtn>
            </Box5Wrapper>
            <Box5Wrapper2>
              <Line1>
                <div></div>
                <GameImg1></GameImg1>
                <GameImg2></GameImg2>
              </Line1>
              <Line2>
                <div></div>
                <GameImg3></GameImg3>
                <GameImg4></GameImg4>
              </Line2>
              <Line3></Line3>
            </Box5Wrapper2>
          </Box5>
          <Box6>
            <Box6Wrapper>
              <BookImg></BookImg>
            </Box6Wrapper>
            <Box6Wrapper2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  y: { duration: 1 },
                }}
              >
                <BookInfo>
                  모든 문법을 1주 만에 끝내줄 단 한권의 책
                  <BookName>67패턴</BookName>
                </BookInfo>
              </motion.div>
              <StoreBtn>스토어 바로가기</StoreBtn>
            </Box6Wrapper2>
          </Box6>
          <Box7>
            <Box7Wrapper>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  y: { duration: 1 },
                }}
              >
                <Text7>실시간으로 질문하고 배우는 스터디룸</Text7>
              </motion.div>
              <StudyRoomBox>
                <div>
                  <StudyRoomImg1></StudyRoomImg1>
                  <Text7_1>모의고사 문제풀이</Text7_1>
                </div>
                <div>
                  <StudyRoomImg2></StudyRoomImg2>
                  <Text7_1>자유로운 Q & A</Text7_1>
                </div>
                <div>
                  <StudyRoomImg3></StudyRoomImg3>
                  <Text7_1>실시간 특강</Text7_1>
                </div>
              </StudyRoomBox>
            </Box7Wrapper>
          </Box7>
          <Box8>
            <Box8Wrappper>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  y: { duration: 1 },
                }}
              >
                <Text8>
                  <Text8_1>모의고사를 풀어</Text8_1>
                  <Text8_2>명예의 전당에 이름을 올려라</Text8_2>
                </Text8>
              </motion.div>
              <Button8wrapper>
                <LevelBtn>나의 레벨 확인하기</LevelBtn>
                <LevelBtn>모의고사 바로가기</LevelBtn>
              </Button8wrapper>
            </Box8Wrappper>
          </Box8>
        </Body>
      </Container>
    </>
  );
}
