import { useEffect, useRef } from "react";

export const EffectCom = () => {
  const dom = useRef(null);
  useEffect(() => {
    console.log(dom.current);
  });
  return <div ref={dom}>q111</div>;
};
