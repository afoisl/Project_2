import styled from "styled-components";

const GroupLecRoomImg = styled.div`
  width: 100%;
  height: 600px;
  background-color: #7c7c7c;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const GroupLecTitle = styled.div`
  font-size: 48px;
`;
const GroupLecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const GroupLecLive = styled.div`
  display: flex;
  margin-top: 50px;
`;
const LecLive1 = styled.div`
  width: 80px;
  height: 30px;
  background-color: red;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
`;
const LecLive2 = styled.div`
  font-size: 20px;
`;
const LecLive3 = styled.div`
  width: 80px;
  height: 30px;
  background-color: grey;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
`;
const LiveLec1 = styled.div`
  width: 370px;
  height: 210px;
  background-color: #d9d9d9;
  margin-top: 20px;
`;
const LiveLecText1 = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #7d7d7d;
`;
const LiveLecText2 = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
`;
const LiveLecText3 = styled.div`
  width: 70px;
  height: 25px;
  color: white;
  background-color: black;
  text-align: center;
  line-height: 25px;
  margin-top: 20px;
`;
const GroupLecMargin = styled.div`
  height: 200px;
`;
const GroupLecGrid1 = styled.div``;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: #8e8e8e;
  color: white;
  font-size: 24px;
  padding: 15px 0;
`;
export function GroupLecRoom() {
  return (
    <>
      <GroupLecRoomImg></GroupLecRoomImg>
      <Container>
        <GroupLecMargin></GroupLecMargin>
        <GroupLecTitle>LC 그룹수강</GroupLecTitle>
        <GroupLecGrid>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive1>Live</LecLive1>
              <LecLive2>👥 #명 참여중</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>LC</LiveLecText1>
            <LiveLecText2>한번에 끝나는 PART 3</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive3>대기중</LecLive3>
              <LecLive2>0시 52분 남음</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>강의 카테고리</LiveLecText1>
            <LiveLecText2>강의 제목</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive3>대기중</LecLive3>
              <LecLive2>0시 52분 남음</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>강의 카테고리</LiveLecText1>
            <LiveLecText2>강의 제목</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
        </GroupLecGrid>
        <GroupLecMargin></GroupLecMargin>
        <GroupLecTitle>RC 그룹수강</GroupLecTitle>
        <GroupLecGrid>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive1>Live</LecLive1>
              <LecLive2>👥 #명 참여중</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>RC</LiveLecText1>
            <LiveLecText2>한번에 끝나는 PART 5</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive3>대기중</LecLive3>
              <LecLive2>0시 52분 남음</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>강의 카테고리</LiveLecText1>
            <LiveLecText2>강의 제목</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
          <GroupLecGrid1>
            <GroupLecLive>
              <LecLive3>대기중</LecLive3>
              <LecLive2>0시 52분 남음</LecLive2>
            </GroupLecLive>
            <LiveLec1></LiveLec1>
            <LiveLecText1>강의 카테고리</LiveLecText1>
            <LiveLecText2>강의 제목</LiveLecText2>
            <LiveLecText3>초급반</LiveLecText3>
          </GroupLecGrid1>
        </GroupLecGrid>
        <GroupLecMargin></GroupLecMargin>
      </Container>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
