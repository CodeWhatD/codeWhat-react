import type { RootState, AppDispatch } from "../store/index";
import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
