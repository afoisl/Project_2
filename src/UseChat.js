import { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import axios from "axios";

// function fetchData() {
//   try {
//     axios.get("http://localhost:8080/api/endpoint").then((response) => {
//       console.log(response.data);
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

const useChat = (username, roomId) => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const socket = new SockJS("/ws");

    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe(`/topic/${roomId}`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    });

    setStompClient(client);

    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, [roomId]);

  const sendMessage = () => {
    if (stompClient && stompClient.connected && currentMessage.trim() !== "") {
      const chatMessage = {
        sender: username,
        content: currentMessage,
        type: "CHAT",
        roomId: roomId,
      };
      stompClient.send(
        `/app/chat.sendMessage/${roomId}`,
        {},
        JSON.stringify(chatMessage)
      );
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

// fetchData();
export default useChat;
