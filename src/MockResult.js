import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { set } from "react-hook-form";

const Container = styled.div`
  width: 60%;
  height: 550px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Blank = styled.div`
  height: 300px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Result = styled.div`
  font-size: 30px;
  margin: 10px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

export function MockResult() {
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState(null);

  const userId = sessionStorage.getItem("UserID");
  const jwtToken = sessionStorage.getItem("JWT-Token");

  axios
    .get(`/api/mock/score/${userId}`)
    .then((response) => {
      console.log(response.data);
      setScore(response.data[0].score);
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get("/api/user/id/" + userId, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      setGrade(response.data.grade);
    })
    .catch((error) => {
      console.log("에러 발생:", error);
    });

  return (
    <>
      <Blank></Blank>
      <Container>
        <Title>{userId}님을 응원합니다!</Title>
        <ResultWrapper>
          <Result>나의 점수 : {score} </Result>
          <Result>나의 등급 : {grade}</Result>
        </ResultWrapper>
      </Container>
    </>
  );
}
