import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 定義好產品細節的data接口
interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
};

// reducer 應該為純函式 createSlice & immer的方式
// 第二個action處理數據請求成功的函式
// 第三個action處理數據請求失敗的函式
export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchStart: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
