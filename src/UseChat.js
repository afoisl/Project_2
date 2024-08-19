import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import axios from "axios";

const useChat = (userId, roomId) => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log(roomId);
        const response = await axios.get(
          `http://localhost:8080/api/chat/messages/${roomId}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    fetchMessages();

    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      console.log("Connected to STOMP");
      console.log("채팅룸 참여 : ", `/topic/${roomId}`);
      client.subscribe(`/topic/public/${roomId}`, (message) => {
        console.log("수신된 메세지");
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    };

    client.onStompError = (frame) => {
      console.error("STOMP error", frame);
    };

    client.activate();

    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [roomId, userId]);

  const sendMessage = () => {
    if (stompClient && stompClient.active && currentMessage.trim() !== "") {
      const chatMessage = {
        sender: userId,
        content: currentMessage,
        type: "CHAT",
        roomId: roomId,
      };
      stompClient.publish({
        destination: `/app/chat.sendMessage/${roomId}`,
        body: JSON.stringify(chatMessage),
      });
      setCurrentMessage("");
    }
  };

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
  };
};

export default useChat;
