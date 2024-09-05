import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box1 = styled.div`
  display: flex;
  justify-content: center;
`;

const BigBox = styled.div`
  width: 60%;
  margin: 50px 0 50px 0;
`;

const H1 = styled.h1`
  /* margin: 150px 0px 30px 395px; */
  font-size: 2.2rem;
  font-weight: 400;
  padding-left: 20px;
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
  border: 1px solid grey;
  margin-bottom: 15px;
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

const SliderWrapper = styled.div`
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

export function LectureBestSeller() {
  const [lectures, setLectures] = useState([]);

  const navigate = useNavigate();

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box1>
      <BigBox>
        <H1>Best Seller</H1>
        <SliderWrapper>
          <Slider {...settings}>
            {lectures.map((lecture) => (
              <div key={lecture.storeItemId}>
                <Card onClick={() => handleCardClick(lecture.storeItemId)}>
                  <LecImg
                    src="/api/placeholder/350/200"
                    alt={lecture.lectureName}
                  />
                  <Category>{lecture.subject}</Category>
                  <Title>{lecture.lectureName}</Title>
                  <Price>{lecture.lecPrice} 원</Price>
                  <Class>{lecture.lectureClass}</Class>
                </Card>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </BigBox>
    </Box1>
  );
}
