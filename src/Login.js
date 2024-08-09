import styled from "styled-components";
import arrowBack from "./assets/img/arrowBack.png";

const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.div`
  width: 50px;
  height: 50px;
  margin: 50px;
`;

const Box = styled.div`
  border: 1px solid lightgray;
  padding: 50px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
`;

const InputBox = styled.input`
  height: 40px;
  font-size: 1.1rem;
  padding: 0 10px;
`;

const Signin = styled.button`
  height: 45px;
  margin-top: 25px;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
`;

export function Login() {
  return (
    <>
      <BackButton>
        <img src={arrowBack} alt="BackButton" width={40} height={40} />
      </BackButton>
      <Container>
        <Box>
          <Title>로그인</Title>
          <InputBox placeholder="아이디를 입력하세요"></InputBox>
          <p />
          <InputBox placeholder="비밀번호를 입력하세요"></InputBox>
          <p />
          <Signin>로그인</Signin>
        </Box>
      </Container>
    </>
  );
}
