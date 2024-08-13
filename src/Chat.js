import React from "react";
import useChat from "./UseChat";
import styled from "styled-components";
import { useEffect } from "react";

const ChatRoomContainer = styled.div``;

const Chat = ({ userId, roomId }) => {
  const { messages, currentMessage, setCurrentMessage, sendMessage } = useChat(
    userId,
    roomId
  );
  useEffect(() => {
    console.log("메세지 : ", messages);
  }, [messages]);

  return (
    <ChatRoomContainer>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li key={index}>
            <span>{message.sender}:</span>
            <span>{message.content}</span>
          </li>
        ))}
      </ul>
      <div className="message-input">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </ChatRoomContainer>
  );
};

export default Chat;
