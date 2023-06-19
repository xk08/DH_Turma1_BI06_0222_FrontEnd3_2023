import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    /* DICA: Adicione os novos idiomas desejados */
};

/* DICA: Use o createContext e inicie o idioma inglês como padrão(default) */
const LanguageContext = "";

export default LanguageContext;