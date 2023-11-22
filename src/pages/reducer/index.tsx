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
  return (
    <>
      {count}
      <button onClick={() => dispatch("add")}>加</button>
    </>
  );
};
