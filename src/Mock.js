import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const Blank = styled.div`
  height: 200px;
`;

const Title = styled.h1``;

const MockData = styled.div`
  width: 300px;
  height: 350px;
  background-color: darkgray;
`;

const StartMockBtn = styled.div`
  background-color: gray;
  width: 100px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  margin-top: 20px;
`;

export function Mock() {
  const navigate = useNavigate();
  const jwtToken = sessionStorage.getItem("JWT-Token");
  const userId = sessionStorage.getItem("UserID");

  function handleStartMock() {
    if (userId) {
      axios
        .get("/api/user/id/" + userId, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate(`/mock-exam`);
        })
        .catch((error) => {
          console.log("에러 발생:", error);
        });
    } else {
      alert("모의고사 응시를 위해서는 로그인이 필요합니다. ");
    }
  }

  return (
    <>
      <Blank></Blank>
      <Container>
        <Title>모의고사</Title>
        <MockData></MockData>
        <StartMockBtn onClick={handleStartMock}> 응시하기 </StartMockBtn>
      </Container>
      <Blank></Blank>
    </>
  );
}
