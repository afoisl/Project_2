import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const LectureDetailPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-top: 150px;
`;

const LectureBox1 = styled.div``;
const LectureBox2 = styled.div``;

const LectureImg = styled.div`
  width: 890px;
  height: 540px;
  background-color: #d9d9d9;
`;

const LectureGrade = styled.div`
  width: 70px;
  height: 25px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 25px;
`;

const LectureText1 = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const LectureText2 = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const LectureText3 = styled.div`
  font-size: 15px;
  margin-top: 30px;
  width: 250px;
  height: 132px;
`;

const LecturePrice = styled.div`
  width: 250px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  margin-top: 90px;
`;

const LectureCart = styled.div`
  width: 250px;
  height: 45px;
  border: 1px solid black;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer; // 커서가 포인터로 변경됨
`;

const LecturePurchase = styled.div`
  width: 250px;
  height: 45px;
  border: 1px solid black;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer; // 커서가 포인터로 변경됨
`;

export function Lecture() {
  const [lectures, setLectures] = useState([]);
  const { id } = useParams(); // id를 useParams로 가져옴
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/lecture/${id}`) // 템플릿 리터럴로 수정
      .then((response) => {
        console.log("데이터", response.data);
        setLectures([response.data]); // 배열로 설정
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]); // id가 변경될 때마다 재실행

  const handleAddToCart = (lecture) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      ...lecture,
      uniqueId: `${lecture.id}-${Date.now()}`, // 현재 시간을 사용하여 고유 ID 생성
    };
    const updatedCart = [...currentCart, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${lecture.lectureName} 강의가 장바구니에 담겼습니다.`);
  };

  const handleAddtoOrder = (lecture) => {
    navigate("/order", { state: { lectures: [lecture] } });
  };

  return (
    <Container>
      {lectures.map((lecture) => (
        <LectureDetailPage key={lecture.storeItemId}>
          <LectureBox1>
            <LectureImg></LectureImg>
          </LectureBox1>
          <LectureBox2>
            <LectureGrade>{lecture.lectureClass}</LectureGrade>
            <LectureText1>{lecture.lectureName}</LectureText1>
            <LectureText2>선생님 성함</LectureText2>
            <LectureText3>{lecture.lecContent}</LectureText3>
            <LecturePrice>{lecture.lecPrice} 원</LecturePrice>
            <LectureCart onClick={() => handleAddToCart(lecture)}>
              장바구니 담기
            </LectureCart>
            <LecturePurchase onClick={() => handleAddtoOrder(lecture)}>
              바로 구매
            </LecturePurchase>
          </LectureBox2>
        </LectureDetailPage>
      ))}
    </Container>
  );
}
