import React from "react";
import useChat from "./UseChat";
import styled from "styled-components";
import { useEffect } from "react";

const ChatRoomContainer = styled.div``;

const Box = styled.div`
  width: 70%;
`;

const MessageList = styled.div`
  background-color: darkgray;
  padding: 20px;
`;

const Message = styled.div`
  padding: 7px;
  margin: 5px;
`;
const Content = styled.span`
  padding: 7px;
  margin: 5px;
  background-color: white;
  border-radius: 10px;
`;
const Sender = styled.div`
  padding: 7px;
  margin: 5px;
`;

const MessageGroup = styled.div``;

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
      <MessageList>
        {messages.map((message, index) => {
          const showSender =
            index === 0 || messages[index - 1].sender !== message.sender;
          return (
            <MessageGroup key={index}>
              {showSender && <Sender>{message.sender}:</Sender>}
              <Message>
                <Content>{message.content}</Content>
              </Message>
            </MessageGroup>
          );
        })}
      </MessageList>
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
