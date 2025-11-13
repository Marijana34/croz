import { createContext, useState, type PropsWithChildren } from "react";

interface LanguageContextValue {
  language: string;
  setLanguage: (lan: string) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "hr",
  setLanguage: () => {},
});

export default function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState("hr");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
