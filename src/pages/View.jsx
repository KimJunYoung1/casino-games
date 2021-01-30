import React from "react";
import styled from "styled-components";
import { Button } from "../components/buttons/Button";
import { Chip } from "../components/Chip";
import Card from "../components/cards/Card123";

export const View = () => {
  return (
    <div>
      <Buttons />
      <div>
        <Button variant="contained" color="default">
          def
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="disabled">
          disabled
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="default">
          def
        </Button>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="disabled">
          disabled
        </Button>
      </div>
      <div>
        <Button variant="text" color="default">
          def
        </Button>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="disabled">
          disabled
        </Button>
      </div>
      <div>
        <Chip price={1000} count={1} />
        <Chip price={5000} count={1} />
        <Chip price={10000} count={1} />
        <Chip price={50000} count={1} />
        <Chip price={100000} count={1} />
        <Chip price={1000000} count={1} />
      </div>
      <div style={{ backgroundColor: "green" }}>
        <Card num={1} />
        <Card num={2} />
        <Card num={3} />
        <Card num={14} />
        <Card num={15} />
        <Card num={16} />
        <Card num={27} />
        <Card num={28} />
        <Card num={29} />
        <Card num={40} />
        <Card num={41} />
        <Card num={42} />

        {/* 1, 2, 3, 14, 15, 16, 27, 28, 29, 40, 41, 42 */}
      </div>
    </div>
  );
};

const Buttons = styled.h2``;
