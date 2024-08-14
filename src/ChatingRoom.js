import React from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ChatingRoomBox = styled.div`
  width: 60%;
  background-color: gray;
  padding: 50px;
`;

export function ChatingRoom() {
  const { roomId, userId } = useParams();

  return (
    <Container>
      <ChatingRoomBox>
        <h1>Room {roomId}</h1>
        <Chat userId={userId} roomId={roomId} />
      </ChatingRoomBox>
    </Container>
  );
}
