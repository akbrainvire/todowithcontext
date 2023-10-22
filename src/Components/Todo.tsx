import React, { useContext } from "react";
import { Container, TodoCheckbox, TodoText } from "./TodoStyles";
import { TodoContext } from "../Context/TodoContext";

interface TodoProps {
  text: string;
  i: number;
}

const Todo: React.FC<TodoProps> = (props) => {
  const todoContext = useContext(TodoContext);
  const handleCheckboxChange = (i: number) => {
    todoContext?.removeTodo(props.i);
  };

  return (
    <Container>
      <TodoCheckbox
        type="checkbox"
        checked={false}
        onChange={() => handleCheckboxChange(props.i)}
        value={props.text}
      />

      <TodoText>{props.text}</TodoText>
    </Container>
  );
};

export default Todo;
