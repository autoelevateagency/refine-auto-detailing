"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getDictionary, type Dictionary, type Locale } from "@/data/dictionary";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = "EN",
}: LocaleProviderProps): ReactNode => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const value = useMemo(
    (): LocaleContextValue => ({
      locale,
      setLocale,
      dict: getDictionary(locale),
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
};
