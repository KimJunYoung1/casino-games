import React from "react";
import styled from "styled-components";
import { Button } from "../components/buttons/Button";
import { Chip } from "../components/Chip";

export const View = () => {
  return (
    <div>      
      <Buttons />
        <div>
          <Button variant="contained" color="default" Icon={true}>def</Button>
          <Button variant="contained" color="primary">primary</Button>
          <Button variant="contained" color="secondary" Icon={true}>secondary</Button>
          <Button variant="contained" color="disabled">disabled</Button>      
        </div>
        <div>
          <Button variant="outlined" color="default">def</Button>      
          <Button variant="outlined" color="primary" Icon={true}>primary</Button>      
          <Button variant="outlined" color="secondary">secondary</Button>      
          <Button variant="outlined" color="disabled">disabled</Button>      
        </div>
        <div>
          <Button variant="text" color="default">def</Button>      
          <Button variant="text" color="primary">primary</Button>      
          <Button variant="text" color="secondary">secondary</Button>      
          <Button variant="text" color="disabled">disabled</Button>      
        </div>        
      <Chips />
    </div>
  )    
};

const Buttons = styled.h2``
const Chips = styled.h2``