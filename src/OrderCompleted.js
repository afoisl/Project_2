import styled from "styled-components";

const BoxWrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  border: 0.7px solid lightgray;
`;
const Box1 = styled.div`
  width: 550px;
  height: 400px;
  padding: 20px;
  margin-left: 40px;
  /* border: black 1px solid; */
`;
const Text = styled.div`
  margin-top: 20px;
  font-size: 2rem;
  font-weight: 700;
`;

const OrderNumber = styled.div`
  margin-top: 70px;
`;

const Shipping = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;
const Title = styled.div``;
const InfoBox = styled.div``;
const Name = styled.div``;
const Phone = styled.div``;
const Address = styled.div``;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;
const OrderInfoBox = styled.div``;
const Payment = styled.div``;
const Name2 = styled.div``;
const Bank = styled.div``;
const Box2 = styled.div`
  width: 350px;
  height: 300px;
  padding: 45px 40px 40px;
  border-radius: 30px;
  background-color: #fafafa;
  box-shadow: 2px 2px 10px #888888;
`;
const Product = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #5e5e5e;
`;
const Img = styled.div`
  width: 70px;
  height: 70px;
  background-color: gray;
`;
const Each = styled.div``;
const EachName = styled.div`
  margin-bottom: 10px;
`;
const EachPrice = styled.div``;

const Price = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #5e5e5e;
`;
const ProducePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const PName = styled.div``;
const PPrice = styled.div``;
const Delivery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DName = styled.div``;
const DPrice = styled.div``;
const TotalPrice = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TotalText = styled.div``;
const TotalNum = styled.div``;

export function OrderCompleted() {
  return (
    <>
      <BoxWrapper>
        <Box1>
          <Text>결제가 정상적으로 완료되었습니다.</Text>
          <OrderNumber>주문번호</OrderNumber>
          <Shipping>
            <Title>배송정보</Title>
            <InfoBox>
              <Name>이름</Name>
              <Phone>휴대폰</Phone>
              <Address>주소</Address>
            </InfoBox>
          </Shipping>

          <OrderInfo>
            <Title>결제정보</Title>
            <OrderInfoBox>
              <Payment>무통장입금</Payment>
              <Name2>예금주명</Name2>
              <Bank>카카오뱅크 3333-0000000-00</Bank>
            </OrderInfoBox>
          </OrderInfo>
        </Box1>
        <Box2>
          <Product>
            <Img></Img>
            <Each>
              <EachName>상품이름</EachName>
              <EachPrice>##원</EachPrice>
            </Each>
          </Product>
          <Price>
            <ProducePrice>
              <PName>상품 가격</PName>
              <PPrice>##원</PPrice>
            </ProducePrice>
            <Delivery>
              <DName>배송비</DName>
              <DPrice>##원</DPrice>
            </Delivery>
          </Price>
          <TotalPrice>
            <TotalText>총 결제 금액</TotalText>
            <TotalNum>##원</TotalNum>
          </TotalPrice>
        </Box2>
      </BoxWrapper>
    </>
  );
}
