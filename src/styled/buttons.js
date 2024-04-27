

import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 16px;
  transition: 0.5 background ease-in;
  cursor: pointer;
  &:hover {
    border: 1px solid green;
    color: #000000;
    background-color: #ffffff;
    transition: 0.5 background ease-in;
  }
`;



export const OutlineButton = styled(Button)`

  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  border: 2px solid grey;
  transition: 0.5 background ease-in;
  cursor: pointer;
  &:hover {
    border: 1px solid green;
    background-color: #000000;
    color: #ffffff;
    transition: 0.5 background ease-in;
  }
`;
