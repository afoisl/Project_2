import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DoorImg from "./assets/img/DoorImg.png";

const urlStudyroom = "http://localhost:8080/api/studyroom";
const urlSession = "http://localhost:8080/api/user/current";

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 100px;
`;

const Room = styled.div`
  width: 250px;
  height: 380px;
  background-image: url(${DoorImg});
  background-color: black;
  justify-self: center;
  margin: 50px;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 50px;
  margin: 90px 50px 0px 50px;
`;

const RoomName = styled.div`
  margin: 30px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Blank = styled.div`
  width: inherit;
  height: 200px;
`;

export function StudyRoom() {
  const [studyRooms, setStudyRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(urlStudyroom)
      .then((response) => {
        setStudyRooms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching study rooms:", error);
      });
  }, []);

  const handleRoomClick = (roomId, roomGrade) => {
    axios
      .get(urlSession, {
        withCredentials: true,
      })
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.userId !== "anonymousUser"
        ) {
          const userId = response.data.userId;
          console.log(userId);
          axios
            .get("http://localhost:8080/api/user/id/" + userId)
            .then((response) => {
              const userGrade = response.data.grade;
              if (roomGrade == userGrade) {
                navigate(`/chating-room/${roomId}/${response.data.userId}`, {
                  state: { grade: roomGrade },
                });
              } else {
                alert("현재 레벨 이상의 스터디룸에는 입장이 불가합니다");
              }
            });
        } else {
          console.log("로그인 안됨");
          alert("스터디룸 입장을 위해서는 로그인이 필요합니다");
        }
      })
      .catch((error) => {
        console.log("에러 발생:", error);
      });
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Title>스터디룸</Title>
        <Box>
          {studyRooms.map((room) => (
            <Room
              key={room.stRoomId}
              onClick={() =>
                handleRoomClick(room.stRoomId, room.mockGrade.mockGradeName)
              }
            >
              <RoomName>{room.mockGrade.mockGradeName}</RoomName>
            </Room>
          ))}
        </Box>
      </Container>
      <Blank></Blank>
    </>
  );
}
