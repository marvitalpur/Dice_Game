import { useState } from "react";
import styled from "styled-components";

export default function NumberSelector({
  setError,
  error,
  selected,
  setSelected,
}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectoreHandler = (value) => {
    setSelected(value);
    setError(""); // Clear the error message when a number is selected
  };
  return (
    <Container>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            selected={value === selected} // Check if the value is selected
            key={i}
            onClick={(value) => numberSelectoreHandler(value)} // Corrected onClick attribute
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
}

// Styled component for each box

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* background-color: green; */

  .error {
    color: red;
  }
  .flex {
    display: flex;

    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
const Box = styled.div`
  // Styling properties
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid; /* Corrected the typo "diplay" to "display" */
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
`;
