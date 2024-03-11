import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
console.log(counterSlice);
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
