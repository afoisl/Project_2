import React from "react";
import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  console.log(numPages);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 100px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  background-color: #e5e5e5;
  /* background: black;
    border-radius: 8px;
    color: white; */
  color: #a8a8a8;
  font-size: 1rem;

  &:hover {
    /* background: tomato; */
    color: #333;
    font-weight: bolder;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    /* background: grey; */
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    /* background: deeppink; */
    font-weight: bold;
    color: #333;
    cursor: revert;
    transform: revert;
  }
`;
export default Pagination;
