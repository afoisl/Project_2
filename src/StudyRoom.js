import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  // 방을 선택하면 해당 roomId를 상태로 설정
  const handleRoomClick = (roomId) => {
    sessionCurrent(roomId);

    function sessionCurrent(roomId) {
      axios
        .get("http://localhost:8080/api/user/current", {
          withCredentials: true,
        })
        .then((response) => {
          if (
            response.status === 200 &&
            response.data.userId !== "anonymousUser"
          ) {
            setSelectedRoom(roomId);
            setUserId(response.data.userId);
            navigate(`/chating-room/${roomId}/${response.data.userId}`);
          } else {
            console.log("로그인 안됨");
            alert("스터디룸 입장을 위해서는 로그인이 필요합니다");
          }
        })
        .catch((error) => {
          console.log("에러 발생:", error);
        });
    }
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
        </Box>
      </Container>
    </>
  );
}
