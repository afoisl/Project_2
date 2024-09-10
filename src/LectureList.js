import styled from "styled-components";
import { LectureDetails } from "./LectureDetails";
import { Outlet } from "react-router-dom";
import { LectureBestSeller } from "./LectureBestSeller";

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
