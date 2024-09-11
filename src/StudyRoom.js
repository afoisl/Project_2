import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DoorImg from "./assets/img/DoorImg.png";
import LockImg from "./assets/img/LockImg.png";

const urlStudyroom = "/api/studyroom";

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
  position: relative;
`;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  font-family: GmarketBold;
  padding: 50px;
  margin: 150px 50px 0px 50px;
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

const LockIcon = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${LockImg});
  background-size: cover;
  position: absolute;
  top: -30px;
  right: -30px;
`;

export function StudyRoom() {
  const [studyRooms, setStudyRooms] = useState([]);
  const [userGrade, setUserGrade] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    axios
      .get(urlStudyroom)
      .then((response) => {
        setStudyRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching study rooms:", error);
      });
    const sessionUserId = sessionStorage.getItem("UserID");

    if (sessionUserId) {
      axios
        .get("/api/user/id/" + sessionUserId, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          setUserGrade(response.data.grade);
          setUserId(sessionUserId);
          console.log(sessionUserId, " : ", response.data.grade);
        })
        .catch((error) => {
          console.log("에러 발생:", error);
        });
    }
  }, []);

  const handleRoomClick = (roomId, roomGrade) => {
    if (userId == null) {
      alert("스터디룸 입장을 위해서는 로그인이 필요합니다");
      return;
    } else {
      if (userGrade == null) {
        if (
          window.confirm(
            "아직 등급이 없습니다. 모의고사 창으로 이동하시겠습니까?"
          )
        ) {
          navigate(`/mock`);
        }
      } else if (roomGrade == userGrade) {
        navigate(`/chating-room/${roomId}/${userId}`, {
          state: { grade: roomGrade },
        });
      } else {
        alert("현재 레벨 외의 스터디룸에는 입장이 불가합니다");
      }
    }
  };

  return (
    <>
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
              {userGrade !== room.mockGrade.mockGradeName && <LockIcon />}
              <RoomName>{room.mockGrade.mockGradeName}</RoomName>
            </Room>
          ))}
        </Box>
      </Container>
      <Blank></Blank>
    </>
  );
}
