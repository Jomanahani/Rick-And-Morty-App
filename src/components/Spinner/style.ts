import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px); 
`;

export const SpinnerElement = styled.div`
  width: 100px;
  height: 100px;
  border: 6px solid #d1d5db; 
  border-top-color: #F4D03F; 
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;
