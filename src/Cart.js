import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: auto;
`;
const CartTitle = styled.div`
  margin-top: 200px;
  font-size: 48px;
  text-align: center;
`;
const CartMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr;
  margin-top: 120px;
  background-color: #fafafa;
  width: 100%;
  height: 80px;
  align-items: center;
  text-align: center;
  font-size: 22px;
`;
const CartItemGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  margin: 15px 0;
`;
const CartItemImg = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-left: 80px;
`;
const CartItemText = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 160px;
  font-weight: bold;
`;
const CartItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartItemCount1 = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
const CountButton = styled.button`
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
const CartItemPrice = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 25px;
  font-weight: bold;
`;
const CartItemTotalPrice = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 25px;
  font-weight: bold;
`;
const CartItemDelivery = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 25px;
`;
const CartItemLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin: 15px;
  transform: scale();
  transform-origin: center;
`;
const CartItemBox = styled.div``;
const CartPriceBox = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 35px;
  background-color: #fafafa;
  margin: 80px 0 50px 0;
  display: flex;
  line-height: 90px;
  align-items: center;
  justify-content: end;
  padding-right: 30px;
`;
const CartPriceText1 = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;
const CartPriceText2 = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-right: 20px;
`;
const CartPricePlus = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #5e5e5e;
  text-align: center;
  line-height: 25px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;
const CartPriceEqual = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  text-align: center;
  line-height: 25px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;
const CartOrderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartOrderBox1 = styled.div`
  display: flex;
`;
const CartOrderDelete = styled.div`
  width: 150px;
  height: 50px;
  background-color: #575757;
  color: white;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
`;
const CartSelectOrder = styled.div`
  width: 225px;
  height: 60px;
  background-color: #5c5c5c;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  text-align: center;
  line-height: 60px;
`;
const CartAllOrder = styled.div`
  width: 225px;
  height: 60px;
  background-color: #2f62cb;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  text-align: center;
  line-height: 60px;
  margin-left: 20px;
`;
const CartMargin = styled.div`
  height: 200px;
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

export function Cart() {
  const [count, setCount] = useState(0);
  function countPlus() {
    setCount(count + 1);
  }
  function countMinus() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("최소 1개 이상 주문이 가능합니다");
    }
  }
  return (
    <>
      <Container>
        <CartTitle>장바구니</CartTitle>
        <CartMenuGrid>
          <input
            type="checkbox"
            style={{
              transform: "scale(2.3)",
              transformOrigin: "0 0",
            }}
          />
          <p>상품/옵션 정보</p>
          <p>수량</p>
          <p>상품 금액</p>
          <p>합계/금액</p>
          <p>배송비</p>
        </CartMenuGrid>
        <CartItemBox>
          <CartItemGrid>
            <input
              type="checkbox"
              style={{
                transform: "scale(2.3)",
                transformOrigin: "0 0",
              }}
            />
            <CartItemImg></CartItemImg>
            <CartItemText>모의고사 응모권</CartItemText>
            <CartItemCount>
              <CountButton onClick={countMinus}>-</CountButton>
              <CartItemCount1>{count}</CartItemCount1>
              <CountButton onClick={countPlus}>+</CountButton>
            </CartItemCount>
            <CartItemPrice>#### 원</CartItemPrice>
            <CartItemTotalPrice>#### 원</CartItemTotalPrice>
            <CartItemDelivery>무료</CartItemDelivery>
          </CartItemGrid>
          <CartItemLine></CartItemLine>
        </CartItemBox>
        <CartItemBox>
          <CartItemGrid>
            <input
              type="checkbox"
              style={{
                transform: "scale(2.3)",
                transformOrigin: "0 0",
              }}
            />
            <CartItemImg></CartItemImg>
            <CartItemText>도서제목 ####</CartItemText>
            <CartItemCount>
              <CountButton onClick={countMinus}>-</CountButton>
              <CartItemCount1>{count}</CartItemCount1>
              <CountButton onClick={countPlus}>+</CountButton>
            </CartItemCount>
            <CartItemPrice>#### 원</CartItemPrice>
            <CartItemTotalPrice>#### 원</CartItemTotalPrice>
            <CartItemDelivery>3000원</CartItemDelivery>
          </CartItemGrid>
          <CartItemLine></CartItemLine>
        </CartItemBox>
        <CartPriceBox>
          <CartPriceText1>총 # 개의 상품</CartPriceText1>
          <CartPriceText2>#### 원</CartPriceText2>
          <CartPricePlus>+</CartPricePlus>
          <CartPriceText1>배송비 ###원</CartPriceText1>
          <CartPriceEqual>=</CartPriceEqual>
          <CartPriceText1>#### 원</CartPriceText1>
        </CartPriceBox>
        <CartOrderBox>
          <CartOrderDelete>선택 상품 삭제</CartOrderDelete>
          <CartOrderBox1>
            <CartSelectOrder>선택 상품 주문</CartSelectOrder>
            <CartAllOrder>전체 상품 주문</CartAllOrder>
          </CartOrderBox1>
        </CartOrderBox>
      </Container>
      <CartMargin></CartMargin>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
