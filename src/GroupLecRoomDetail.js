import styled from "styled-components";
import 사람이미지 from "./assets/img/사람이미지.png";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const LecRoomDetailDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 250px;
`;
const LecDetailLive = styled.div`
  width: 790px;
  height: 560px;
  background-color: #d9d9d9;
`;
const LecDetailChat = styled.div`
  width: 290px;
  height: 560px;
  border-radius: 20px;
  background-color: #d9d9d9;
  position: relative;
`;

const LiveChat = styled.div`
  width: 272px;
  height: 34px;
  background-color: white;
  text-align: center;
  line-height: 34px;
  position: absolute;
  bottom: 18px;
  transform: translateX(-50%);
  left: 50%;
`;

const LecRoomUserList = styled.div`
  width: 100%;
  height: 230px;
  background-color: #d9d9d9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 43px;
  place-items: center;
`;
const LecRoomUser = styled.div`
  background-image: url(${사람이미지});
  background-size: cover;
  background-position: center;
  width: 170px;
  height: 170px;
`;
const LecRoomTimeTable = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #d9d9d9;
  margin: 50px 0 150px 0;
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
export function GroupLecRoomDetail() {
  return (
    <>
      <Container>
        <LecRoomDetailDisplay>
          <LecDetailLive>video</LecDetailLive>
          <LecDetailChat>
            <LiveChat>메세지를 입력하세요</LiveChat>
          </LecDetailChat>
        </LecRoomDetailDisplay>
        <LecRoomUserList>
          <LecRoomUser>user1</LecRoomUser>
          <LecRoomUser>user2</LecRoomUser>
          <LecRoomUser>user3</LecRoomUser>
          <LecRoomUser>user4</LecRoomUser>
          <LecRoomUser>user5</LecRoomUser>
        </LecRoomUserList>
        <LecRoomTimeTable>강의시간표</LecRoomTimeTable>
      </Container>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
