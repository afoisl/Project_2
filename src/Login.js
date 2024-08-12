import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = () => {
    const userData = {
      userId: userId,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/user/login", userData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("데이터: ", response);
        if (response.status === 200) {
          navigate(from, { replace: true });
          window.location.reload();
        } else {
          alert("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.log("에러 발생 : ", error);
      });
  };
  return (
    <>
      <Container>
        <Box>
          <Title>로그인</Title>
          <InputBox
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></InputBox>
          <p />
          <InputBox
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputBox>
          <p />
          <Signin onClick={handleLogin}>로그인</Signin>
        </Box>
      </Container>
    </>
  );
}
