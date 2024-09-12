import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mockThumbNail from "./assets/img/모의고사썸네일.png";

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

const Blank = styled.div`
  height: 150px;
`;

const Blank2 = styled.div`
  height: 130px;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 80px;
  font-family: GmarketBold;
`;

const MockData = styled.div`
  display: flex;
`;

const MockDataImg = styled.img`
  width: 290px;
  height: 310px;
  background-color: darkgray;
`;

const MockDataText = styled.div`
  font-size: 20px;
  margin: 5px 0px;
`;

const MockDataWrapper = styled.div`
  margin: 20px 30px;
`;

const StartMockBtn = styled.div`
  width: 100px;
  height: 25px;
  background-color: #0d3276;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 20px 0px;
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
        <MockData>
          <MockDataWrapper>
            <MockDataImg src={mockThumbNail}></MockDataImg>
            <MockDataText>2024년 9월 적중예상 문제</MockDataText>
            <StartMockBtn onClick={handleStartMock}> 응시하기 </StartMockBtn>
          </MockDataWrapper>
          <MockDataWrapper>
            <MockDataImg src={mockThumbNail}></MockDataImg>
            <MockDataText>2024년 8월 적중예상 문제</MockDataText>
            <StartMockBtn onClick={handleStartMock}> 응시하기 </StartMockBtn>
          </MockDataWrapper>
          <MockDataWrapper>
            <MockDataImg src={mockThumbNail}></MockDataImg>
            <MockDataText>2024년 7월 적중예상 문제</MockDataText>
            <StartMockBtn onClick={handleStartMock}> 응시하기 </StartMockBtn>
          </MockDataWrapper>
          <MockDataWrapper>
            <MockDataImg src={mockThumbNail}></MockDataImg>
            <MockDataText>2024년 6월 적중예상 문제</MockDataText>
            <StartMockBtn onClick={handleStartMock}> 응시하기 </StartMockBtn>
          </MockDataWrapper>
        </MockData>
      </Container>
      <Blank2></Blank2>
    </>
  );
}
