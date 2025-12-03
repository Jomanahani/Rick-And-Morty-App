import styled from "styled-components";

export const Item = styled.li`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
  color: #fff;
  font-family: Montserrat;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  strong {
    color: #ffe066;
  }

  small {
    color: #ffffffaa;
    font-size: 0.85rem;
  }
`;