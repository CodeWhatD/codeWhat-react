import {
  createSlice,
  type PayloadAction,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  status: "loading" | "success" | "";
}
const initialState: CounterState = {
  value: 0,
  status: "",
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAsyncData.fulfilled, (state, action) => {
        state.status = "success";
        console.log("response is ", action.payload);
      })
      .addCase(getAsyncData.pending, (state, action) => {
        state.status = "loading";
        console.log("pending action is ", action);
      });
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

// 在组件中 可以使用useSelector传到里面获取store中的值，这种写法可以衍生出各种hook封装
export const getCount = (state: CounterState) => {
  return state.value;
};

export const getAsyncData = createAsyncThunk("counter/getData", (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          data: [1, 2],
        });
      } catch {
        reject(false);
      }
    }, 0);
  });
});

export const selectAllCount = (state: { counter: CounterState }) =>
  state.counter.value;

export const selectCountByUser = createSelector(
  [selectAllCount, (_state, userId) => userId],
  (count, userId) => {
    return userId > 10 ? count : 20;
  }
);

// usage：const needCount = useSelector(state=>selectCountByUser(state,userId))
// createSelector 是一种提高redux+react性能的工具，对于例子这个来说，只要state,userId不变则会避免一些没用的渲染
