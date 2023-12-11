import { useReducer } from "react";

const reducer = (state: number, action: string) => {
  switch (action) {
    case "add":
      return state + 1;
    default:
      return state++;
  }
};
const initCount = 0;

export const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initCount);
  const [otherCount, otherDispatch] = useReducer(reducer, initCount);
  return (
    <>
      <div>count:{count}</div>
      <div>otherCount:{otherCount}</div>
      <button onClick={() => dispatch("add")}>count加</button>
      <button onClick={() => otherDispatch("add")}>ohterCount加</button>
    </>
  );
};
