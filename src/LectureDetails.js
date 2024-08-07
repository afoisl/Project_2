import styled from "styled-components";

const Box1 = styled.div`
  display: flex;
  justify-content: center;
`;

const BigBox = styled.div`
  width: 60%;
  margin-top: 150px;
`;

const H1 = styled.h1`
  /* margin: 150px 0px 30px 395px; */
  font-size: 3rem;
  font-weight: 400;
  padding-left: 20px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* gap: 20px; */
`;

const LecImg = styled.img`
  width: 350px;
  height: 200px;
  padding-bottom: 10px;
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 350px;
  /* border: 1px solid dodgerblue; */
  cursor: pointer;
  padding: 10px;
`;

const Category = styled.div`
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Class = styled.div`
  display: inline-block;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 5px;
`;

export function LectureDetails() {
  return (
    <>
      <Box1>
        <BigBox>
          <H1>Best Seller</H1>
          <Box>
            <Container>
              <CardBox>
                <Card>
                  <LecImg></LecImg>
                  <Category>Category</Category>
                  <Title>title</Title>
                  <Price>price</Price>
                  <Class>class</Class>
                </Card>
              </CardBox>
              <CardBox>
                <Card>
                  <LecImg></LecImg>
                  <Category>subject</Category>
                  <Title>title</Title>
                  <Price>price</Price>
                  <Class>class</Class>
                </Card>
              </CardBox>
              <CardBox>
                <Card>
                  <LecImg></LecImg>
                  <Category>subject</Category>
                  <Title>title</Title>
                  <Price>price</Price>
                  <Class>class</Class>
                </Card>
              </CardBox>
            </Container>
          </Box>
        </BigBox>
      </Box1>
    </>
  );
}
