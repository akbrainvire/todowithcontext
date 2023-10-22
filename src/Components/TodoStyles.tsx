import styled from "styled-components";

export const TodoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TodoItem = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const TodoText = styled.div`
  flex-grow: 1;
`;

export const Everything = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const TodoCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const TodoInput = styled.input`
  border: 1px solid black;
  outline: none;
  padding: 5px;
`;

export const TodoInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: grey;

  margin: 20px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const DarkMode = styled.input.attrs({ type: "checkbox" })``;

export const DarkModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1vw;
`;

export const DarkModeLabel = styled.label`
  margin-right: 10px;
`;
