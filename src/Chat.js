import React from "react";
import useChat from "./UseChat";
import styled from "styled-components";
import { useEffect } from "react";

const ChatRoomContainer = styled.div``;

const MessageList = styled.div`
  background-color: darkgray;
  padding: 20px;
  border-radius: 5px;
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
const Input = styled.input`
  height: 30px;
  width: 200px;
  margin: 10px 5px 0px 0px;
  border-radius: 5px;
`;
const SendBtn = styled.button`
  height: 36px;
  width: 60px;
  border-radius: 5px;
`;
const Time = styled.span``;

const MessageGroup = styled.div``;

const Blank = styled.div``;

const DateSeparator = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const DateLine = styled.hr`
  flex-grow: 1;
  border: none;
  height: 1px;
  background-color: #ccc;
`;

const DateText = styled.span`
  padding: 0 10px;
  background-color: darkgray;
  color: white;
  font-size: 0.9em;
`;

const formatDate = (date, format = "time") => {
  if (!date) return "";
  const dateObject = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObject.getTime())) return "";

  if (format === "time") {
    return dateObject.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (format === "date") {
    return dateObject.toLocaleDateString();
  }
};

const Chat = ({ userId, roomId }) => {
  const { messages, currentMessage, setCurrentMessage, sendMessage } = useChat(
    userId,
    roomId
  );

  const formattedMessages = messages.map((message) => ({
    ...message,
    sentAt: message.sentAt ? new Date(message.sentAt) : null,
  }));

  useEffect(() => {
    console.log("메세지 : ", messages);
  }, [messages]);

  const renderMessages = () => {
    let currentDate = null;
    let lastDateSeparator = false;

    return formattedMessages.map((message, index) => {
      const messageDate = message.sentAt
        ? new Date(message.sentAt.toDateString())
        : null;
      const showDateSeparator =
        currentDate === null ||
        (messageDate && messageDate.getTime() !== currentDate.getTime());

      const showSender =
        index === 0 ||
        formattedMessages[index - 1].sender !== message.sender ||
        showDateSeparator ||
        lastDateSeparator;

      if (showDateSeparator && messageDate) {
        currentDate = messageDate;
        lastDateSeparator = true;
        return (
          <React.Fragment key={`date-${index}`}>
            <DateSeparator>
              <DateLine />
              <DateText>{formatDate(messageDate, "date")}</DateText>
              <DateLine />
            </DateSeparator>
            <MessageGroup>
              <Sender>{message.sender}</Sender>
              <Blank />
              <Message>
                <Content>{message.content}</Content>
                <Time>{formatDate(message.sentAt)}</Time>
              </Message>
            </MessageGroup>
          </React.Fragment>
        );
      }

      lastDateSeparator = false;
      return (
        <MessageGroup key={`msg-${index}`}>
          {showSender && <Sender>{message.sender}</Sender>}
          <Blank />
          <Message>
            <Content>{message.content}</Content>
            <Time>{formatDate(message.sentAt)}</Time>
          </Message>
        </MessageGroup>
      );
    });
  };

  return (
    <ChatRoomContainer>
      <MessageList>{renderMessages()}</MessageList>
      <div className="message-input">
        <Input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="메세지를 입력하세요"
        />
        <SendBtn onClick={sendMessage}>Send</SendBtn>
      </div>
    </ChatRoomContainer>
  );
};

export default Chat;
