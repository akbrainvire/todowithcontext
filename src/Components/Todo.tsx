import React, { useState } from "react";
import { Container, TodoCheckbox, TodoText } from "./TodoStyles";

interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Container>
      <TodoCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <TodoText>{props.text}</TodoText>
    </Container>
  );
};

export default Todo;
