import { useState } from "react";
import styled from "styled-components";

const RolllDice = ({ currentDice, RollDice }) => {
  // const [currentDice, setCurrentDice] = useState(1);

  return (
    <DiceContainer>
      <div onClick={RollDice} className="dice">
        <img src={`/public/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RolllDice;
const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
`;
