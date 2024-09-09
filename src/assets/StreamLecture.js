import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Chat from "./Chat";

const Title = styled.div`
  font-size: 40px;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 80px;
`;

const StreamLectureBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StreamVideo = styled.div`
  width: 790px;
  height: 510px;
  background-color: #d9d9d9;
`;
const StreamChat = styled.div`
  width: 320px;
  border-radius: 20px;
  background-color: #d9d9d9;
  position: relative;
`;

const TimeInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Blank = styled.div`
  height: 200px;
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: #8e8e8e;
  color: white;
  font-size: 24px;
  padding: 15px 0;
`;

export function StreamLecture() {
  const { streamId } = useParams();
  const [streamTitle, setStreamTitle] = useState("");
  const [userId, setUserId] = useState(null);
  const [streamEndTime, setStreamEndTime] = useState("");
  const [streamStartTime, setStreamStartTime] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.createRef();

  //임시 roomId (채팅 코드 수정 필요)
  const roomId = 11;

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    axios
      .get(`/api/stream/lecture/${streamId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setStreamTitle(response.data.streamTitle);
        setStreamStartTime(response.data.startTime);
        setStreamEndTime(response.data.endTime);
        setVideoSrc(response.data.videoSrc);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });

    const sessionUserId = sessionStorage.getItem("UserID");

    if (sessionUserId) {
      setUserId(sessionUserId);
    }
  }, [streamId]);

  useEffect(() => {
    if (streamStartTime && streamEndTime) {
      const now = new Date();
      const start = new Date(streamStartTime);
      const end = new Date(streamEndTime);

      if (now < start) {
        const timeUntilStart = start - now;
        setTimeout(() => {
          playVideo();
        }, timeUntilStart);
      } else {
        playVideo();
      }

      if (now < end) {
        const timeUntilEnd = end - now;
        setTimeout(() => {
          stopVideo();
        }, timeUntilEnd);
      }
    }
  }, [streamStartTime, streamEndTime, videoSrc]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const updateRemainingTime = () => {
    if (!streamEndTime) return;

    const now = new Date();
    const end = new Date(streamEndTime);
    const diff = end - now;

    if (diff > 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setRemainingTime(`남은 시간 : ${hours}시간 ${minutes}분 ${seconds}초`);
    } else {
      setRemainingTime("강의가 종료되었습니다.");
    }
  };

  const formatEndTime = (endTime) => {
    if (!endTime) return "로딩 중...";
    const date = new Date(endTime);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      <Container>
        <StreamLectureBox>
          <StreamVideo>
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                width="100%"
                height="100%"
              />
            ) : (
              "video"
            )}
          </StreamVideo>
          <StreamChat>
            <Chat userId={userId} roomId={roomId}></Chat>
          </StreamChat>
        </StreamLectureBox>
        <Title>{streamTitle}</Title>
        <TimeInfo>
          <p>강의 종료 시간 : {formatEndTime(streamEndTime)}</p>
          <p>{remainingTime || "대기 중..."}</p>
        </TimeInfo>
      </Container>
      <Blank></Blank>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
