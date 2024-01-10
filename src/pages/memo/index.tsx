import { useState, useMemo } from "react";
export const MemoList = ({ todos }: { todos: Record<string, string>[] }) => {
  const [visible] = useState(true);
  const vList = useMemo(() => {
    return visible ? todos : [];
  }, [todos, visible]);

  return (
    <>
      {vList.map((item) => (
        <span>{item}</span>
      ))}
    </>
  );
};
