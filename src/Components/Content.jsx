import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Notifications from "./Notifications";

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function Content() {
  return (
    <ContentContainer>
      <CardsContainer>
        <Cards />
      </CardsContainer>
      <Notifications />
    </ContentContainer>
  );
}

export default Content;
