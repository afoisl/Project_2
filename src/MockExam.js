import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  height: 550px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartBtn = styled.div`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

const MoveBtnWrapper = styled.div`
  display: flex;
  margin: 30px;
`;

const NextBtn = styled.div`
  width: 100px;
  height: 25px;
  background-color: blue;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 40px;
`;

const PrevBtn = styled.div`
  width: 100px;
  height: 25px;
  background-color: blue;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 40px;
`;

const EndBtn = styled.div`
  width: 100px;
  height: 25px;
  background-color: red;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 40px;
`;

const Blank = styled.div`
  height: 160px;
`;

const Blank2 = styled.div`
  height: 120px;
`;

const Timer = styled.div`
  font-size: 60px;
`;

const ChoiceBtn = styled.div`
  width: 25px;
  margin: 13px;
  padding: 15px;
  background-color: ${({ isSelected }) =>
    isSelected ? "lightblue" : "lightgray"};
  text-align: center;
  cursor: pointer;
  border-radius: 18px;
  font-size: 20px;

  &:hover {
    background-color: blue;
  }
`;

const ChoiceBtnWrapper = styled.div`
  display: flex;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const QuestionText = styled.div`
  margin: 40px;
  height: 150px;
  font-size: 30px;
`;

const Intro = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 30px;
`;

const IntroText = styled.div`
  margin: 5px;
  font-size: 20px;
`;

export function MockExam() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(350);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("UserID");
  const mockId = 1;

  useEffect(() => {
    axios
      .get(`/api/mock/${mockId}/questions`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mockId]);

  useEffect(() => {
    let timer;
    if (started && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      alert("시험이 종료되었습니다. 답안을 제출합니다.");
      submitAllAnswers();
      navigate(`/mock-result`);
    }

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const goToNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: selectedChoice || null, // 답변 없으면 null로 저장
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedChoice(
        selectedAnswers[questions[currentQuestionIndex + 1]?.id] || null
      );
    } else {
      if (window.confirm("모든 문제를 완료했습니다! 제출하시겠습니까?")) {
        submitAllAnswers();
        navigate(`/mock-result`);
      }
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedChoice(
        selectedAnswers[questions[currentQuestionIndex - 1]?.id] || null
      );
    }
  };

  const submitAllAnswers = () => {
    const finalAnswers = questions.reduce((answers, question) => {
      answers[question.id] = selectedAnswers[question.id] || null;
      return answers;
    }, {});

    console.log(finalAnswers);
    axios
      .post(`/api/mock/submit-answers/${mockId}/${userId}`, finalAnswers)
      .then((response) => {
        console.log(response.data);
        alert("시험이 종료되었습니다");
        calculateScore();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateScore = () => {
    axios
      .post(`api/mock/calculate-score/${mockId}/${userId}`)
      .then((response) => {
        const score = response.data;

        axios
          .post(`api/mock/save-grade/${mockId}/${userId}/${score}`)
          .then((response) => {
            console.log(response.data);
          });

        navigate(`/mock-result`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectChoice = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <>
      <Blank></Blank>
      <Container>
        {!started ? (
          <Intro>
            <IntroTitle>모의고사를 시작합니다</IntroTitle>
            <IntroText>
              * 시험 응시 시간은 2시간이며, 카운트다운이 끝나면 자동으로 시험이
              종료됩니다.{" "}
            </IntroText>
            <IntroText>
              * 중간에 시험을 종료할 시 재개할 수 없습니다.{" "}
            </IntroText>
            <StartBtn onClick={() => setStarted(true)}>시작하기</StartBtn>
          </Intro>
        ) : (
          <>
            <EndBtn onClick={submitAllAnswers}>종료</EndBtn>
            <Timer>{formatTime(timeLeft)}</Timer>
            {questions.length > 0 ? (
              <QuestionBox>
                <QuestionText>
                  {questions[currentQuestionIndex].content}
                </QuestionText>
                <ChoiceBtnWrapper>
                  {["A", "B", "C", "D"].map((choice, index) => (
                    <ChoiceBtn
                      key={index}
                      onClick={() => selectChoice(choice)}
                      isSelected={selectedChoice === choice}
                    >
                      {choice}
                    </ChoiceBtn>
                  ))}
                </ChoiceBtnWrapper>
                <MoveBtnWrapper>
                  <PrevBtn onClick={goToPrevQuestion}>이전</PrevBtn>
                  <NextBtn onClick={goToNextQuestion}>다음</NextBtn>
                </MoveBtnWrapper>
              </QuestionBox>
            ) : (
              <p>문제를 불러오는 중입니다...</p>
            )}
          </>
        )}
      </Container>
      <Blank2></Blank2>
    </>
  );
}
