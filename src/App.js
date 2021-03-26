import React from "react";
import Counter from "./Counter";
import "./App.css";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>The count: {count}</h2>
      <Counter />
    </div>
  );
}
