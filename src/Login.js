import axios from "axios";
import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Container = styled.div`
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid lightgray;
  padding: 40px 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  cursor: default;
`;

const InputBox = styled.input`
  height: 40px;
  font-size: 0.8rem;
  padding: 0 10px;
`;

const Signin = styled.button`
  height: 45px;
  margin-top: 30px;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const ShowPwBox = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const ShowPw = styled.span``;

const JoinLink = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [isShowPwChecked, setShowPwChecked] = useState(false);
  const passwordRef = useRef(null);

  const handleShowPwChecked = async () => {
    const password = await passwordRef.current;
    if (password === null) return;

    await setShowPwChecked(!isShowPwChecked);
    if (!isShowPwChecked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const handleLogin = () => {
    const userData = {
      userId: userId,
      password: password,
    };

    const userInfo = {
      token: null,
      userId: null,
      authority: null,
    };
    axios
      .post("http://localhost:8080/api/authenticate", userData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("데이터: ", response.data.resultCode);
        if (response.data.resultCode == "SUCCESS") {
          userInfo.token = response.data.data.token;
          userInfo.userId = response.data.data.userId;
          userInfo.authority = response.data.data.authority[0].authority;
          console.log(userInfo);
          sessionStorage.setItem("JWT-Token", response.data.data.token);
          sessionStorage.setItem("UserID", response.data.data.userId);
          sessionStorage.setItem(
            "Authority",
            response.data.data.authority[0].authority
          );
          navigate(from, { replace: true });
          //window.location.reload();
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
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          ></InputBox>
          <p />
          <ShowPwBox>
            <label>
              <input type="checkbox" onChange={handleShowPwChecked} />
              <ShowPw>비밀번호 보기</ShowPw>
            </label>
          </ShowPwBox>
          <Signin onClick={handleLogin}>로그인</Signin>
          <StyledLink to="/signup">
            <JoinLink>회원가입</JoinLink>
          </StyledLink>
        </Box>
      </Container>
    </>
  );
}
