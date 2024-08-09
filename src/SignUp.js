import { useState } from "react";
import styled from "styled-components";
import { BirthdaySelector } from "./BirthdaySelector";
import arrowBack from "./assets/img/arrowBack.png";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
`;

const BackButton = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 50px;
  margin-left: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 800px;
  justify-content: center;
  margin: 0 auto;
`;

const InputBox = styled.input`
  margin: 10px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SelectYear = styled.select`
  margin: 10px;
  padding: 10px 10px;
  padding-right: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const SelectMonth = styled.select`
  margin: 10px;
  padding: 10px 10px;
  padding-right: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const SelectDay = styled.select`
  margin: 10px;
  padding: 10px 10px;
  padding-right: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SelectGender = styled.select`
  margin: 10px;
  padding: 10px;
  padding-right: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SignupButton = styled.button`
  margin: 10px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: black;
  color: white;
`;

export function SignUp() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");

  const { yearOptions, monthOptions, days } = BirthdaySelector({ year, month });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직
    console.log(`생년월일: ${year}-${month}-${day}`);
    console.log(`성별: ${gender}`);
  };

  return (
    <>
      <BackButton>
        <img src={arrowBack} alt="BackButton" width={40} height={40} />
      </BackButton>
      <Box>
        <Title>회원가입</Title>
        <InputBox placeholder="아이디"></InputBox>
        <InputBox placeholder="비밀번호"></InputBox>
        <InputBox placeholder="비밀번호 확인"></InputBox>
        <InputBox placeholder="이름"></InputBox>
        <InputBox placeholder="닉네임"></InputBox>
        <InputBox placeholder="휴대폰"></InputBox>
        <InputBox placeholder="이메일"></InputBox>
        <div className="info" id="info__birth">
          <SelectYear value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">출생년도</option>
            {yearOptions}
          </SelectYear>
          <SelectMonth value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">월</option>
            {monthOptions}
          </SelectMonth>
          <SelectDay value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">일</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </SelectDay>
        </div>
        <SelectGender
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </SelectGender>
        <InputBox placeholder="주소"></InputBox>
        <SignupButton>회원가입</SignupButton>
      </Box>
    </>
  );
}
