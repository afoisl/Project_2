import React from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBack from "./assets/img/arrowBack.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BackBtn = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
`;

const BackImg = styled.div`
  background-image: url(${ArrowBack});
  background-size: cover;
  height: 50px;
  width: 50px;
`;

const ChatingRoomBox = styled.div`
  width: 50%;
  background-color: #999999;
  padding: 50px;
`;

export function ChatingRoom() {
  const { roomId, userId } = useParams();
  const navigate = useNavigate();

  axios
    .get("http://localhost:8080/api/user/current", {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.userId == userId) {
        console.log("채팅룸 입장");
      } else {
        alert("로그인되지 않은 아이디는 사용할 수 없습니다");
        navigate(`/chating-room/${roomId}/${response.data.userId}`);
      }
    })
    .catch((error) => {
      console.log("에러 발생:", error);
    });

  return (
    <Container>
      <ChatingRoomBox>
        <BackBtn>
          <BackImg></BackImg>
          나가기
        </BackBtn>
        <h1>Room {roomId}</h1>
        <Chat userId={userId} roomId={roomId} />
      </ChatingRoomBox>
    </Container>
  );
}
