import React, { useState, createContext } from "react";

interface TodoContextProps {
  todos: string[];
  addTodo: (todo: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
