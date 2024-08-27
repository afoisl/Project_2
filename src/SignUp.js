import { useEffect, useState } from "react";
import styled from "styled-components";
import { BirthdaySelector } from "./BirthdaySelector";
import axios from "axios";
import { useForm } from "react-hook-form";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 100px 0 50px;
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

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  margin-left: 13px;
  color: blue;
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

  const {
    register,
    watch,
    control,
    setValue,
    getValues,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
      password: "",
      passwordCheck: "",
      term: false,
    },
  });

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
      gender: gender,
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

  useEffect(() => {
    if (
      watch("password") !== watch("passwordCheck") &&
      watch("passwordCheck")
    ) {
      setError("passwordCheck", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors("passwordCheck");
    }
  }, [watch("password"), watch("passwordCheck")]);

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
          name="password"
          placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              message: "영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요",
            },
          })}
          value={password}
          maxLength={15}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <InputBox
          name="passwordCheck"
          placeholder="비밀번호 확인"
          type="password"
          {...register("passwordCheck", {
            required: "비밀번호를 확인해주세요",
            validate: {
              matchPassword: (value) => {
                const { password } = getValues();
                return password === value || "비밀번호가 일치하지 않습니다";
              },
            },
          })}
          value={confirmPassword}
          maxLength={15}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.passwordCheck && (
          <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
        )}
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
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputBox
          placeholder="이메일"
          type="email"
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
