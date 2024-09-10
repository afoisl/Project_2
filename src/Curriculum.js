import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div``;

const Img = styled.div`
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  background-color: darkgray;
  height: 80px;

  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
`;

const MenuTitle = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Text = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: -150px;
`;

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 100px 0;
`;

const Box = styled.div`
  width: 450px;
  height: 220px;
  padding: 30px 40px;
  background-color: #fffdf2;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

const Title = styled.div`
  text-align: left;
  font-size: 1.4rem;
  margin-bottom: 20px;
  padding-left: 5px;
`;
const Content = styled.div`
  margin-bottom: 25px;
`;
const Grade = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const List = styled.div`
  padding: 3px 13px;
  border-radius: 25px;
  font-size: 0.7rem;
  background-color: #1456e5;
  color: white;
`;
const ListContent = styled.div`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
`;
const Book = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;

export function Curriculum() {
  return (
    <>
      <Header>
        <Img></Img>
        <MenuBar>
          <div></div>
          <MenuTitle to="/intro/about">About Us</MenuTitle>
          <TitleWrapper>
            <MenuTitle to="/intro/curriculum">커리큘럼</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <MenuTitle to="/intro/address">오시는 길</MenuTitle>
          <div></div>
        </MenuBar>
      </Header>
      <TextWrapper>
        <Text>
          인투어학원에서는 학생들이 스스로 공부할 수 있는 습관을 길러주고,
          지속적인 관리와 피드백을 통해 <br />
          최상의 결과를 얻을 수 있도록 돕습니다.
        </Text>
      </TextWrapper>

      <Container>
        <BoxWrapper>
          <Box>
            <Title>왕기초반</Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Content>
            <Grade>
              <List>학습대상</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Grade>
            <Book>
              <List>학습교재</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Book>
          </Box>
          <Box>
            <Title>입문반</Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Content>
            <Grade>
              <List>학습대상</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Grade>
            <Book>
              <List>학습교재</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Book>
          </Box>
          <Box>
            <Title>중급반</Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Content>
            <Grade>
              <List>학습대상</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Grade>
            <Book>
              <List>학습교재</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Book>
          </Box>
          <Box>
            <Title>고급반</Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Content>
            <Grade>
              <List>학습대상</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Grade>
            <Book>
              <List>학습교재</List>
              <ListContent>Lorem ipsum dolor</ListContent>
            </Book>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  );
}
