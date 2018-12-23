import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Modal</h1>
      <Modal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
