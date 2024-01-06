import { useEffect, useRef, useState } from "react";

export const EffectCom = ({ isPlaying }: { isPlaying: boolean }) => {
  const dom = useRef(null);
  useEffect(() => {
    console.log(dom.current);
  }, [isPlaying]);
  return <div ref={dom}>q111{isPlaying}</div>;
};

export const PEffectCom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        按钮
      </button>
      <EffectCom isPlaying={isPlaying} />
    </>
  );
};
