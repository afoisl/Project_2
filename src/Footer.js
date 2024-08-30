import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = styled.div`
  height: 80px;
  margin-top: auto;
  background-color: #1d1d1f;
`;
const Div = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  width: 100%;
  color: white;
`;

const Admin = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 45px;
`;
const Box2 = styled.div``;
const TopButton = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 80px;
  cursor: pointer;
`;

const handleTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function FooterReal() {
  return (
    <>
      <Footer>
        <Div>
          <Box1>
            <Text>ⓒ 2024 majorflow All right reserved</Text>
            <Admin>Admin</Admin>
          </Box1>
          <Box2>
            <TopButton onClick={handleTop}>
              Back to top &nbsp;
              <FontAwesomeIcon icon={faArrowUp} />
            </TopButton>
          </Box2>
        </Div>
      </Footer>
    </>
  );
}
