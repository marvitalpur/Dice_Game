import styled from "styled-components";
import { Button } from "../styled/buttons";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/public/images/dices 1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  /* background-color: green; */
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;

  .content h1 {
    font-size: 96px;
    white-space: normal;
    white-space: nowrap;
  }
`;
