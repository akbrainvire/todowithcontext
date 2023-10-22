import React, { useState, createContext } from "react";

interface TodoContextProps {
  todos: string[];
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
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

  const removeTodo = (index: number) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
