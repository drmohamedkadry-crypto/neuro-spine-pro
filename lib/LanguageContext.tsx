"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { t, Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  tr: typeof t["en"];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  tr: t.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang(l => l === "en" ? "ar" : "en");
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tr: t[lang] }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
