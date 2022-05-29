// 封裝函數創建store倉庫
import { createStore } from 'redux';
// 語言切換的store倉庫
import languageReducer from "./language/languageReducer";
const store = createStore(languageReducer);
export type RootState = ReturnType<typeof store.getState>
export default store;