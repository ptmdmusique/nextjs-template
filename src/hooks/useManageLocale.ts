import { useI18NValue } from "@/stores/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useManageLocale = () => {
  const locale = useI18NValue();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);
};
