import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 70%;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #f4d03f;
  border-radius: 1rem;
  padding: 2rem;
  margin: 0 auto;
  /* margin-top: 3%; */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
  }
`;

export const ImageCard = styled.div`
  width: 35%;
  height: 70%;
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
`;

export const InfoCard = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

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

  p {
    color: #ffffffcc;
    font-size: 1.1rem;
    font-family: Montserrat;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
    padding-bottom: 0.4rem;
  }
`;

export const EpisodesCard = styled.div`
  width: 30%;
  padding: 1rem;
  max-height: 70vh;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;

  h2 {
    color: #ffffffcc;
    margin-bottom: 1rem;
    flex-shrink: 0;
  }
`;

export const EpisodesList = styled.ul`
  flex-grow: 1;   
  overflow-y: auto; 
  display: flex;
  padding-right: 1rem;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
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
`;
