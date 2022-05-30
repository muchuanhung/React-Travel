// 封裝函數創建store倉庫
import { createStore, applyMiddleware } from 'redux';
// 語言切換的store倉庫
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// 所有reducer的集中地
const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer

})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

export type RootState = ReturnType<typeof store.getState>

export default store;