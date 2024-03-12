import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/features/counter/counterSlice";
export const ReduxPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const asyncIncrementAmount = (amount: number) => {
    return (dispatch: any) => {
      setTimeout(() => {
        dispatch(incrementByAmount(amount));
      }, 1000);
    };
  };
  return (
    <div>
      <span>值为：{count}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        加
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        减
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(4400));
        }}
      >
        赋值
      </button>
      <button
        onClick={() => {
          dispatch(asyncIncrementAmount(300));
        }}
      >异步赋值</button>
    </div>
  );
};
