import styled from "styled-components";
function TotalScore({ score }) {
  return (
    <ScoreContaier>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContaier>
  );
}

export default TotalScore;
const ScoreContaier = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
