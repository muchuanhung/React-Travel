// 導入i18n
import i18n from "i18next";
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
// 使用...展開括號符 用舊的對象創建新的對象
export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_language":
      i18n.changeLanguage(action.payload); // userffect
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
