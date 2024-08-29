import { useEffect, useState, useCallback } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import axios from "axios";

export function useChat(userId, roomId) {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatUser, setChatUser] = useState([]);
  const [chatUserCount, setChatUserCount] = useState(0);

  const fetchUserCount = useCallback(async () => {
    try {
      const response = await axios.get(`/api/chat/user/${roomId}`);
      console.log(response);
      setChatUserCount(response.data.length);
      setChatUser(
        response.data.find(
          (chatUserInfo) => chatUserInfo.user.userId === userId
        )
      );
      console.log(chatUser);
    } catch (error) {
      console.log("사용자 수 에러:", error);
    }
  }, [roomId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log(roomId);
        const response = await axios.get(`/api/chat/messages/${roomId}`);
        setMessages(response.data);
      } catch (error) {
        console.error("메세지 에러", error);
      }
    };

    fetchMessages();
    fetchUserCount();

    let clientInstance = null;

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
      clientInstance = client;
      sendStatusMessage(client, "JOIN");

      client.subscribe(`/topic/public/${roomId}`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        receivedMessage.sentAt = new Date(receivedMessage.sentAt);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        fetchUserCount();
      });
    };

    client.onStompError = (frame) => {
      console.error("STOMP error", frame);
    };

    client.activate();
    setStompClient(client);

    return () => {
      if (clientInstance && clientInstance.active) {
        console.log("Sending LEAVE message");
        sendStatusMessage(clientInstance, "LEAVE");
        setTimeout(() => {
          clientInstance.deactivate();
        }, 500);
      }
    };
  }, [roomId, userId, fetchUserCount]);

  const sendStatusMessage = useCallback(
    (client, type) => {
      if (!chatUser && client && client.active) {
        console.log(`Sending ${type} message`);
        const statusMessage = {
          sender: userId,
          content:
            type === "JOIN"
              ? `${userId}님이 입장하셨습니다.`
              : `${userId}님이 퇴장하셨습니다.`,
          type: type,
          roomId: roomId,
          sentAt: new Date().toISOString(),
        };
        client.publish({
          destination: `/app/chat.sendMessage/${roomId}`,
          body: JSON.stringify(statusMessage),
        });
        fetchUserCount();
      } else {
        console.log("이미 참여중인 유저");
      }
    },
    [userId, roomId, fetchUserCount]
  );

  const sendMessage = () => {
    if (stompClient && stompClient.active && currentMessage.trim() !== "") {
      const chatMessage = {
        sender: userId,
        content: currentMessage,
        type: "CHAT",
        roomId: roomId,
        sentAt: new Date().toISOString(),
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
    chatUserCount,
    chatUser,
  };
}

export default useChat;
