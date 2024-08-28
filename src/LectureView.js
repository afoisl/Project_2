import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const LectureVideo = styled.div`
  width: 100%;
  height: 540px;
  background-color: #d9d9d9;
  margin-top: 150px;
`;
const LectureDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LectureTitle = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
`;
const LectureTeacherName = styled.div`
  font-size: 16px;
  margin-top: 22px;
`;
const LectureClass = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 25px;
  background-color: black;
  color: white;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
`;
export function LectureView() {
  return (
    <>
      <Container>
        <LectureVideo>강의영상</LectureVideo>
        <LectureClass>초급반</LectureClass>
        <LectureDisplay>
          <LectureTitle>강의제목</LectureTitle>
          <LectureTeacherName>### 선생님</LectureTeacherName>
        </LectureDisplay>
      </Container>
    </>
  );
}
