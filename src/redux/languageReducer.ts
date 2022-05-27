// 定義語言的接口 語言代碼
export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

//使用接口數據定義 初始state
const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

// 處理state引入的舊數據defaultstate透過action處理回傳新的state
export default (state = defaultState, action) => {
  return state;
};
