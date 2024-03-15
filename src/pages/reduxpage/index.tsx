import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  increment,
  decrement,
  incrementByAmount,
  getAsyncData,
} from "../../store/features/counter/counterSlice";
import { useEffect } from "react";
export const ReduxPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const asyncIncrementAmount = (amount: number) => {
    return (dispatch: any, getState: any) => {
      setTimeout(() => {
        console.log("store state", getState().counter);
        dispatch(incrementByAmount(amount));
      }, 1000);
    };
  };
  useEffect(() => {
    dispatch(getAsyncData(11))
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
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
      >
        异步赋值
      </button>
    </div>
  );
};
