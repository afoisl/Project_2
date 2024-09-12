import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Box = styled.div`
  padding: 200px 0 0;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const LectureVideo = styled.div`
  width: 100%;
  height: 540px;
  background-color: #d9d9d9;
`;
const LectureDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
`;
const LectureTitle = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
`;
const LectureTeacherName = styled.div`
  font-size: 16px;
  margin-top: 22px;
`;
const LectureClass = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 25px;
  background-color: black;
  color: white;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
`;
export function LectureView() {
  const { storeItemId } = useParams();
  const [purchaseData, setPurchaseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken == null) {
      setIsLoading(false);
      return;
    }
    axios
      .get(`/api/purchase`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        const purchases = Array.isArray(response.data)
          ? response.data
          : [response.data];
        const foundPurchase = purchases.find(
          (p) =>
            p.lectures &&
            p.lectures.length > 0 &&
            p.lectures[0].storeItemId.toString() === storeItemId
        );
        setPurchaseData(foundPurchase);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching purchase:", error);
        setIsLoading(false);
      });
  }, [storeItemId]);

  if (isLoading) {
    return <div>강의 정보를 불러오는 중...</div>;
  }

  if (
    !purchaseData ||
    !purchaseData.lectures ||
    purchaseData.lectures.length === 0
  ) {
    return <div>강의 정보를 찾을 수 없습니다.</div>;
  }

  const lectureData = purchaseData.lectures[0];

  return (
    <>
      <Box></Box>
      <Container>
        <LectureVideo>강의영상</LectureVideo>
        <LectureClass>{lectureData.lectureClass || "분류 없음"}</LectureClass>
        <LectureDisplay>
          <LectureTitle>
            {lectureData.lectureName || "강의명 없음"}
          </LectureTitle>
          <LectureTeacherName>
            {lectureData.teacher
              ? `${lectureData.teacher.name} 선생님`
              : "선생님 정보 없음"}
          </LectureTeacherName>
        </LectureDisplay>
      </Container>
    </>
  );
}
