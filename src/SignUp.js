import { useState } from "react";
import styled from "styled-components";
import { BirthdaySelector } from "./BirthdaySelector";
import axios from "axios";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
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
  padding: 10px;
  padding-right: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const SelectMonth = styled.select`
  margin: 10px 20px;
  padding: 10px 12px;
  padding-right: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const SelectDay = styled.select`
  margin: 10px;
  padding: 10px 12px;
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
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const { yearOptions, monthOptions, days } = BirthdaySelector({ year, month });

  const handleSubmit = (e) => {
    e.preventDefault();

    // form data
    const userData = {
      userId: userId,
      name: name,
      password: password,
      birthDate: `${year}-${month}-${day}`,
      phoneNumber: phoneNumber,
      address: address,
      gender: [gender],
      email: email,
      nickname: nickname,
    };
    axios
      .post("http://localhost:8080/api/user/signup", userData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("회원가입 성공:", response.data);
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      });
  };

  return (
    <>
      <Box>
        <Title>회원가입</Title>
        <InputBox
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <InputBox
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputBox
          placeholder="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <InputBox
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputBox
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <InputBox
          placeholder="휴대폰"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputBox
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <InputBox
          placeholder="주소"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <SignupButton onClick={handleSubmit}>회원가입</SignupButton>
      </Box>
    </>
  );
}
