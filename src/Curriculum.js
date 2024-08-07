import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div``;

const Img = styled.div`
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  background-color: darkgray;
  height: 90px;

  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
`;

const MenuTitle = styled(Link)`
  margin: 25px;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div``;

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
          <MenuTitle to="/about">About Us</MenuTitle>
          <TitleWrapper>
            <MenuTitle to="/curriculum">커리큘럼</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <MenuTitle to="/address">오시는 길</MenuTitle>
          <div></div>
        </MenuBar>
      </Header>
      <Container>
        <h1>학원소개</h1>
      </Container>
    </>
  );
}
