import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBack from "./assets/img/arrowBack.png";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BackBtn = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;

const BackImg = styled.div`
  background-image: url(${ArrowBack});
  background-size: cover;
  height: 30px;
  width: 30px;
`;

const ChatingRoomBox = styled.div`
  width: 50%;
  background-color: #999999;
  padding: 50px;
`;

const RoomUser = styled.div``;

const RoomName = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
`;

const RoomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 30px 0px;
`;

export function ChatingRoom() {
  const { roomId, userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const grade = location.state?.grade;

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get("/api/user/current", {
          withCredentials: true,
        });
        if (response.data.userId !== userId) {
          alert("로그인되지 않은 아이디는 사용할 수 없습니다");
          navigate(`/chating-room/${roomId}/${response.data.userId}`);
        }
      } catch (error) {
        console.log("에러 발생:", error);
      }
    };

    checkUser();
  }, [userId, roomId, navigate]);

  function handleBackbtn() {
    navigate(`/studyroom`);
  }

  return (
    <Container>
      <ChatingRoomBox>
        <BackBtn onClick={handleBackbtn}>
          <BackImg></BackImg>
          나가기
        </BackBtn>
        <RoomInfo>
          <RoomName>{grade}</RoomName>
        </RoomInfo>
        <Chat userId={userId} roomId={roomId} />
      </ChatingRoomBox>
    </Container>
  );
}
