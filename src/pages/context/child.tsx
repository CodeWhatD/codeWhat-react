import { useContext } from "react";
import SimpleContext from "./context";

export const Child = () => {
  const count = useContext(SimpleContext);

  return (
    <>
      <div>当前等级{count}</div>
    </>
  );
};
