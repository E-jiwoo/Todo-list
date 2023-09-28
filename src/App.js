import "./App.css";
import { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("I'm herererere!", inputValue);
    setTodoList([...todoList, inputValue]);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;
