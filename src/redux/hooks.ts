import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
// 引入store的類型
import { RootState } from "./store";

// 重新定義useselector
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;