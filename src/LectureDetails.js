import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lecture } from "./Lecture";
import Pagination from "./Pagination";
import axios from "axios";

const Box1 = styled.div`
  display: flex;
  justify-content: center;
`;

const BigBox = styled.div`
  width: 60%;
  margin: 50px 0 50px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* gap: 20px; */
`;

const LecImg = styled.img`
  width: 350px;
  height: 200px;
  padding-bottom: 10px;
  border-radius: 20px;
  border: 1px solid #333;
  margin: 20px 0 15px;
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 350px;
  /* border: 1px solid dodgerblue; */
  cursor: pointer;
  padding: 10px;
`;

const Category = styled.div`
  padding-left: 3px;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const Price = styled.div`
  padding-left: 2px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Class = styled.div`
  display: inline-block;
  background-color: #21378d;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  padding: 3px 7px;
  line-height: 16px;
  font-size: 0.7rem;
  margin-left: 2px;
`;
const FooterMargin = styled.div`
  height: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: auto;
  height: 40px;
  border-radius: 30px;
  padding: 0 20px;
  border: none;
  background-color: ${(props) => (props.active ? "black" : "lightgray")};
  color: ${(props) => (props.active ? "white" : "black")};
  margin: 30px 15px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? "black" : "gray")};
  }
  &:active {
    background-color: ${(props) => (props.active ? "black" : "gray")};
    color: white;
  }
`;

const H = styled.h1`
  text-align: center;
  margin-top: 120px;
`;

export function LectureDetails() {
  const [lectures, setLectures] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체강의");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken == null) {
      return;
    }
    axios
      .get("http://localhost:8080/api/lecture", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("데이터", response.data);
        setLectures(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleCardClick = (lectureId) => {
    navigate(`/lecturelist/lecture/${lectureId}`);
  };

  const categories = ["전체강의", "RC", "LC", "Package"];

  const filteredLectures =
    activeCategory === "전체강의"
      ? lectures
      : lectures.filter((lecture) => lecture.subject === activeCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLectures.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Box1>
        <BigBox>
          <H>내가 필요한 강의는?</H>
          <ButtonWrapper>
            {categories.map((category) => (
              <Button
                key={category}
                active={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </ButtonWrapper>

          <Box>
            <Container>
              {currentItems.map((lecture) => (
                <CardBox
                  key={lecture.storeItemId}
                  onClick={() => handleCardClick(lecture.storeItemId)}
                >
                  <Card>
                    <LecImg></LecImg>
                    <Category>{lecture.subject}</Category>
                    <Title>{lecture.lectureName}</Title>
                    <Price>{lecture.lecPrice} 원</Price>
                    <Class>{lecture.lectureClass}</Class>
                  </Card>
                </CardBox>
              ))}
            </Container>
          </Box>
        </BigBox>
      </Box1>
      {filteredLectures.length > 0 && (
        <Pagination
          total={filteredLectures.length}
          limit={itemsPerPage}
          page={currentPage}
          setPage={handlePageChange}
        />
      )}
      <FooterMargin></FooterMargin>
    </>
  );
}
