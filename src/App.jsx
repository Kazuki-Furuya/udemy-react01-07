import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["ccc"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="input TODO" />
        <button>add</button>
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
