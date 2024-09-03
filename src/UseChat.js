import { useEffect, useState, useCallback, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import axios from "axios";

export function useChat(userId, roomId) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatUserCount, setChatUserCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const stompClientRef = useRef(null);
  const reconnectAttemptsRef = useRef(0);
  const subscriptionsRef = useRef({});

  const sendStatusMessage = useCallback(
    (client, type) => {
      if (client?.active) {
        const statusMessage = {
          sender: userId,
          content: `${userId}님이 ${
            type === "JOIN" ? "입장" : "퇴장"
          }하셨습니다.`,
          type: type,
          roomId: roomId,
          sentAt: new Date().toISOString(),
        };
        client.publish({
          destination: `/app/chat.sendMessage/${roomId}`,
          body: JSON.stringify(statusMessage),
        });

        // Request an updated user count after joining or leaving
        client.publish({
          destination: `/app/chat.getUserCount/${roomId}`,
          body: JSON.stringify({ roomId: roomId }),
        });
      }
    },
    [userId, roomId]
  );

  const fetchUserCount = useCallback(async () => {
    try {
      const response = await axios.get(`/api/chat/user/${roomId}`);
      console.log("Fetched user count:", response.data.length);
      if (response.data.length !== undefined) {
        setChatUserCount(response.data.length);
      } else {
        console.error("User count data is undefined");
      }
    } catch (error) {
      console.error("Error fetching user count:", error);
      setChatUserCount(0);
    }
  }, [roomId]);

  const connectStomp = useCallback(() => {
    if (stompClientRef.current?.active) {
      console.log("STOMP client already active.");
      return;
    }

    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      connectHeaders: {},
      debug: (str) => console.log("STOMP debug:", str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      console.log("Connected to STOMP");
      setIsConnected(true);
      reconnectAttemptsRef.current = 0;

      Object.values(subscriptionsRef.current).forEach((sub) =>
        sub.unsubscribe()
      );
      subscriptionsRef.current = {};

      subscriptionsRef.current.messages = client.subscribe(
        `/topic/public/${roomId}`,
        (message) => {
          const receivedMessage = JSON.parse(message.body);
          console.log("Received user count update : ", receivedMessage);
          receivedMessage.sentAt = new Date(receivedMessage.sentAt);
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        }
      );

      subscriptionsRef.current.userCount = client.subscribe(
        `/topic/userCount/${roomId}`,
        (message) => {
          const userCount = JSON.parse(message.body);
          console.log("Received user count update:", userCount);
          setChatUserCount(userCount);
        }
      );

      sendStatusMessage(client, "JOIN");
    };

    client.onStompError = (frame) => {
      console.error("STOMP error", frame);
      setIsConnected(false);
      handleReconnect(client);
    };

    client.onWebSocketClose = () => {
      console.log("WebSocket Connection Closed");
      setIsConnected(false);
      handleReconnect(client);
    };

    client.activate();
    stompClientRef.current = client;
  }, [roomId, sendStatusMessage]);

  const sendMessage = useCallback(() => {
    if (stompClientRef.current?.active && currentMessage.trim() !== "") {
      const chatMessage = {
        sender: userId,
        content: currentMessage,
        type: "CHAT",
        roomId: roomId,
        sentAt: new Date().toISOString(),
      };
      stompClientRef.current.publish({
        destination: `/app/chat.sendMessage/${roomId}`,
        body: JSON.stringify(chatMessage),
      });
      setCurrentMessage("");
    } else if (!stompClientRef.current?.active) {
      console.log("Cannot send message: Not connected to STOMP");
      connectStomp();
    }
  }, [currentMessage, userId, roomId, connectStomp]);

  const handleReconnect = useCallback((client) => {
    if (reconnectAttemptsRef.current < 5) {
      reconnectAttemptsRef.current += 1;
      console.log(`Reconnection attempt ${reconnectAttemptsRef.current}`);

      if (client.active) {
        client.deactivate();
      }

      setTimeout(() => {
        console.log("Attempting to reconnect...");
        client.activate();
      }, 5000);
    } else {
      console.log("Max reconnection attempts reached");
    }
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const jwtToken = sessionStorage.getItem("JWT-Token");
        if (jwtToken != null) {
          const [messagesResponse] = await Promise.all([
            axios.get(`/api/chat/messages/${roomId}`, {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }),
            fetchUserCount(),
          ]);
          setMessages(messagesResponse.data);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
    connectStomp();

    return () => {
      if (stompClientRef.current?.active) {
        sendStatusMessage(stompClientRef.current, "LEAVE");

        Object.values(subscriptionsRef.current).forEach((sub) =>
          sub.unsubscribe()
        );
        subscriptionsRef.current = {};

        // setTimeout(() => {
        stompClientRef.current.deactivate().then(() => {
          console.log("Stomp 비활성화됨");
          stompClientRef.current = null;
          setIsConnected(false);
        });
        // }, 500);
      }
    };
  }, [roomId, userId]);

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    chatUserCount,
    isConnected,
    refreshUserCount: fetchUserCount, // Expose this function to manually refresh user count
  };
}

export default useChat;
