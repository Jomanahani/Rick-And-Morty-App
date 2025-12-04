import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  color: #ffffff;
  font-size: 2rem;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found !</p>
    </Container>
  );
};

export default NotFound;
