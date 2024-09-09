import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 490px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartBtn = styled.div`
  width: 100px;
  height: 30px;
  background-color: gray;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
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

const Blank = styled.div`
  height: 200px;
`;

const Timer = styled.div`
  font-size: 60px;
`;

const ChoiceBtn = styled.div`
  width: 25px;
  margin: 13px;
  padding: 15px;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "lightgray")};
  text-align: center;
  cursor: pointer;
  border-radius: 18px;
  font-size: 20px;

  &:hover {
    background-color: lightblue;
  }
`;

const ChoiceBtnWrapper = styled.div`
  display: flex;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionText = styled.div`
  margin: 40px;
  height: 150px;
  font-size: 30px;
`;

export function MockExam() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null);
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

  const submitAnswer = (questionId, answer) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: answer };
    setSelectedAnswers(updatedAnswers);

    axios
      .post(`/api/mock/${mockId}/submit-answers`, updatedAnswers)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToNextQuestion = () => {
    if (selectedChoice === null) {
      alert("정답을 선택하세요!");
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    submitAnswer(currentQuestion.id, selectedChoice);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedChoice(null);
    } else {
      alert("모든 문제를 완료했습니다!");
      // 시험 종료시 코드 넣기 !!
      // navigate (시험결과 페이지)
      // 시험 답안 비교 & 시험 점수 받기 -> 시험 점수 출력
    }
  };

  const selectChoice = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <>
      <Blank></Blank>
      <Container>
        {!started ? (
          <>
            <h1>모의고사를 시작합니다</h1>
            <StartBtn onClick={() => setStarted(true)}>시작하기</StartBtn>
          </>
        ) : (
          <>
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
                <NextBtn onClick={goToNextQuestion}>다음</NextBtn>
              </QuestionBox>
            ) : (
              <p>문제를 불러오는 중입니다...</p>
            )}
          </>
        )}
      </Container>
      <Blank></Blank>
    </>
  );
}
