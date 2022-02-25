import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const BREAKPOINTS = {
  tabletMin: 950 / 16,
  laptopMin: 1300 / 16,
};
const QUERIES = {
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMin}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMin}rem)`,
};

const theme = {
  QUERIES,
};

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
