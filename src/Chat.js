import React from "react";
import useChat from "./UseChat";

const Chat = ({ userId, roomId }) => {
  const { messages, currentMessage, setCurrentMessage, sendMessage } = useChat(
    userId,
    roomId
  );

  return (
    <div className="chat-container">
      <h2>Room: {roomId}</h2>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li key={index} className="message-item">
            <span className="message-sender">{message.sender}:</span>
            <span className="message-content">{message.content}</span>
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
    </div>
  );
};

export default Chat;
