import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const MyLectureTitle = styled.div`
  margin-top: 150px;
  font-size: 48px;
`;

const LectureList = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  margin-top: 50px;
`;

const LectureImg = styled.div`
  width: 370px;
  height: 200px;
  background-color: #d9d9d9;
`;
const LectureText = styled.div``;
const LectureText1 = styled.div`
  font-size: 20px;
  color: #7d7d7d;
`;
const LectureText2 = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 5px;
`;
const LectureText3 = styled.div`
  width: 70px;
  height: 25px;
  color: white;
  background-color: black;
  text-align: center;
  margin-top: 10px;
  line-height: 25px;
`;
const LectureText4 = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #7d7d7d;
`;
const LectureText5 = styled.div`
  width: 207px;
  height: 9px;
  background-color: #d9d9d9;
  border-radius: 15px;
  margin-top: 10px;
`;
const LectureGo = styled.div`
  width: 170px;
  height: 70px;
  background-color: #d9d9d9;
  font-size: 24px;
  text-align: center;
  line-height: 70px;
  align-self: self-end;
`;
const LectureMargin = styled.div`
  height: 20px;
`;
const LectureMargin1 = styled.div`
  height: 150px;
`;
const Footer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: #8e8e8e;
  color: white;
  font-size: 24px;
  padding: 15px 0;
`;

export function MyLecture() {
  return (
    <>
      <Container>
        <MyLectureTitle>수강현황</MyLectureTitle>
        <LectureList>
          <LectureImg></LectureImg>
          <LectureText>
            <LectureText1>LC</LectureText1>
            <LectureText2>한번에 끝내는 PART 3</LectureText2>
            <LectureText3>초급반</LectureText3>
            <LectureText4>진도율</LectureText4>
            <LectureText5></LectureText5>
          </LectureText>
          <LectureGo>강의듣기</LectureGo>
        </LectureList>
        <LectureMargin></LectureMargin>
        <LectureList>
          <LectureImg></LectureImg>
          <LectureText>
            <LectureText1>LC</LectureText1>
            <LectureText2>한번에 끝내는 PART 3</LectureText2>
            <LectureText3>초급반</LectureText3>
            <LectureText4>진도율</LectureText4>
            <LectureText5></LectureText5>
          </LectureText>
          <LectureGo>강의듣기</LectureGo>
        </LectureList>
        <LectureMargin1></LectureMargin1>
      </Container>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
