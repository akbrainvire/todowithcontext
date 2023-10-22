import React, { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import TodoApp from "./Components/TodoApp";
import { TodoContextProvider } from "./Context/TodoContext";
import { Everything } from "./Components/TodoStyles";

function App() {
  let context = useContext(ThemeContext);

  const lightTheme = {
    background: "#fff",
    text: "#000",
  };

  const darkTheme = {
    background: "#333",
    text: "#fff",
  };

  console.log(context);

  return (
    <TodoContextProvider>
      <Everything theme={context?.darkMode ? darkTheme : lightTheme}>
        <TodoApp />
      </Everything>
    </TodoContextProvider>
  );
}

export default App;
