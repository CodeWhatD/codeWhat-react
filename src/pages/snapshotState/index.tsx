/**
 * 对于使用useState更新状态时，想连续更新状态，需要在第二个解构出来的函数中传函数
 *
 * Bad
 * count为1
 * setState(count+1) count为1+1 count为1
 * setState(count+1) count为1+1 count还是为1
 * setState(count+1) count为1+1 count还是为1
 *
 * Good
 * count为1
 * setState(count=>count+1) count为1+1 count为1
 * setState(count=>count+1) count为2+1 count为2
 * setState(count=>count+1) count为3+1 count为3
 *
 */

import { useState } from "react";

export const SnapshotState = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <h1>count为{count}</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          setCount((c) => c + 1);
        }}
      >
        按钮
      </button>
    </>
  );
};
