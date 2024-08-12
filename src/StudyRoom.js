import styled from "styled-components";
import Chat from "./Chat";
import React, { useState } from "react";

const Header = styled.div`
  height: 600px;
  background-color: gray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 60%;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 100px;
`;

const Room = styled.div`
  width: 250px;
  height: 330px;
  background-color: gray;
  justify-self: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 50px;
  margin: 90px 50px 0px 50px;
`;

export function StudyRoom() {
  const [selectedRoom, setSelectedRoom] = useState(null); // 현재 선택된 방을 저장할 상태
  const username = "User"; // 실제로는 유저 이름을 동적으로 받아와야 함

  // 방을 선택하면 해당 roomId를 상태로 설정
  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
    console.log("방 번호 : ", roomId);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Title>스터디룸</Title>
        <Box>
          <Room onClick={() => handleRoomClick("Room1")}>Room 1</Room>
          <Room onClick={() => handleRoomClick("Room2")}>Room 2</Room>
          <Room onClick={() => handleRoomClick("Room3")}>Room 3</Room>
          <Room onClick={() => handleRoomClick("Room4")}>Room 4</Room>
        </Box>
      </Container>

      {selectedRoom && <Chat username={username} roomId={selectedRoom} />}
    </>
  );
}
