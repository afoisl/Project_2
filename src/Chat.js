import React from "react";
import useChat from "./UseChat";
import styled from "styled-components";
import { useEffect } from "react";

const ChatRoomContainer = styled.div``;

const MessageList = styled.div`
  background-color: darkgray;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isOwnMessage ? "row-reverse" : "row")};
  align-items: center;
`;

const Content = styled.span`
  padding: 7px;
  margin: 5px;
  background-color: ${(props) => (props.isOwnMessage ? "#DCF8C6" : "white")};
  border-radius: 10px;
  display: inline-block;
`;

const Time = styled.span`
  font-size: 0.8rem;
  color: #888;
  margin: ${(props) => (props.isOwnMessage ? "0 10px 0 0" : "0 0 0 10px")};
`;

const Sender = styled.div`
  padding: 7px;
  margin: 5px;
  font-weight: bold;
`;

const MessageSendBox = styled.div`
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  padding: 20px;
  display: flex;
`;

const MessageSender = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 20px 0px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
  transition: height 0.2s ease;
`;

const Input = styled.textarea`
  flex-grow: 1;
  min-height: 36px;
  max-height: 150px;
  padding: 8px;
  border-radius: 5px;
  resize: none;
  overflow-y: auto;
  line-height: 1.5;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  background: none;
`;

const SendBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  height: 36px;
  width: 60px;
  border-radius: 5px;
  background-color: darkgray;
  color: white;

  &:hover {
    background-color: gray;
  }
`;

const MessageAddFile = styled.div`
  background-color: darkgray;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
`;

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

const adjustHeight = (element) => {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";

  // MessageSender의 높이도 조절
  const messageSender = element.closest(".message-sender");
  if (messageSender) {
    messageSender.style.height = element.scrollHeight + 16 + "px"; // 16은 패딩 값
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
    const textarea = document.querySelector(".message-sender textarea");
    if (textarea) {
      adjustHeight(textarea);
    }
  }, [currentMessage]);

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
      const isOwnMessage = message.sender === userId;

      const showSender =
        !isOwnMessage &&
        (index === 0 ||
          formattedMessages[index - 1].sender !== message.sender ||
          showDateSeparator ||
          lastDateSeparator);

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
            <MessageGroup isOwnMessage={isOwnMessage}>
              {!isOwnMessage && showSender && <Sender>{message.sender}</Sender>}
              <MessageContent isOwnMessage={isOwnMessage}>
                <Content isOwnMessage={isOwnMessage}>{message.content}</Content>
                <Time isOwnMessage={isOwnMessage}>
                  {formatDate(message.sentAt)}
                </Time>
              </MessageContent>
            </MessageGroup>
          </React.Fragment>
        );
      }

      lastDateSeparator = false;
      return (
        <MessageGroup key={`msg-${index}`} isOwnMessage={isOwnMessage}>
          {!isOwnMessage && showSender && <Sender>{message.sender}</Sender>}
          <MessageContent isOwnMessage={isOwnMessage}>
            <Content isOwnMessage={isOwnMessage}>{message.content}</Content>
            <Time isOwnMessage={isOwnMessage}>
              {formatDate(message.sentAt)}
            </Time>
          </MessageContent>
        </MessageGroup>
      );
    });
  };

  return (
    <ChatRoomContainer>
      <MessageList>{renderMessages()}</MessageList>
      <MessageSendBox>
        <MessageAddFile></MessageAddFile>
        <MessageSender className="message-sender">
          <Input
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
              adjustHeight(e.target);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="메세지를 입력하세요"
          />
          <SendBtn onClick={sendMessage}>Send</SendBtn>
        </MessageSender>
      </MessageSendBox>
    </ChatRoomContainer>
  );
};

export default Chat;
