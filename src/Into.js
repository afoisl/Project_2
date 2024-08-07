import styled from "styled-components";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Customer } from "./Customer";
import { Game } from "./Game";
import { LectureList } from "./LectureList";
import { Lecture } from "./Lecture";
import { Login } from "./Login";
import { Main } from "./Main";
import { SignUp } from "./SignUp";
import { Store } from "./Store";
import { StudyRoom } from "./StudyRoom";
import { Test } from "./Test";
import { GameShop } from "./GameShop";
import { GroupLecRoom } from "./GroupLecRoom";
import { SpecialLecRoom } from "./SpecialLecRoom";
import { Error } from "./Error";
import { MyLecture } from "./MyLecture";
import { Cart } from "./Cart";
import { MyPage } from "./Mypage";
import { Purchased } from "./Purchased";

const Container = styled.div`
  width: 100%;
`;
const Menubar = styled.div``;
const Body = styled.div`
  width: 100%;
`;

export function Into() {
  console.log("로드됨");
  return (
    <>
      <BrowserRouter>
        <Container>
          <Menubar>
            <Menu />
          </Menubar>
          <Body>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/lecturelist" element={<LectureList />}>
                <Route index element={<LectureList />} />
                <Route path=":id" element={<Lecture />} />
              </Route>
              <Route path="/mylecture" element={<MyLecture />} />
              <Route path="/store" element={<Store />} />
              <Route path="/test" element={<Test />} />
              <Route path="/game" element={<Game />} />
              <Route path="/gameshop" element={<GameShop />} />
              <Route path="/studyroom" element={<StudyRoom />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/grouplecroom" element={<GroupLecRoom />} />
              <Route path="/speciallecroom" element={<SpecialLecRoom />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/purchased" element={<Purchased />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Body>
        </Container>
      </BrowserRouter>
    </>
  );
}
