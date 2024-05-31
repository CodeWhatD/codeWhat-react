import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((_props, ref: any) => {
  const realRef = useRef(null);
  // 只对外暴露focus
  useImperativeHandle(ref, () => {
    return {
      focus() {
        realRef.current.focus();
      },
    };
  });
  return <input ref={realRef} />;
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
