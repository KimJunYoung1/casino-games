import React from "react";
import styled from "styled-components";
import { numberWithCommas } from "../util/money";

export const Chip = ({ price, count }) => {
  const renderPriceColor = (price) => {
    if (price === 1000) {
      return "black";
    } else if (price === 5000) {
      return "#3171e8";
    } else if (price === 10000) {
      return "red";
    } else if (price === 50000) {
      return "#23c449";
    } else if (price === 100000) {
      return "gold";
    } else if (price === 1000000) {
      return "pink";
    }
  };

  return (
    <Wrapper>
      <Rotate>
        <ChipWrapper color={renderPriceColor(price)}>
          <ReverseString>{numberWithCommas(price)}</ReverseString>
        </ChipWrapper>
      </Rotate>
      <ChipLabel>CASINO</ChipLabel>
      <Count>
        {count}개:<Price>{numberWithCommas(count * price)}₩</Price>
      </Count>
    </Wrapper>
  );
};

const Count = styled.strong`
  position: absolute;
  bottom: 0;
`;

const Price = styled.span`
  color: gray;
  font-size: 13px;
  font-weight: 500;
`;

const ReverseString = styled.div`
  transform: rotate(180deg);
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-item: center;
  position: relative;
`;

const ChipLabel = styled.label`
  position: absolute;
  bottom: 32px;
  left: 39%;
  font-size: 7px;
  background-color: white;
`;

const Rotate = styled.div`
  transform: rotate(180deg);
`;

const ChipWrapper = styled.div`
  position: relative;
  display: block;
  margin: 30px auto;
  width: 110px;
  height: 110px;
  border: 12px dashed white;
  border-radius: 50%;
  line-height: 100px;
  text-align: center;
  font-family: Helvetica;
  color: white;

  &:before {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -16px;
    border-radius: 50%;
    background: ${({ color }) => color};
    content: "";
  }

  &:after {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 5px;
    border: 5px dashed white;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    content: "";
  }
`;
