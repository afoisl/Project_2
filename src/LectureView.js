import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const LectureVideo = styled.div`
  width: 100%;
  height: 540px;
  background-color: #d9d9d9;
  margin-top: 150px;
`;
const LectureDisplay = styled.div`
  display: flex;
  justify-content: space-between;
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
  const [lecture, setLecture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/lecture/${storeItemId}`)
      .then((response) => {
        setLecture(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching lecture:", error);
        setIsLoading(false);
      });
  }, [storeItemId]);

  if (isLoading) {
    return <div>강의 정보를 불러오는 중...</div>;
  }

  if (!lecture) {
    return <div>강의 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Container>
        <LectureVideo>강의영상</LectureVideo>
        <LectureClass>{lecture.lectureClass}</LectureClass>
        <LectureDisplay>
          <LectureTitle>{lecture.lectureName}</LectureTitle>
          <LectureTeacherName>
            {lecture.teacher
              ? `${lecture.teacher.name} 선생님`
              : "선생님 정보 없음"}
          </LectureTeacherName>
        </LectureDisplay>
      </Container>
    </>
  );
}
