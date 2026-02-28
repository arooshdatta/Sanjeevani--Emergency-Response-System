import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

// Helper function to get nested values using dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split(".").reduce((current, key) => current?.[key] ?? path, obj);
};

type TranslationFunction = (key: string) => string;

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: TranslationFunction & typeof translations.en;
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  toggleLanguage: () => null,
  t: ((key: string) => getNestedValue(translations.en, key)) as any,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "sanjeevani-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    localStorage.setItem(storageKey, language);
  }, [language]);

  const currentTranslations = translations[language];
  
  // Create a function that supports both t("key.subkey") and t.key access patterns
  const tFunction: any = (key: string) => getNestedValue(currentTranslations, key);
  // Merge the function with the object for backward compatibility
  const t = Object.assign(tFunction, currentTranslations);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const value: LanguageProviderState = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value} {...props}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export function useLanguage(): LanguageProviderState {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
}