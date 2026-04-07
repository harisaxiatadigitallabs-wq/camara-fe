"use client";

import { useCallback, useEffect, useState } from "react";

export type Lang = "id" | "en";

const STORAGE_KEY = "camara_lang";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "id" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }, []);

  return { lang, setLang };
}
