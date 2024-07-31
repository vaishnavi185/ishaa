import React from "react";
import styled from "styled-components";
import Sidebar from "./Slidebar";
import History from "./History";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 20px;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function App1() {
  return (
    <AppContainer>
      <Sidebar />
     <History/>
    </AppContainer>
  );
}

export default App1;
