import styled from "styled-components";

export const Nav = styled.nav`
  width: 90%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background-color: #f4d03f;
  margin: 2rem auto;

  @media (max-width: 768px) {
    justify-content: center;
    background-color: transparent;
  }
`;

export const Name = styled.h1`
  font-family: "Dancing Script";
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Results = styled.p`
  font-size: 0.9rem;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;
