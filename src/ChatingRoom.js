import React from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";

export function ChatingRoom() {
  const { roomId, userId } = useParams();

  return (
    <div>
      <h1>{roomId}</h1>
      <Chat userId={userId} roomId={roomId} />
    </div>
  );
}
