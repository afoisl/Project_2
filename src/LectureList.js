import styled from "styled-components";
import { LectureDetails } from "./LectureDetails";
import { Outlet } from "react-router-dom";
import { LectureBestSeller } from "./LectureBestSeller";

const Img = styled.div`
  width: 100%;
  height: 700px;
  background-color: gray;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
`;

const BigBox = styled.div`
  width: 60%;
`;

export function LectureList() {
  return (
    <>
      <Img></Img>
      <LectureBestSeller />
      <Box1>
        <BigBox></BigBox>
      </Box1>
      <LectureDetails />

      <Outlet />
    </>
  );
}
