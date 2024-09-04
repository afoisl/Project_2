import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import 내정보수정 from "./assets/img/내정보수정.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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
  margin-top: 8px;
`;
const MyPageText2 = styled.div`
  font-size: 18px;
  margin-top: 5px;
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
  cursor: pointer;
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
  grid-template-columns: 7fr 3fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;
const LearningStatus = styled.div`
  margin: 0 0 150px 0;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 7fr;
  text-align: end;
  padding: 15px;
`;
const MyPurchaseTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 17px;
  text-align: start;
`;
const PurchaseStaus = styled.div``;
const MyLectureClass = styled.div`
  width: 70px;
  height: 30px;
  background-color: #2f62cb;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-bottom: 10px;
`;
const MyLectureSubject = styled.div`
  color: #797979;
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
  grid-template-columns: 6fr 1fr 2fr;
  background-color: #fafafa;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
`;

const PurchaseImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin: auto;
`;
const PurchaseTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductType = styled.span`
  font-size: 0.8em;
  color: #666;
`;
const PurchaseDate = styled.div``;
const PurchasePrice = styled.div``;
const PurchaseItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 1fr;
  text-align: center;
  align-items: center;
  padding: 15px;
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
  height: 100px;
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
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [purchases, setPurchases] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMyLectureClick = () => {
    navigate(`/mypage/mylecture`);
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get("/api/user/current", {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      throw error;
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const jwtToken = sessionStorage.getItem("JWT-Token");
      if (jwtToken != null) {
        const response = await axios.get(`/api/user/id/${userId}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      throw error;
    }
  };
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString("ko-KR", options);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(price);
  };
  const getProductInfo = (purchase) => {
    if (purchase.lectures && purchase.lectures.length > 0) {
      return {
        name: purchase.lectures[0].lectureName || "강의명 없음",
        type: "강의",
      };
    } else if (purchase.books && purchase.books.length > 0) {
      return {
        name: purchase.books[0].bookName || "상품명 없음",
        type: "상품",
      };
    } else if (purchase.mockTickets && purchase.mockTickets.length > 0) {
      return {
        name: purchase.mockTickets[0].mockTicketName || "상품명 없음",
        type: "상품",
      };
    } else {
      return {
        name: "알 수 없음",
        type: "기타",
      };
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken == null) {
      return;
    }
    axios
      .get(`/api/purchase`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("데이터", response.data);

        const purchasesArray = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setPurchases(purchasesArray);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);

  const extractLectures = (purchases) => {
    return purchases.flatMap((purchase) =>
      purchase.lectures ? purchase.lectures : []
    );
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userId = sessionStorage.getItem("UserID");
        console.log("userID", userId);
        if (userId != null) {
          const userDetails = await fetchUserDetails(userId);
          setUser(userDetails);
          setError(null);
        } else {
          console.log("토큰없음");
          throw new Error("User not authenticated");
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setError(err.message);
        navigate("/login", { state: { from: location.pathname } });
      }
    };

    getUserData();
  }, [navigate, location.pathname]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

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
                  <TextBox1>{user.name}</TextBox1>
                  <TextBox2>　님 </TextBox2>
                </MyPageText1>
                <MyPageText2>
                  인투어학원이 {user.name}님의 토익점수를 응원합니다!
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
            <MyPageLectureGo onClick={handleMyLectureClick}>
              내 강의실로 이동 ＞
            </MyPageLectureGo>
          </MyPageBox2>
        </MyPageGrid>
        <MyPageSubMenu>
          <MenuItemGo onClick={() => scrollToSection(learningRef)}>
            학습현황
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(pointRef)}>
            구매내역
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(orderRef)}>
            주문/배송
          </MenuItemGo>
          <MenuItemGo onClick={() => scrollToSection(writingRef)}>
            나의 글 관리
          </MenuItemGo>
        </MyPageSubMenu>
        <div ref={learningRef}>
          <LearningStatusTitle>학습현황</LearningStatusTitle>
          <LearningStatusGrid>
            <p>강좌명</p>
            <p>상태</p>
          </LearningStatusGrid>
          <LearningStatus>
            {isLoading ? (
              <p>강좌 정보를 불러오는 중입니다...</p>
            ) : purchases.length > 0 ? (
              extractLectures(purchases).map((lecture, index) => (
                <React.Fragment key={index}>
                  <MyPurchaseTitle>{lecture.lectureName},</MyPurchaseTitle>
                  <MyLectureClass>{lecture.lectureClass}</MyLectureClass>
                  <MyLectureSubject>{lecture.subject}</MyLectureSubject>
                  <PurchaseStaus>진행중</PurchaseStaus>
                </React.Fragment>
              ))
            ) : (
              <p>수강 중인 강좌가 없습니다.</p>
            )}
          </LearningStatus>
        </div>

        <div ref={pointRef}>
          <PointTitle>구매내역</PointTitle>
          <PointGrid>
            <p>상품</p>
            <p>구매일시</p>
            <p>금액</p>
          </PointGrid>
          {isLoading ? (
            <p>구매 내역을 불러오는 중입니다...</p>
          ) : purchases && purchases.length > 0 ? (
            purchases.map((purchase, index) => {
              const productInfo = getProductInfo(purchase);
              return (
                <PurchaseItem key={index}>
                  <PurchaseImg />
                  <PurchaseTitle>
                    <ProductName>{productInfo.name}</ProductName>
                    <ProductType>{productInfo.type}</ProductType>
                  </PurchaseTitle>
                  <PurchaseDate>
                    {formatDate(purchase.purchaseTime)}
                  </PurchaseDate>
                  <PurchasePrice>
                    {purchase.storeItem
                      ? formatPrice(purchase.storeItem.itemPrice)
                      : "가격 정보 없음"}
                  </PurchasePrice>
                </PurchaseItem>
              );
            })
          ) : (
            <p>구매 내역이 없습니다.</p>
          )}
        </div>
        <MypageMargin></MypageMargin>

        <div ref={orderRef}>
          <OrderDeliveryTitle>주문/배송</OrderDeliveryTitle>
          <OrderDeliveryGrid>
            <p>주문일자(주문번호)</p>
            <p>주문 상품 정보</p>
            <p>배송지</p>
            <p>상태</p>
          </OrderDeliveryGrid>
          <OrderDelivery></OrderDelivery>
        </div>

        <ItemTitle>보유 아이템</ItemTitle>
        <ItemGrid>
          <p>아이템</p>
          <p>정보</p>
          <p>남은 갯수</p>
        </ItemGrid>
        <Item></Item>

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
    </>
  );
}
