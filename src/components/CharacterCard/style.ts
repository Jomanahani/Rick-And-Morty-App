import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 0.3rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4rem;
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  color: #ffffff;
  font-family: "Dancing Script";
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 0;
  padding-top: 0.4rem;
`;

export const Status = styled.p`
  font-size: 0.9rem;
  color: #ffe066;
  text-transform: capitalize;
  opacity: 0.9;
  font-family: Montserrat;
`;
