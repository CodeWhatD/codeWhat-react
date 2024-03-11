import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/features/counter/counterSlice";
export const ReduxPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
    </div>
  );
};
