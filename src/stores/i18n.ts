import { SupportedLanguage } from "@/data/i18n";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export const i18nState = atom<SupportedLanguage>({
  key: "i18nState",
  default: "en",
});

export const useI18NValue = () => {
  return useRecoilValue(i18nState);
};

export const useI18NState = () => {
  return useRecoilState(i18nState);
};
