// 封裝函數創建store倉庫
import { createStore, applyMiddleware } from 'redux';
// 語言切換的store倉庫
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
// 導入組件登入持久化
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// 持久化的對象
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
  }

// 所有reducer的集中地
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


// 使用redux_toolkit的configurestore
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});
  
const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor };