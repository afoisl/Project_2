import { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import cartImage from "./assets/img/cartImage.png";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const CartTitle = styled.div`
  margin-top: 200px;
  font-size: 40px;
  text-align: center;
`;
const CartMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
  margin-top: 100px;
  background-color: #edede9;
  width: 100%;
  height: 40px;
  align-items: center;
  text-align: center;
  font-size: 17px;
  line-height: 0;
`;
const CartMenuInput = styled.input`
  margin-bottom: 20px;
  margin-left: 90px;
  width: 9px;
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
  margin: 15px 0;
  transform: scale();
  transform-origin: center;
`;
const CartItemBox = styled.div``;

const EmptyBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyCartImg = styled.img`
  width: 50px;
  height: auto;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 30px;
`;

const CartItemInput = styled.input`
  width: 9px;
  margin-left: 89px;
`;
const CartPriceBox = styled.div`
  width: 100%;
  height: 65px;
  background-color: #edede9;
  margin: 80px 0 50px 0;
  display: flex;
  line-height: 90px;
  align-items: center;
  justify-content: end;
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
  padding-right: 30px;
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
  width: 120px;
  height: 50px;
  background-color: #575757;
  color: white;
  border-radius: 20px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 50px;
  cursor: pointer;
`;
const CartSelectOrder = styled.div`
  width: 160px;
  height: 50px;
  background-color: #5c5c5c;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
const CartAllOrder = styled.div`
  width: 160px;
  height: 50px;
  background-color: #21378d;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  margin-left: 20px;
  cursor: pointer;
`;
const CartMargin = styled.div`
  height: 200px;
`;

export function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [checkItem, setCheckItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.map((item, index) => ({
      ...item,
      uniqueId: `${item.id}-${index}`, // Create a unique identifier
      shippingCost: item.mockTicketName || item.lectureName ? 0 : 3000,
      quantity: item.quantity || 1,
    }));
    setCartItems(updatedCart);
  }, []);

  const handleOrderAll = () => {
    navigate("/order", { state: { cartItems } });
  };

  const handleSelectOrder = () => {
    const selectedItems = cartItems.filter((item) =>
      checkItem.includes(item.uniqueId)
    );
    if (selectedItems.length === 0) {
      alert("선택된 상품이 없습니다.");
      return;
    }
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    navigate("/order", { state: { cartItems: selectedItems } });
  };

  const calculateTotalPrice = () => {
    return cartItems
      .filter((item) => checkItem.includes(item.uniqueId))
      .reduce(
        (total, item) =>
          total +
          (item.bookPrice || item.ticketPrice || item.lecPrice || 0) *
            (item.quantity || 1),
        0
      );
  };

  const calculateShippingCost = () => {
    return cartItems
      .filter((item) => checkItem.includes(item.uniqueId))
      .reduce((total, item) => total + (item.shippingCost || 0), 0);
  };

  const calculateGrandTotal = () => {
    return calculateTotalPrice() + calculateShippingCost();
  };

  const updateQuantity = (uniqueId, change) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.uniqueId === uniqueId) {
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

  const handleSingleCheck = (checked, uniqueId) => {
    if (checked) {
      setCheckItem((prev) => [...prev, uniqueId]);
    } else {
      setCheckItem(checkItem.filter((el) => el !== uniqueId));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const ids = cartItems.map((el) => el.uniqueId);
      setCheckItem(ids);
    } else {
      setCheckItem([]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedItems = cartItems.filter(
      (item) => !checkItem.includes(item.uniqueId)
    );
    setCartItems(updatedItems);
    setCheckItem([]);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
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
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={
              checkItem.length === cartItems.length && cartItems.length > 0
            }
            disabled={cartItems.length === 0}
          />
          <p>상품/옵션 정보</p>
          <p>수량</p>
          <p>상품 금액</p>
          <p>합계/금액</p>
          <p>배송비</p>
        </CartMenuGrid>
        {cartItems.length === 0 ? (
          <EmptyBox>
            <EmptyCartImg src={cartImage}></EmptyCartImg>
            <EmptyCartMessage>장바구니가 비어 있습니다</EmptyCartMessage>
          </EmptyBox>
        ) : (
          cartItems.map((item) => (
            <CartItemBox key={item.uniqueId}>
              <CartItemGrid>
                <CartItemInput
                  type="checkbox"
                  style={{
                    transform: "scale(2.3)",
                    transformOrigin: "0 0",
                  }}
                  onChange={(e) =>
                    handleSingleCheck(e.target.checked, item.uniqueId)
                  }
                  checked={checkItem.includes(item.uniqueId)}
                />
                <CartItemImg></CartItemImg>
                <CartItemText>
                  {item.bookName || item.mockTicketName || item.lectureName}
                </CartItemText>
                <CartItemCount>
                  <CountMinusButton
                    onClick={() => updateQuantity(item.uniqueId, -1)}
                  >
                    -
                  </CountMinusButton>
                  <CartItemCount1>{item.quantity}</CartItemCount1>
                  <CountButton onClick={() => updateQuantity(item.uniqueId, 1)}>
                    +
                  </CountButton>
                </CartItemCount>
                <CartItemPrice>
                  {(item.bookPrice || item.ticketPrice || item.lecPrice) +
                    " 원"}
                </CartItemPrice>
                <CartItemTotalPrice>
                  {(item.bookPrice || item.ticketPrice || item.lecPrice || 0) *
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
          ))
        )}

        <CartItemBox>
          <CartItemLine></CartItemLine>
        </CartItemBox>

        <CartPriceBox>
          <CartPriceText1>
            총 {checkItem.length}
            개의 상품
          </CartPriceText1>
          <CartPriceText2>{calculateTotalPrice()} 원</CartPriceText2>
          <CartPricePlus>+</CartPricePlus>
          <CartPriceText1>배송비 {calculateShippingCost()}원</CartPriceText1>
          <CartPriceEqual>=</CartPriceEqual>
          <CartPriceText3>{calculateGrandTotal()} 원</CartPriceText3>
        </CartPriceBox>
        <CartOrderBox>
          <CartOrderDelete onClick={handleDeleteSelected}>
            선택 상품 삭제
          </CartOrderDelete>
          <CartOrderBox1>
            <CartSelectOrder onClick={handleSelectOrder}>
              선택 상품 주문
            </CartSelectOrder>
            <CartAllOrder onClick={handleOrderAll}>전체 상품 주문</CartAllOrder>
          </CartOrderBox1>
        </CartOrderBox>
      </Container>
      <CartMargin></CartMargin>
    </>
  );
}
