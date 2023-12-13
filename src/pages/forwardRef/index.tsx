import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref: any) => {
  return <input ref={ref} />;
});

export const ForWardRef = () => {
  const myinput = useRef<HTMLElement>();
  const handleClick = () => {
    myinput.current!.focus();
  };
  return (
    <>
      <MyInput ref={myinput} />
      <button onClick={() => handleClick()}>聚焦</button>
    </>
  );
};
