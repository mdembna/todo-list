import React, { Component } from "react";
import TodoList from "./components/TodoList.js";

class App extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <TodoList />
      </div>
    );
  }
}

export default App;
