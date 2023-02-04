import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="input TODO" />
        <button>add</button>
      </div>
      <div>
        <p>incompleted todo</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>complete</button>
            <button>delete</button>
          </div>
          <div>
            <li>bbb</li>
            <button>complete</button>
            <button>delete</button>
          </div>
        </ul>
      </div>
      <div>
        <p>completed todo</p>
        <ul>
          <li>ccc</li>
          <button>back</button>
        </ul>
      </div>
    </>
  );
};
