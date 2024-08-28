import React, { useState, useRef } from "react";
import styled from "styled-components";
import 내정보수정 from "./assets/img/내정보수정.png";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const MyPageTitle = styled.div`
  margin-top: 200px;
  font-size: 48px;

  text-align: center;
`;
const MyPageGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 150px;
  grid-gap: 40px;
`;
const MyPageBox1 = styled.div`
  width: 780px;
  height: 300px;
  border: 1px solid #727272;
`;
const MyPageBox2 = styled.div`
  width: 370px;
  height: 300px;
  border: 1px solid #727272;
`;
const MyPageBox1Grid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  margin: 25px 0;
`;
const MyPageBox1Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const MyPagePhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: grey;
  line-height: 100px;
  text-align: center;
  margin-left: 40px;
`;
const MyPageText = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;
const MyPageEdit = styled.div`
  width: 130px;
  height: 33px;
  border: 0.5px solid #2f62cb;
  font-size: 16px;
  color: #2f62cb;
  align-items: center;
  line-height: 33px;
  margin-right: 30px;
  text-align: center;
`;
const MyPageText1 = styled.div`
  display: flex;
`;
const TextBox1 = styled.div`
  font-size: 24px;
`;
const TextBox2 = styled.div`
  font-size: 18px;
  color: #646464;
`;
const MyPageText2 = styled.div`
  font-size: 20px;
  margin-top: 3px;
`;
const MyPageLine = styled.div`
  width: 720px;
  margin: 20px 30px;
  border: 1px dashed #727272;
`;
const MyRanking = styled.div`
  margin-left: 80px;
`;
const MyRankingBox = styled.div`
  width: 73px;
  height: 73px;
  background-color: grey;
  margin-bottom: 15px;
`;
const GameRanking = styled.div`
  margin-left: 80px;
`;
const GameRankingBox = styled.div`
  width: 73px;
  height: 73px;
  background-color: grey;
  margin-bottom: 15px;
`;
const GamePoint = styled.div`
  margin-left: 80px;
`;
const GamePiontBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 73px;
  height: 73px;
  text-align: center;
  line-height: 73px;
  margin-bottom: 15px;
`;
const MyPageLecture = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
`;
const MyPageLectureLine = styled.div`
  width: 369px;
  height: 1px;
  box-shadow: 0 0.5px 0 #727272;
`;
const MyPageLectureList = styled.div`
  width: 100%;
  height: 160px;
`;
const MyPageLectureGo = styled.div`
  width: 200px;
  height: 50px;
  background-color: #2f62cb;
  color: white;
  font-size: 18px;
  line-height: 50px;
  margin: 20px auto;
  border-radius: 25px;
  text-align: center;
`;

const MyPageSubMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 25px;
  margin-top: 130px;
  margin-bottom: 140px;
`;
const LearningStatusGo = styled.div`
  text-align: center;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 15px;
  }
`;
const OrderDeliveryGo = styled.div`
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
  text-underline-offset: 15px;
`;
const PointItemGo = styled.div`
  text-align: center;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 15px;
  }
`;
const MyWritingGo = styled.div`
  text-align: center;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 15px;
  }
`;

const LearningStatusTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px 50px 20px;
`;
const LearningStatusGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const LearningStatus = styled.div`
  margin-bottom: 150px;
`;
const OrderDeliveryTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px 50px 20px;
`;
const OrderDeliveryGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const OrderDelivery = styled.div`
  margin-bottom: 150px;
`;
const PointTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px 50px 20px;
`;
const PointGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const Point = styled.div`
  margin-bottom: 150px;
`;
const ItemTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px 50px 20px;
`;
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const Item = styled.div`
  margin-bottom: 150px;
`;
const MyWritingTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px 50px 20px;
`;
const MyWritingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1.5fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const MyWriting = styled.div`
  margin-bottom: 150px;
`;
const MypageMargin = styled.div`
  height: 150px;
`;
const Footer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: #8e8e8e;
  color: white;
  font-size: 24px;
  padding: 15px 0;
`;
const MenuItemGo = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 15px;
  }
`;

export function MyLank() {
  const [activeSection, setActiveSection] = useState("");
  const learningRef = useRef(null);
  const orderRef = useRef(null);
  const pointRef = useRef(null);
  const writingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Container>
        <MyPageTitle>마이페이지</MyPageTitle>
        <MyPageGrid>
          <MyPageBox1>
            <MyPageBox1Grid1>
              <MyPagePhoto>Image</MyPagePhoto>
              <MyPageText>
                <MyPageText1>
                  <TextBox1>###</TextBox1>
                  <TextBox2>　님 (가입일: 0000.00.00)</TextBox2>
                </MyPageText1>
                <MyPageText2>
                  인투어학원이 ###님의 토익점수를 응원합니다!
                </MyPageText2>
              </MyPageText>
              <MyPageEdit>
                내 정보 수정　
                <img src={내정보수정}></img>
              </MyPageEdit>
            </MyPageBox1Grid1>
            <MyPageLine></MyPageLine>
            <MyPageBox1Grid2>
              <MyRanking>
                <MyRankingBox></MyRankingBox>
                나의 랭킹
              </MyRanking>
              <GameRanking>
                <GameRankingBox></GameRankingBox>
                게임 등급
              </GameRanking>
              <GamePoint>
                <GamePiontBox>###</GamePiontBox>
                게임 포인트
              </GamePoint>
            </MyPageBox1Grid2>
          </MyPageBox1>
          <MyPageBox2>
            <MyPageLecture>최근수강</MyPageLecture>
            <MyPageLectureLine></MyPageLectureLine>
            <MyPageLectureList></MyPageLectureList>
            <MyPageLectureGo>내 강의실로 이동 ＞</MyPageLectureGo>
          </MyPageBox2>
        </MyPageGrid>
        <MyPageSubMenu>
          <MenuItemGo onClick={() => scrollToSection(learningRef)}>
            학습현황
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(orderRef)}>
            주문/배송
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(pointRef)}>
            포인트/아이템
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(writingRef)}>
            나의 글 관리
          </MenuItemGo>
        </MyPageSubMenu>
        <div ref={learningRef}>
          <LearningStatusTitle>학습현황</LearningStatusTitle>
          <LearningStatusGrid>
            <p>강좌명</p>
            <p>결제일</p>
            <p>결제금액</p>
            <p>결제방법</p>
            <p>상태</p>
          </LearningStatusGrid>
          <LearningStatus></LearningStatus>
        </div>

        <div ref={orderRef}>
          <OrderDeliveryTitle>주문/배송</OrderDeliveryTitle>
          <OrderDeliveryGrid>
            <p>주문일자(주문번호)</p>
            <p>주문 상품 정보</p>
            <p>총 결제 금액</p>
            <p>상태</p>
          </OrderDeliveryGrid>
          <OrderDelivery></OrderDelivery>
        </div>

        <div ref={pointRef}>
          <PointTitle>포인트 내역</PointTitle>
          <PointGrid>
            <p>날짜</p>
            <p>내용</p>
            <p>사용/적립</p>
            <p>잔여 포인트</p>
          </PointGrid>
          <Point></Point>
          <ItemTitle>보유 아이템</ItemTitle>
          <ItemGrid>
            <p>아이템</p>
            <p>정보</p>
            <p>남은 갯수</p>
          </ItemGrid>
          <Item></Item>
        </div>

        <div ref={writingRef}>
          <MyWritingTitle>나의 글 관리</MyWritingTitle>
          <MyWritingGrid>
            <p>게시판</p>
            <p>분류</p>
            <p>제목/내용</p>
            <p>등록일</p>
          </MyWritingGrid>
          <MyWriting></MyWriting>
        </div>
      </Container>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
