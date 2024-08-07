import styled from "styled-components";

const StoreTitle = styled.div`
  margin-top: 200px;
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

const StoreGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 200px 0 300px 0;
`;

const StoreBox1 = styled.div``;
const StoreBox2 = styled.div``;

const StoreImageText1 = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const StoreImageText2 = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 80px;
`;

const StoreButton1 = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid black;
  text-align: center;
  line-height: 40px;
`;

const StoreButton2 = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid black;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 40px;
`;

const StoreButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Footer = styled.div`
  width: 100%;
  height: 500px;
  background-color: grey;
`;

const FooterText = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  align-items: center;
  line-height: 150px;
`;

export function Store() {
  return (
    <>
      <Container>
        <StoreTitle>스토어</StoreTitle>
        <StoreTitle1>설명</StoreTitle1>
        <StoreImage></StoreImage>
        <StoreGrid>
          <StoreBox1>
            <StoreImage1></StoreImage1>
            <StoreImageText1>67패턴</StoreImageText1>
            <StoreImageText2>15,000원</StoreImageText2>
            <StoreButton>
              <StoreButton1>장바구니 담기</StoreButton1>
              <StoreButton2>바로 구매</StoreButton2>
            </StoreButton>
          </StoreBox1>
          <StoreBox2>
            <StoreImage1></StoreImage1>
            <StoreImageText1>모의고사 구매권</StoreImageText1>
            <StoreImageText2>2,000원</StoreImageText2>
            <StoreButton>
              <StoreButton1>장바구니 담기</StoreButton1>
              <StoreButton2>바로 구매</StoreButton2>
            </StoreButton>
          </StoreBox2>
        </StoreGrid>
      </Container>
      <Footer>
        <FooterText>
          Footer <br />
          Designed by MajorFlow
        </FooterText>
      </Footer>
    </>
  );
}
