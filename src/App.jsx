import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["ccc"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = (event) => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="input TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">incompleted todo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>complete</button>
                <button>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">completed todo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
