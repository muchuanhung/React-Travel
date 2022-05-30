import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = 
    "FETCH_RECOMMEND_PRODUCTS_START"; // 正在調用推薦訊息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推薦信息api調用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推薦信息api調用失败

interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any,
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

export type RecommendProductAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction; 

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  };
};

// 調用api獲取成功返回data
export const fetchRecommendProductSuccessActionCreator = (data) : FetchRecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}

// 調用api獲取失敗返回error
export const fetchRecommendProductFailActionCreator = (error):FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}


// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一些列連續的action操作
// 并且可以處理異步邏輯
// 業務邏輯可以从ui層面挪到这里，代码分層會更清晰
export const giveMeDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  RecommendProductAction
> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductStartActionCreator());
  try {
    const { data } = await axios.get(
      "http://123.56.149.216:8089/api/productCollections"
    );
    dispatch(fetchRecommendProductSuccessActionCreator(data));
  } catch (error) {
    // @ts-ignore：无法被执行的代码的错误
    dispatch(fetchRecommendProductFailActionCreator(error.message));
  }
};