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
  height: 160px;
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
        <h1>시험결과</h1>
        <p>점수 : {score} </p>
        <p>등급 : {grade}</p>
      </Container>
    </>
  );
}
