import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 80px;
`;

const Title = styled.div`
  font-size: 40px;
  margin: 20px 0px;
`;

const InputTitle = styled.div`
  margin: 10px 0px;
  font-size: 25px;
`;

const InputBox = styled.input`
  height: 40px;
  width: 400px;
  font-size: 18px;
`;

const DateTimeInput = styled.input`
  height: 40px;
  width: 230px;
  font-size: 18px;
  margin-right: 10px;
`;

const CreateStreamBtn = styled.div`
  width: 150px;
  height: 25px;
  background-color: darkgray;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
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

const Blank = styled.div`
  height: 200px;
`;

export function CreateStream() {
  const [streamTitle, setStreamTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const navigate = useNavigate();

  const handleCreateLecture = () => {
    const streamData = {
      streamTitle,
      startTime,
      endTime,
      videoSrc,
    };

    axios
      .post("http://localhost:8080/api/stream/schedule", streamData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("스트림 생성 성공 : ", response.data);
        alert("스트리밍이 생성되었습니다");
        navigate("/speciallecroom");
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  };

  return (
    <>
      <Container>
        <Title>스트리밍 생성하기</Title>
        <InputTitle>강의제목</InputTitle>
        <InputBox
          value={streamTitle}
          onChange={(e) => setStreamTitle(e.target.value)}
        />
        <InputTitle>시작 일시</InputTitle>
        <DateTimeInput
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <InputTitle>종료 일시</InputTitle>
        <DateTimeInput
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <CreateStreamBtn onClick={handleCreateLecture}>
          스트리밍 예약
        </CreateStreamBtn>
      </Container>
      <Blank></Blank>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
