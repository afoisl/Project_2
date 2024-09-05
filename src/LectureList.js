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
  margin-top: 100px;
`;

const H = styled.h1`
  text-align: center;
  margin-top: 120px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: auto;
  height: 40px;
  border-radius: 30px;
  padding: 0 20px;
  border: none;
  background-color: ${(props) => (props.active ? "black" : "lightgray")};
  margin: 30px 15px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? "black" : "gray")};
  }
  &:active {
    background-color: ${(props) => (props.active ? "black" : "black")};
    color: white;
  }
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
