import React from 'react'
import styled from 'styled-components'

export default function RoleDice({roleDice,currentDice}) {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
         <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
  };


const DiceContainer = styled.div`
display:flex;
align-items:center;
margin-top:48px;
flex-direction:column;
p {
  font-size:24px;
}
.dice{
  cursor: pointer;
}
`;