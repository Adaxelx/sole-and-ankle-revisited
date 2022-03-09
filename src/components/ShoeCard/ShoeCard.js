import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        {variant === "on-sale" && <SaleFlag>Sale</SaleFlag>}
        {variant === "new-release" && <NewFlag>Just released!</NewFlag>}
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              "--color": variant === "on-sale" ? COLORS.gray[700] : undefined,
              "--text-decoration":
                variant === "on-sale" ? "line-through" : undefined,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : undefined}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  --animation-time-exit: 500ms;
  --animation-time-start: calc(var(--animation-time-exit) / 2);
`;

const Wrapper = styled.article`
  position: relative;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  isolation: isolate;
  border-radius: 16px 16px 4px 4px;
`;

const Image = styled.img`
  width: 100%;

  transition: filter var(--animation-time-exit);

  will-change: filter;
  ${Link}:hover & {
    filter: grayscale(100%);
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform var(--animation-time-exit);
    transform-origin: 50% 70%;
    ${Link}:hover & {
      filter: revert;
      transform: scale(1.1);
      transition: transform var(--animation-time-start);
    }
  }
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background: red;
  height: 32px;
  z-index: 1;
  line-height: 32px;
  padding: 0 10px;
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  border-radius: 2px;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform var(--animation-time-exit);
    transform-origin: bottom right;
    ${Link}:hover & {
      transition: transform var(--animation-time-start);
      transform: rotate(10deg) scale(1.1);
    }
  }
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;
const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

export default ShoeCard;
