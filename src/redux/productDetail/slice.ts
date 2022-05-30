import { createSlice, PayloadAction, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8089/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
);

// reducer 應該為純函式 createSlice & immer的方式
// 第二個action處理數據請求成功的函式
// 第三個action處理數據請求失敗的函式
export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  }
});
