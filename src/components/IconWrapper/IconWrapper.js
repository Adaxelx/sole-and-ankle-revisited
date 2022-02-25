import React from "react";
import styled from "styled-components";

const IconWrapper = ({ size = "24px", children }) => {
  return <Wrapper style={{ "--size": size }}>{children}</Wrapper>;
};

export default IconWrapper;

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`;
