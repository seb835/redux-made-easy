import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
