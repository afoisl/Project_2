import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import bookImg from "./assets/img/67패턴.png";
import 모의고사티켓 from "./assets/img/모의고사티켓.png";

const StoreTitle = styled.div`
  padding: 200px 0 0;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 75%;
  margin: auto;
`;

const StoreTitle1 = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
`;

const StoreImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: grey;
  margin-top: 100px;
`;

const StoreImage1 = styled.div`
  width: 400px;
  height: 400px;
  background-color: grey;
  margin-bottom: 40px;
`;

const BookImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StoreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 170px 0 150px 0;
`;

const StoreBox = styled.div`
  margin: 10px;
  text-align: center;
`;

const StoreImageText1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StoreImageText2 = styled.div`
  font-size: 18px;
  margin-bottom: 80px;
`;

const StoreButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StoreButton1 = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid #0d3276;
  text-align: center;
  line-height: 40px;
  margin-right: 20px;
  cursor: pointer;
  background-color: white;
  color: #0d3276;
`;

const StoreButton2 = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid black;
  background-color: #0d3276;
  color: white;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

export function Store() {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);
  const [mockTickets, setMockTickets] = useState([]);
  const navigate = useNavigate();

  const bookStoreItemId = 2; //
  const mockTicketStoreItemId = 1; //

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken == null) {
      return;
    }
    axios
      .get(`http://localhost:8080/api/storeItem/${bookStoreItemId}/books`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("Books API Response:", response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Book API 요청 중 오류 발생:", error);
      });

    axios
      .get(
        `http://localhost:8080/api/storeItem/${mockTicketStoreItemId}/mockTickets`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((response) => {
        console.log("MockTickets API Response:", response.data);
        setMockTickets(response.data);
      })
      .catch((error) => {
        console.error("MockTicket API 요청 중 오류 발생:", error);
      });
  }, []);

  const addToCart = (item) => {
    console.log(item);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const uniqueId = item.bookName ? `book_${item.id}` : `mock_${item.id}`;

    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === uniqueId
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity =
        (existingCart[existingItemIndex].quantity || 1) + 1;
    } else {
      const newItem = {
        ...item,
        id: uniqueId,
        quantity: 1,
        name: item.bookName || item.mockTicketName || "이름 없음", // 이름을 올바르게 처리
        price: item.bookPrice || item.ticketPrice || 0, // 가격도 처리
      };
      existingCart.push(newItem);
    }

    // 로컬스토리지에 장바구니 저장
    localStorage.setItem("cart", JSON.stringify(existingCart));

    const name = item.bookName || item.mockTicketName || "이름 없음";
    alert(`${name}이(가) 장바구니에 추가되었습니다.`);
  };

  const handleAddtoOrder = (item) => {
    const directPurchaseItem = {
      ...item,
      quantity: 1,
      name: item.bookName || item.mockTicketName || "이름 없음",
      price: item.bookPrice || item.ticketPrice || 0,
    };

    navigate("/order", { state: { lectures: [directPurchaseItem] } });
  };
  return (
    <>
      <StoreTitle>스토어</StoreTitle>
      <Container>
        <StoreGrid>
          {books.map((book) => (
            <StoreBox key={book.storeItemId}>
              <StoreImage1>
                <BookImg src={bookImg} alt={book.bookName} />
              </StoreImage1>
              <StoreImageText1>{book.bookName}</StoreImageText1>
              <StoreImageText2>{book.bookPrice}원</StoreImageText2>
              <StoreButton>
                <StoreButton1 onClick={() => addToCart(book)}>
                  장바구니 담기
                </StoreButton1>
                <StoreButton2 onClick={() => handleAddtoOrder(book)}>
                  바로 구매
                </StoreButton2>
              </StoreButton>
            </StoreBox>
          ))}
          {mockTickets.map((ticket) => (
            <StoreBox key={ticket.storeItemId}>
              <StoreImage1>
                <BookImg src={모의고사티켓} alt={ticket.mockTicketName} />
              </StoreImage1>
              <StoreImageText1>{ticket.mockTicketName}</StoreImageText1>
              <StoreImageText2>{ticket.ticketPrice}원</StoreImageText2>
              <StoreButton>
                <StoreButton1 onClick={() => addToCart(ticket)}>
                  장바구니 담기
                </StoreButton1>
                <StoreButton2 onClick={() => handleAddtoOrder(ticket)}>
                  바로 구매
                </StoreButton2>
              </StoreButton>
            </StoreBox>
          ))}
        </StoreGrid>
      </Container>
    </>
  );
}
