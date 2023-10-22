import React, { useState, useContext } from "react";
import Todo from "./Todo";

import {
  Button,
  DarkMode,
  DarkModeContainer,
  DarkModeLabel,
  TodoContainer,
  TodoInput,
  TodoInputStyle,
} from "./TodoStyles";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoContext } from "../Context/TodoContext";

const TodoApp: React.FC = () => {
  const [value, setValue] = useState("");
  const context = useContext(ThemeContext);
  const todoContext = useContext(TodoContext);
  const todos = todoContext?.todos;

  const handleClick = () => {
    if (value === "") {
      return;
    }
    todoContext?.addTodo(value);
  };

  return (
    <>
      <TodoInputStyle>
        <h2>Todo List</h2>
        <DarkModeContainer>
          <DarkModeLabel>Dark Mode </DarkModeLabel>
          <DarkMode
            type="checkbox"
            checked={context?.darkMode}
            onChange={context?.toggleDarkMode}
          />
        </DarkModeContainer>
        <TodoInput onChange={(e) => setValue(e.target.value)} />
        <Button onClick={handleClick}>Add</Button>
      </TodoInputStyle>
      <TodoContainer>
        {todos?.map((todo, index) => (
          <Todo key={index} i={index} text={todo} />
        ))}
      </TodoContainer>
    </>
  );
};

export default TodoApp;
