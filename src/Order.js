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
  height: 120px;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px;
`;
const OrderCustomer = styled.div`
  width: 621px;
  height: 120px;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px;
`;
const OrderDelivery = styled.div`
  width: 621px;
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 30px;
`;
const OrderPrice = styled.div`
  width: 413px;
  height: 170px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
  padding: 30px;
`;
const OrderPayment = styled.div`
  width: 413px;
  height: 180px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
  padding: 30px;
`;
const OrderPay = styled.div`
  width: 473px;
  height: 177px;
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
  border-radius: 25px;
`;

const OrderText = styled.div`
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
  margin-top: 25px;
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
  border-radius: 15px;
  background-color: #2f62cb;
`;
export function Order() {
  return (
    <>
      <Container>
        <OrderTitle>결제하기</OrderTitle>
        <OrderBoxGrid>
          <OrderBoxLeft>
            <OrderProduct>
              <OrderText>주문 상품 정보</OrderText>
              <OrderProductGrid>
                <OrderProductBox1>
                  <OrderBoxImg></OrderBoxImg>
                </OrderProductBox1>
                <OrderProductBox2>
                  <OrderText2>주문정보 이름</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText> #### 원</OrderText>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText3>배송비 : 3000원</OrderText3>
                </OrderProductBox2>
              </OrderProductGrid>
            </OrderProduct>
            <OrderCustomer>
              <OrderText>주문자 정보</OrderText>
              <OrderCustomerBox>
                <OrderText2>홍길동</OrderText2>
                <OrderTextMargin></OrderTextMargin>
                <OrderText2>dddd@email.com</OrderText2>
                <OrderTextMargin></OrderTextMargin>
                <OrderText2>010-1234-5678</OrderText2>
              </OrderCustomerBox>
            </OrderCustomer>
            <OrderDelivery>
              <OrderText>배송 정보</OrderText>
              <OrderDeliveryBox1>
                <OrderDeliveryBox3>
                  <OrderText2>홍길동</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>010-1234-5678</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>대전시 중구 000-00</OrderText2>
                </OrderDeliveryBox3>
                <OrderDeliveryBox4>
                  <OrderDeliveryAdress>수정</OrderDeliveryAdress>
                </OrderDeliveryBox4>
              </OrderDeliveryBox1>
              <OrderDeliveryBox2>
                <OrderText2>배송 메모</OrderText2>
                <OrderMemo>
                  <OrderText2>배송 메모를 선택해 주세요.</OrderText2>
                  <OrderText>▼</OrderText>
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
                  <OrderText2>0000원</OrderText2>
                  <OrderTextMargin></OrderTextMargin>
                  <OrderText2>무료</OrderText2>
                </OrderPriceBox2>
              </OrderPriceBox>
              <OrderPriceLine></OrderPriceLine>
              <OrderTextMargin1></OrderTextMargin1>

              <OrderPriceBox>
                <OrderText4>총 결제 금액</OrderText4>
                <OrderText>00000원</OrderText>
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
                입금자명 : (미입력시 주문자명)
              </OrderPaymentBox2>
            </OrderPayment>
            <OrderPay>
              <OrderPayBox1>
                약간 및 주문내용을 확인 하였으며 <br />
                정보제공에 동의합니다.
              </OrderPayBox1>
              <OrderPayBox2>00000원 결제하기</OrderPayBox2>
            </OrderPay>
          </OrderBoxRight>
        </OrderBoxGrid>
      </Container>
    </>
  );
}
