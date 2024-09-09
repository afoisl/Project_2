import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const OrderTitle = styled.div`
  margin-top: 200px;
  font-size: 48px;
  text-align: center;
`;
const OrderBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 100px;
`;
const OrderBoxLeft = styled.div``;
const OrderBoxRight = styled.div`
  margin-left: 40px;
`;

const OrderProduct = styled.div`
  width: 621px;
  height: auto;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const OrderCustomer = styled.div`
  width: 621px;
  height: 120px;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px 30px 50px 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const OrderDelivery = styled.div`
  width: 621px;
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px 30px 60px 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const OrderPrice = styled.div`
  width: 413px;
  height: 170px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const OrderPayment = styled.div`
  width: 413px;
  height: 180px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
  padding: 30px 30px 50px 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const OrderPay = styled.div`
  width: 473px;
  height: 177px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const OrderText = styled.div`
  font-size: 17px;
  font-weight: bold;
  border-bottom: 0.7px solid #c8c8c8;
  padding-bottom: 13px;
`;
const OrderText1 = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const OrderProductGrid = styled.div`
  display: flex;
  margin-top: 22px;
`;
const OrderProductBox1 = styled.div`
  margin-right: 20px;
`;
const OrderProductBox2 = styled.div``;
const OrderBoxImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d9d9d9;
`;
const OrderText2 = styled.div`
  font-size: 15px;
  margin-right: 5px;
`;
const OrderText3 = styled.div`
  font-size: 15px;
  color: #7c7c7c;
`;
const OrderTextMargin = styled.div`
  height: 10px;
`;
const OrderTextMargin1 = styled.div`
  height: 5px;
`;
const OrderCustomerBox = styled.div`
  margin-top: 17px;
`;
const OrderDeliveryBox1 = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const OrderDeliveryBox2 = styled.div`
  margin-top: 20px;
`;
const OrderDeliveryBox3 = styled.div``;
const OrderDeliveryBox4 = styled.div``;
const OrderDeliveryAdress = styled.div`
  width: 70px;
  height: 35px;
  border: 1px solid black;
  text-align: center;
  line-height: 35px;
  font-size: 15px;
`;
const OrderMemo = styled.div`
  width: 599px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
`;
const OrderPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;
const OrderPriceBox1 = styled.div``;
const OrderPriceBox2 = styled.div``;
const OrderPriceLine = styled.div`
  width: 100%;
  margin: 25px 0;
  box-shadow: 0 0 0 0.4px #7c7c7c;
`;
const OrderText4 = styled.div`
  font-size: 17px;
`;
const OrderPaymentBox = styled.div`
  margin-top: 25px;
  display: flex;
`;
const OrderPaymentBox1 = styled.div`
  width: 383px;
  height: 20px;
  margin-top: 10px;
  border: 1px solid black;
  padding: 10px;
  font-size: 15;
`;
const OrderPaymentBox2 = styled.div`
  width: 383px;
  height: 20px;
  margin-top: 15px;
  border: 1px solid black;
  padding: 10px;
  font-size: 15;
  color: #5e5e5e;
`;
const OrderPayBox1 = styled.div`
  width: 100%;
  height: 87px;
  font-size: 17px;
  text-align: center;
  padding-top: 40px;
`;
const OrderPayBox2 = styled.div`
  width: 100%;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 0 0 25px 25px;
  background-color: #2f62cb;
`;
const NoBorderInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: #f5f2e9;

  &:focus {
    border: none;
    outline: none;
  }
`;

export function Order() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const directPurchaseItem = location.state?.lectures?.[0] || null;
  const items = directPurchaseItem ? [directPurchaseItem] : cartItems;
  const [isInputClicked, setIsInputClicked] = useState(false);

  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) =>
        total +
        (item.bookPrice || item.ticketPrice || item.lecPrice || 0) *
          (item.quantity || 1),
      0
    );
  };

  const calculateShippingCost = () => {
    return items.reduce((total, item) => total + (item.shippingCost || 0), 0);
  };

  const calculateGrandTotal = () => {
    return calculateTotalPrice() + calculateShippingCost();
  };

  const fetchCurrentUser = async () => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      throw new Error("JWT Token not found in sessionStorage");
    }
    try {
      const response = await axios.get("/api/user/current", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      console.log("Server response:", response.data); // Log the entire response

      if (!response.data || response.data.resultCode !== "SUCCESS") {
        throw new Error("Invalid response from server");
      }

      const userData = response.data.data;
      if (!userData || !userData.userId) {
        throw new Error("User data not found in server response");
      }

      console.log("Extracted user data:", userData);
      return userData;
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      if (error.response) {
        console.error("Server error response:", error.response.data);
        throw new Error(
          `Server error: ${
            error.response.data.message || error.response.statusText
          }`
        );
      }
      throw error;
    }
  };

  const fetchUserDetails = async (userId) => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      throw new Error("JWT Token not found in sessionStorage");
    }
    try {
      const response = await axios.get(`/api/user/id/${userId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      console.log("User details response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        const userDetails = await fetchUserDetails(currentUser.userId);
        setUser(userDetails);
        setError(null);
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

  const handlePurchase = async () => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      setError("인증 토큰이 없습니다. 다시 로그인해 주세요.");
      return;
    }

    try {
      const purchasePromises = items.map((item) => {
        let purchaseData = {
          user: {
            userId: user.userId,
          },
          purchaseTime: new Date().toISOString(),
          address: user.address,
          quantity: item.quantity || 1,
        };

        if (item.storeItemId) {
          purchaseData.storeItem = {
            storeItemId: item.storeItemId,
            itemName: item.bookName || item.mockTicketName,
            itemPrice: item.bookPrice || item.ticketPrice,
          };
        } else if (item.lectureId) {
          purchaseData.lecture = {
            lectureId: item.lectureId,
            lectureName: item.lectureName,
            lecturePrice: item.lecPrice,
          };
        }

        return axios.post("/api/purchase/save", purchaseData, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
      });

      const responses = await Promise.all(purchasePromises);
      console.log("Purchase responses:", responses);

      const purchaseIds = responses.map((response) => response.data.purchaseId);
      const orderDetails = {
        orderId: purchaseIds.join(","), // 여러 구매 ID를 쉼표로 구분하여 저장
        items: items.map((item) => ({
          name: item.bookName || item.mockTicketName || item.lectureName,
          price: item.bookPrice || item.ticketPrice || item.lecPrice,
          quantity: item.quantity || 1,
        })),
        totalPrice: calculateTotalPrice(),
        shippingCost: calculateShippingCost(),
        shippingInfo: {
          name: user.name,
          phoneNumber: user.phoneNumber,
          address: user.address,
        },
        paymentMethod: "무통장입금",
        paymentInfo: {
          name: user.name,
          bankInfo: "카카오뱅크 3333-0000000-00",
        },
      };

      navigate("/orderCompleted", {
        state: { orderDetails },
      });
    } catch (error) {
      console.error("Failed to complete purchase:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(
          `구매 실패: ${
            error.response.data.message || "알 수 없는 오류가 발생했습니다."
          }`
        );
      } else {
        setError("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      <Container>
        <OrderTitle>결제하기</OrderTitle>
        <OrderBoxGrid>
          <OrderBoxLeft>
            <OrderProduct>
              <OrderText>주문 상품 정보</OrderText>
              {items.map((item) => (
                <OrderProductGrid key={item.storeItemId}>
                  <OrderProductBox1>
                    <OrderBoxImg></OrderBoxImg>
                  </OrderProductBox1>
                  <OrderProductBox2>
                    <OrderText2>
                      {item.bookName || item.mockTicketName || item.lectureName}
                    </OrderText2>
                    <OrderText1>
                      가격:{" "}
                      {item.bookPrice || item.ticketPrice || item.lecPrice} 원
                    </OrderText1>
                    <OrderText1>수량: {item.quantity || 1}</OrderText1>
                    <OrderText1>
                      합계:{" "}
                      {(item.bookPrice || item.ticketPrice || item.lecPrice) *
                        (item.quantity || 1)}{" "}
                      원
                    </OrderText1>
                  </OrderProductBox2>
                </OrderProductGrid>
              ))}
            </OrderProduct>
            <OrderCustomer>
              <OrderText>주문자 정보</OrderText>
              <OrderCustomerBox>
                <OrderText2>이름 : {user.name}</OrderText2>
                <OrderTextMargin></OrderTextMargin>
                <OrderText2>이메일 : {user.email}</OrderText2>
                <OrderTextMargin></OrderTextMargin>
                <OrderText2>전화번호 : {user.phoneNumber}</OrderText2>
              </OrderCustomerBox>
            </OrderCustomer>
            <OrderDelivery>
              <OrderText>배송 정보</OrderText>
              <OrderDeliveryBox1>
                <OrderDeliveryBox3>
                  <OrderText2>이름 : {user.name}</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>전화번호 : {user.phoneNumber}</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>주소 : {user.address}</OrderText2>
                </OrderDeliveryBox3>
                <OrderDeliveryBox4>
                  <OrderDeliveryAdress>수정</OrderDeliveryAdress>
                </OrderDeliveryBox4>
              </OrderDeliveryBox1>
              <OrderDeliveryBox2>
                <OrderText2>배송 메모</OrderText2>
                <OrderMemo>
                  <OrderText2>배송 메모를 선택해 주세요.</OrderText2>
                  <OrderText1>▼</OrderText1>
                </OrderMemo>
              </OrderDeliveryBox2>
            </OrderDelivery>
          </OrderBoxLeft>
          <OrderBoxRight>
            <OrderPrice>
              <OrderText>최종 결제 금액</OrderText>
              <OrderPriceBox>
                <OrderPriceBox1>
                  <OrderText3>상품 가격</OrderText3>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText3>배송비</OrderText3>
                </OrderPriceBox1>
                <OrderPriceBox2>
                  <OrderText2>{calculateTotalPrice()} 원</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>
                    {calculateShippingCost() === 0
                      ? "무료"
                      : `${calculateShippingCost()} 원`}
                  </OrderText2>
                </OrderPriceBox2>
              </OrderPriceBox>
              <OrderPriceLine></OrderPriceLine>
              <OrderTextMargin1></OrderTextMargin1>

              <OrderPriceBox>
                <OrderText4>총 결제 금액</OrderText4>
                <OrderText1>{calculateGrandTotal()} 원</OrderText1>
              </OrderPriceBox>
            </OrderPrice>
            <OrderPayment>
              <OrderText>결제 수단</OrderText>
              <OrderPaymentBox>
                <input
                  type="radio"
                  name="payment"
                  value="무통장 입금"
                  style={{ marginRight: "15px" }}
                  defaultChecked
                />
                <OrderText2>무통장 입금</OrderText2>
              </OrderPaymentBox>
              <OrderPaymentBox1>
                ㅇㅇ은행 : 0000 - 00 - 0000 예금주명{" "}
              </OrderPaymentBox1>
              <OrderPaymentBox2>
                <NoBorderInput
                  onFocus={() => {
                    setIsInputClicked(true);
                  }}
                  onBlur={() => {
                    setIsInputClicked(false);
                  }}
                  placeholder={
                    isInputClicked === true
                      ? ""
                      : "입금자명 : (미입력시 주문자명)"
                  }
                />
              </OrderPaymentBox2>
            </OrderPayment>
            <OrderPay>
              <OrderPayBox1>
                약간 및 주문내용을 확인 하였으며 <br />
                정보제공에 동의합니다.
              </OrderPayBox1>
              <OrderPayBox2 onClick={handlePurchase}>
                {calculateGrandTotal()}원 결제하기
              </OrderPayBox2>
            </OrderPay>
          </OrderBoxRight>
        </OrderBoxGrid>
      </Container>
    </>
  );
}
