import React from "react";
import Counter from "./Counter";
import "./App.css";
import { useSelector } from "react-redux";

export default function App() {
  // The total count stored in the redux store
  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Seb Pedley",
    "Bob Smith",
    "Merango Shelateran",
    "Suungo Parlance",
  ];

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
