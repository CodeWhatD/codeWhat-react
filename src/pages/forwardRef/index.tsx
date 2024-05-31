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

const OtherCom = (props) => {
  const { iref } = props;
  const triggerExternalHandler = () => {
    iref.current!.focus();
  };
  return (
    <button onClick={() => triggerExternalHandler()}>其它组件去触发</button>
  );
};

export const ForWardRef = () => {
  const myinput = useRef<HTMLElement>();
  const handleClick = () => {
    myinput.current!.focus();
  };
  return (
    <>
      <MyInput ref={myinput} />
      <button onClick={() => handleClick()}>聚焦</button>
      <OtherCom handler={handleClick} iref={myinput} />
    </>
  );
};
