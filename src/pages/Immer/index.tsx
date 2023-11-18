import { useImmer } from "use-immer";

export const Immer = () => {
  const [state, setImmerState] = useImmer({
    name: "dmy",
    age: 18,
  });

  return (
    <>
        <h1>姓名：{state.name}</h1>
        <h1>年龄：{state.age}</h1>
      <button
        onClick={() => {
          setImmerState((draft) => {
            draft.name = "更改后的dmy";
            draft.age = 19;
          });
        }}
      >
        改变
      </button>
    </>
  );
};
