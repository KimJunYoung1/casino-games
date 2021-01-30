import React from "react";
import styled from "styled-components";
import { Chip } from "../../components/Chip";
import { numberWithCommas } from "../../util/money";

const Wallet = () => {
  let money = localStorage.getItem("money");
  money = JSON.parse(money);
  let name = localStorage.getItem("name");

  const chipPerMoney = (chips) => {
    return (
      chips.a * 1000 +
      chips.b * 5000 +
      chips.c * 10000 +
      chips.d * 50000 +
      chips.e * 100000 +
      chips.f * 1000000
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}님 환영합니다.</h1>
      <Row>
        <Chip price={1000} count={money.a} />
        <Chip price={5000} count={money.b} />
        <Chip price={10000} count={money.c} />
        <Chip price={50000} count={money.d} />
        <Chip price={100000} count={money.e} />
        <Chip price={1000000} count={money.f} />
      </Row>
      <h3>총 보유 금액: {numberWithCommas(chipPerMoney(money))}₩</h3>
    </div>
  );
};

export default Wallet;

const Row = styled.div`
  margin: 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
