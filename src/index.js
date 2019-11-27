import React from "react";
import ReactDOM from "react-dom";

import { SearchBarA, SearchBarB } from "../src/Searchbar";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SearchBarA />
      <br />
      <SearchBarB />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
