import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Img = styled.div`
  width: 100%;
  height: 700px;
  background-color: gray;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-top: 100px;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

const InputTitle = styled.input`
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: solid 1px black;
  font-size: 1.2rem;
  padding: 0 10px;
`;

const InputText = styled.textarea`
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  border: solid 1px black;
  font-size: 16px;
  padding: 10px 10px;
`;

const RegisterButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 30px;
  border: none;
  margin: 20px 30px;
`;

const RegisterButtonWrapper = styled.div`
  width: 72%;
  display: flex;
  justify-content: end;
`;

const ToBack = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: white;
  font-size: 1rem;
  margin: 30px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  border-top: 2px solid #c8c8c8;
`;

export function QnaWrite() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const addQna = async () => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      alert("로그인이 필요합니다.");
      return;
    }
    const userId = sessionStorage.getItem("UserID");

    const writeDate = new Date().toISOString();

    try {
      const response = await axios.post(
        "/api/qna",
        { title, text, user: { userId }, writeDate },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log("데이터 저장 성공:", response.data);
      alert("문의가 등록되었습니다.");
      navigate("/customer");
    } catch (error) {
      console.error("에러:", error);
      alert("문의 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Img></Img>
      <Title>1 : 1 문의</Title>
      <Box>
        <InputTitle
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        ></InputTitle>
        <InputText
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="내용을 입력하세요"
        ></InputText>
      </Box>
      <RegisterButtonWrapper>
        <RegisterButton onClick={addQna}>등록하기</RegisterButton>
      </RegisterButtonWrapper>
      <ButtonWrapper>
        <ToBack onClick={() => window.history.back()}>목록으로</ToBack>
      </ButtonWrapper>
    </>
  );
}
