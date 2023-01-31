import React, { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LangProvider = ({ children }) => {

  const [lang, setLang] = useState('es');

  const store = {
    lang,
    setLang,
  };

  return <LanguageContext.Provider value={store}>{children}</LanguageContext.Provider>;

}

