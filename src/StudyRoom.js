import styled from "styled-components";

const Header = styled.div`
  height: 600px;
  background-color: gray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 60%;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 100px;
`;

const Room1 = styled.div`
  width: 250px;
  height: 330px;
  background-color: gray;
  justify-self: center;
`;

const Room2 = styled.div`
  width: 250px;
  height: 330px;
  background-color: gray;
  justify-self: center;
`;

const Room3 = styled.div`
  width: 250px;
  height: 330px;
  background-color: gray;
  justify-self: center;
`;

const Room4 = styled.div`
  width: 250px;
  height: 330px;
  background-color: gray;
  justify-self: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 50px;
  margin: 90px 50px 0px 50px;
`;

export function StudyRoom() {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>스터디룸</Title>
        <Box>
          <Room1></Room1>
          <Room2></Room2>
          <Room3></Room3>
          <Room4></Room4>
        </Box>
      </Container>
    </>
  );
}
