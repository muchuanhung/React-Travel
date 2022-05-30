// 封裝函數創建store倉庫
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 語言切換的store倉庫
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";

// 所有reducer的集中地
const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export default store;