import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const CartTitle = styled.div`
  margin-top: 200px;
  font-size: 40px;
  text-align: center;
`;
const CartMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.8fr 1fr 1fr 1fr 1fr;
  margin-top: 120px;
  background-color: #f3f3f3;
  width: 100%;
  height: 60px;
  align-items: center;
  text-align: center;
  font-size: 18px;
  border-radius: 20px;
`;
const CartMenuInput = styled.input`
  margin-bottom: 20px;
  margin-left: 90px;
  width: 10px;
`;
const CartItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr 1fr 1fr 1fr 1fr;
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
  font-size: 20px;
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
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
const CountButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
const CountMinusButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 2px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const CartItemPrice = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 18px;
  font-weight: bold;
`;
const CartItemTotalPrice = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 18px;
  font-weight: bold;
`;
const CartItemDelivery = styled.div`
  text-align: center;
  line-height: 160px;
  font-size: 18px;
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

const CartItemInput = styled.input`
  width: 10px;
  margin-left: 89px;
`;
const CartPriceBox = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 35px;
  background-color: #f3f3f3;
  margin: 80px 0 50px 0;
  display: flex;
  line-height: 90px;
  align-items: center;
  justify-content: end;
  padding-right: 30px;
`;
const CartPriceText1 = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;
const CartPriceText2 = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;
const CartPriceText3 = styled.div`
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
  font-size: 18px;
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
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // setCartItems(storedCart);

    const updatedCart = storedCart.map((item) => {
      return {
        ...item,
        shippingCost: item.mockTicketName ? 0 : 3000,
      };
    });
    setCartItems(updatedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (item.bookPrice || item.ticketPrice || 0) * (item.quantity || 1),
      0
    );
  };

  const calculateShippingCost = () => {
    return cartItems.reduce(
      (total, item) => total + (item.shippingCost || 0),
      0
    );
  };

  const calculateGrandTotal = () => {
    return calculateTotalPrice() + calculateShippingCost();
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) {
            alert("최소 1개 이상 주문이 가능합니다");
            return item;
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <>
      <Container>
        <CartTitle>장바구니</CartTitle>
        <CartMenuGrid>
          <CartMenuInput
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
        {cartItems.map((item) => (
          <CartItemBox key={item.id}>
            <CartItemGrid>
              <CartItemInput
                type="checkbox"
                style={{
                  transform: "scale(2.3)",
                  transformOrigin: "0 0",
                }}
              />
              <CartItemImg></CartItemImg>
              <CartItemText>
                {item.bookName || item.mockTicketName}
              </CartItemText>
              <CartItemCount>
                <CountMinusButton onClick={() => updateQuantity(item.id, -1)}>
                  -
                </CountMinusButton>
                <CartItemCount1>{item.quantity}</CartItemCount1>
                <CountButton onClick={() => updateQuantity(item.id, 1)}>
                  +
                </CountButton>
              </CartItemCount>
              <CartItemPrice>
                {(item.bookPrice || item.ticketPrice) + " 원"}
              </CartItemPrice>
              <CartItemTotalPrice>
                {(item.bookPrice || item.ticketPrice || 0) *
                  (item.quantity || 1) +
                  item.shippingCost}{" "}
                원
              </CartItemTotalPrice>
              <CartItemDelivery>
                {item.shippingCost === 0 ? "무료" : `${item.shippingCost} 원`}
              </CartItemDelivery>
            </CartItemGrid>
            <CartItemLine></CartItemLine>
          </CartItemBox>
        ))}
        <CartItemBox>
          <CartItemLine></CartItemLine>
        </CartItemBox>
        <CartPriceBox>
          <CartPriceText1>
            총{" "}
            {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}{" "}
            개의 상품
          </CartPriceText1>
          <CartPriceText2>{calculateTotalPrice()} 원</CartPriceText2>
          <CartPricePlus>+</CartPricePlus>
          <CartPriceText1>배송비 {calculateShippingCost()}원</CartPriceText1>
          <CartPriceEqual>=</CartPriceEqual>
          <CartPriceText3>{calculateGrandTotal()} 원</CartPriceText3>
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
