import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebar />
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SortWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 32px;
  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    flex-basis: 0px;
    gap: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SortWrapper = styled.div`
  @media ${({ theme }) => theme.QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
