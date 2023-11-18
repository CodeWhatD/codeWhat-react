import { useState } from "react";
export const SimpleState = () => {
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState(0);
  const fakeComputed = `${index}这是伪计算属性`;
  return (
    <>
      <h1>布尔值{flag.toString()}</h1>
      <button onClick={() => setFlag(!flag)}>设置布尔值</button>
      <h1>索引值{fakeComputed}</h1>
      <button onClick={() => setIndex(index + 1)}>设置布尔值</button>
    </>
  );
};
