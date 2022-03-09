import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const BREAKPOINTS = {
  phoneMin: 600 / 16,
  tabletMin: 950 / 16,
  laptopMin: 1300 / 16,
};
const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMin}rem)`,
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

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }

  @media ${({ theme }) => theme.QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
