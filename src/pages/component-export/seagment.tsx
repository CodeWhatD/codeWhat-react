import { useState } from "react";
export default function Seagment() {
  const [bool, setBool] = useState(false);
  return (
    <div>
      <span>{bool ? "真" : "假"}</span>
      <button onClick={() => setBool(!bool)}>变更</button>
    </div>
  );
}

export const ExtraSeagment = () => {
  return <span>额外</span>;
};
