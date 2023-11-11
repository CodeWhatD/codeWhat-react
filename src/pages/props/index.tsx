import { Children } from "./children";
import { useState } from "react";

const Segment1 = (name: string) => {
  return <h1>{name}</h1>;
};
const Segment2 = () => {
  return <h1>片段2</h1>;
};
const Segment3 = () => {
  return <h1>片段3</h1>;
};

const Parent = function () {
  const [size, setSize] = useState(1111122);
  const [name] = useState<string>("你好啊");
  const simpleProps = {
    size,
    name,
  };
  return (
    <>
      <button onClick={() => setSize(9900)}>父级改变传的prop</button>
      <Children {...simpleProps}>
        {{
          s1: Segment1,
          s2: Segment2,
          s3: Segment3,
        }}
      </Children>
    </>
  );
};

export default Parent;
