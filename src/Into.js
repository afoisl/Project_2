import styled from "styled-components";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About } from "./About";
import { Customer } from "./Customer";
import { Game } from "./Game";
import { LectureList } from "./LectureList";
import { LectureDetails } from "./LectureDetails";
import { Lecture } from "./Lecture";
import { Login } from "./Login";
import { Main } from "./Main";
import { SignUp } from "./SignUp";
import { Store } from "./Store";
import { StudyRoom } from "./StudyRoom";
import { Mock } from "./Mock";
import { MockExam } from "./MockExam";
import { MockResult } from "./MockResult";
import { GameShop } from "./GameShop";
import { GroupLecRoom } from "./GroupLecRoom";
import { GroupLecRoomDetail } from "./GroupLecRoomDetail";
import { SpecialLecRoom } from "./SpecialLecRoom";
import { Error } from "./Error";
import { MyLecture } from "./MyLecture";
import { Cart } from "./Cart";
import { MyPage } from "./Mypage";
import { Purchased } from "./Purchased";
import { Curriculum } from "./Curriculum";
import { Address } from "./Address";
import { Intro } from "./Intro";
import { HallOfFame } from "./HallOfFame";
import { MyLank } from "./MyLank";
import { ChatingRoom } from "./ChatingRoom";
import { NoticeDetail } from "./NoticeDetail";
import { NoticeWirte } from "./NoticeWrite";
import { QnaDetail } from "./QnaDetail";
import { QnaWrite } from "./QnaWrite";
import { Order } from "./Order";
import { LectureWrapper } from "./LectureWrapper";
import { StreamLecture } from "./StreamLecture";
import { LectureView } from "./LectureView";
import { OrderCompleted } from "./OrderCompleted";
import { StreamWrapper } from "./StreamWrapper";
import { CreateStream } from "./CreateStream";
import { FooterReal } from "./Footer";

const Container = styled.div`
  width: 100%;
`;
const Menubar = styled.div``;
const Body = styled.div`
  width: 100%;
`;

function AppContent() {
  const location = useLocation();

  const hideElements =
    location.pathname === "/login" || location.pathname === "/signup";

  console.log("로드됨");
  return (
    <>
      <Container>
        {!hideElements && (
          <Menubar>
            <Menu />
          </Menubar>
        )}
        <Body>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/Intro" element={<Intro />}>
              <Route path="about" element={<About />} />
              <Route path="curriculum" index element={<Curriculum />} />
              <Route path="address" index element={<Address />} />
            </Route>

            <Route path="/lecturelist" element={<LectureWrapper />}>
              <Route index element={<LectureList />} />
              <Route path="lecture/:id" element={<Lecture />} />
            </Route>

            <Route path="/store" element={<Store />} />

            <Route path="/mock" element={<Mock />}></Route>
            <Route path="/mock-exam" element={<MockExam />} />
            <Route path="/mock-result" element={<MockResult />} />
            <Route path="/halloffame" element={<HallOfFame />} />

            <Route path="/game" element={<Game />} />
            <Route path="/gameshop" element={<GameShop />} />

            <Route path="/studyroom" element={<StudyRoom />} />
            <Route
              path="/chating-room/:roomId/:userId"
              element={<ChatingRoom />}
            />
            <Route path="/grouplecroom" element={<GroupLecRoom />} />
            <Route path="/speciallecroom" element={<StreamWrapper />}>
              <Route index element={<SpecialLecRoom />} />
              <Route path=":streamId" element={<StreamLecture />} />
            </Route>
            <Route path="/create-stream" element={<CreateStream />} />
            <Route
              path="/grouplecroomdetail"
              element={<GroupLecRoomDetail />}
            />

            <Route path="/customer" element={<Customer />} />
            <Route path="/notice/:id" element={<NoticeDetail />} />
            <Route path="/notice/write" element={<NoticeWirte />} />
            <Route path="/qna/:id" element={<QnaDetail />} />
            <Route path="/qna/write" element={<QnaWrite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderCompleted" element={<OrderCompleted />} />
            <Route path="/lectureView/:storeItemId" element={<LectureView />} />

            <Route path="/mypage" element={<MyPage />}>
              <Route path="mylecture" element={<MyLecture />} />
              <Route path="mylank" element={<MyLank />} />
              <Route path="cart" element={<Cart />} />
              <Route path="purchased" element={<Purchased />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </Body>
      </Container>
      {!hideElements && <FooterReal />}
    </>
  );
}

export function Into() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}
