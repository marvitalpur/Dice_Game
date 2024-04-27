import styled from "styled-components";

export default function Rules() {
  return (
    <div>
      <RuleContainer>
        <h2>How to play game</h2>
        <div className="text">
          <p>Select any number </p>
          <p>Clic on dice image</p>
          <p>
            after clic on dice if selected number is equale to date you will
            gate point as dice {""}
          </p>
          <p>if you get wrong guese than 2 poinbt will be deducted</p>
        </div>
      </RuleContainer>
    </div>
  );
}

const RuleContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0% auto;
  margin-top: 20px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 10px;
  }
`;
