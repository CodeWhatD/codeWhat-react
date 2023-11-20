import { useImmer } from "use-immer";

export const Add = () => {
  const [array, setArray] = useImmer([1, 2]); // 在不适用immer的情况下，不能够改变state中原有的数组，需要拷贝然后重新set
  const handler = () => {
    setArray((draft) => {
      draft.push(3, 4);
    });
  };
  return (
    <>
      {array.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <button onClick={handler}>增加</button>
    </>
  );
};

export const Del = () => {
  const [array, setArray] = useImmer([1, 2, 3, 4, 5]); // 在不适用immer的情况下，不能够改变state中原有的数组，需要拷贝然后重新set
  const handler = () => {
    setArray((draft) => {
      draft.splice(0, 1);
    });
  };
  return (
    <>
      {array.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <button onClick={handler}>删除</button>
    </>
  );
};

export const Filter = () => {
  const [array, setArray] = useImmer([1, 2, 3, 4, 5]); // 在不适用immer的情况下，不能够改变state中原有的数组，需要拷贝然后重新set
  const handler = () => {
    setArray(array.filter((num) => num <= 3));
  };
  return (
    <>
      {array.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <button onClick={handler}>过滤</button>
    </>
  );
};
