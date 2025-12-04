import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #f4d03f;
  border-radius: 1rem;
  padding: 2rem;
  margin: 0 auto;
  min-height: 80vh;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 85%;
    align-items: center;
    text-align: center;
    min-height: auto;
    padding: 1rem;
  }
`;

export const ImageCard = styled.div`
  width: 35%;
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-height: 70vh;
    border-radius: 1rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InfoCard = styled.div`
  width: 55%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.25);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(4px);

  h1 {
    margin: 0;
    color: #ffe066;
    font-size: 2.2rem;
    font-family: "Dancing Script";
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const EpisodesCard = styled.div`
  width: 30%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.15);

  h2 {
    color: #ffffffcc;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 1rem;
  }
`;

export const EpisodesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 60vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    max-height: 40vh;
  }
`;

export const BackIcon = styled.button`
  position: absolute;
  left: 5%;
  top: 3%;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 4rem;
  color: #f4d03f;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
    font-size: 4.3rem;
    left: 4.7%;
    top: 2.5%;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 1.5%;
    left: 3%;
  }
`;
