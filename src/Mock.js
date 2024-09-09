import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 500px;
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

  function handleStartMock() {
    navigate(`/mock-exam`);
  }

  return (
    <>
      <Blank></Blank>
      <Container>
        <Title>모의고사</Title>
        <MockData></MockData>
        <StartMockBtn onClick={handleStartMock}>응시하기</StartMockBtn>
      </Container>
      <Blank></Blank>
    </>
  );
}
