import TotalScore from "./TotalScore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import RolllDice from "./rolllDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/buttons";
import Rules from "./rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const genrateRandomNumber = (min, max) => {
    // console.log(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const RollDice = () => {
    if (!selected) {
      setError("You have not selected any number");

      return;
    }
    setError("");
    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selected === randomNumber) {
      setScore(((prev) => prev) + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelected(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <Numberselector
          error={error}
          setError={setError}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <RolllDice currentDice={currentDice} RollDice={RollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShow(!show)}>Show rules</Button>
      </div>
      {show && <Rules />}
    </MainContainer>
  );
};
export default GamePlay;
const MainContainer = styled.main`
  margin-top: 70px;
  /* background-color: red; */
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
