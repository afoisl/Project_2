import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import 예시 from "./assets/img/예시.png";
import { imageSource } from "./ImageSource";

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 35px;
`;

const LectureDetailPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 200px 0 114px;
`;

const LectureBox1 = styled.div``;
const LectureBox2 = styled.div``;

const LectureImg = styled.img`
  width: 890px;
  height: 540px;
`;

const LectureGrade = styled.div`
  width: 70px;
  height: 25px;
  background-color: #21378d;
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
  background-color: #21378d;
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
  border: 1px solid #21378d;
  background-color: white;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 20px;
  color: #21378d;
  cursor: pointer; // 커서가 포인터로 변경됨
`;

const LecturePurchase = styled.div`
  width: 250px;
  height: 45px;
  border: 1px solid #21378d;
  background-color: white;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 20px;
  color: #21378d;
  cursor: pointer; // 커서가 포인터로 변경됨
`;

export function Lecture() {
  const [lectures, setLectures] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const jwtToken = sessionStorage.getItem("JWT-Token");
      const userId = sessionStorage.getItem("UserID");
      if (!jwtToken || !userId) {
        navigate("/login");
        return;
      }

      try {
        // 강의 정보 가져오기
        const lectureResponse = await axios.get(
          `http://localhost:8080/api/lecture/${id}`,
          {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }
        );

        const lectureData = lectureResponse.data;
        console.log("강의 데이터:", lectureData);
        setLectures([lectureData]);

        // 여기서 실제 사용할 ID를 확인합니다.
        const lectureId = lectureData.storeItemId || lectureData.lectureId;

        if (!lectureId) {
          console.error("강의 ID를 찾을 수 없습니다.");
          return;
        }

        // 구매 여부 확인
        const purchaseResponse = await axios.get(
          `http://localhost:8080/api/purchase/check/${userId}/${lectureId}`,
          { headers: { Authorization: `Bearer ${jwtToken}` } }
        );

        console.log("구매 여부 응답:", purchaseResponse.data);
        setIsPurchased(purchaseResponse.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        if (error.response) {
          console.error("서버 응답:", error.response.data);
        }
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleAddToCart = (lecture) => {
    if (isPurchased) {
      alert("이미 구매한 강의입니다.");
      return;
    }
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      ...lecture,
      uniqueId: `${lecture.storeItemId}-${Date.now()}`,
    };
    const updatedCart = [...currentCart, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${lecture.lectureName} 강의가 장바구니에 담겼습니다.`);
  };

  const handleAddtoOrder = (lecture) => {
    if (isPurchased) {
      alert("이미 구매한 강의입니다.");
      return;
    }
    navigate("/order", { state: { lectures: [lecture] } });
    console.log(lectures);
  };

  return (
    <Container>
      {lectures.map((lecture) => (
        <LectureDetailPage key={lecture.storeItemId}>
          <LectureBox1>
            <LectureImg src={imageSource[lecture.lectureImage]} />
          </LectureBox1>
          <LectureBox2>
            <LectureGrade>{lecture.lectureClass}</LectureGrade>
            <LectureText1>{lecture.lectureName}</LectureText1>
            <LectureText2>강사 : Tr.</LectureText2>
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
