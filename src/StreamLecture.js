import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 48px;
`;

export function StreamLecture() {
  const { streamId } = useParams();

  return (
    <>
      <Container>
        <Title>실시간 특강{streamId}</Title>
      </Container>
    </>
  );
}
