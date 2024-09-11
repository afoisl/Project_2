import styled from "styled-components";
import { LectureDetails } from "./LectureDetails";
import { Outlet } from "react-router-dom";
import { LectureBestSeller } from "./LectureBestSeller";

const Title = styled.div`
  padding: 200px 0 0 0;
  margin-bottom: -100px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  font-family: GmarketBold;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
`;

const BigBox = styled.div`
  width: 60%;
  margin-top: 100px;
`;
const LectureTopMargin = styled.div`
  height: 150px;
`;

export function LectureList() {
  return (
    <>
      <Title>강의</Title>
      <LectureTopMargin></LectureTopMargin>
      <LectureBestSeller />
      <Box1>
        <BigBox></BigBox>
      </Box1>
      <LectureDetails />

      <Outlet />
    </>
  );
}
