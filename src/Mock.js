import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Blank = styled.div`
  height: 200px;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 100px;
  font-family: GmarketBold;
`;

const MockData = styled.div`
  width: 300px;
  height: 350px;
  background-color: darkgray;
`;

const StartMockBtn = styled.div`
  width: 100px;
  height: 25px;
  background-color: #0d3276;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 30px;
  border-radius: 25px;
  cursor: pointer;
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
