import { createContext } from 'react';
import PTBR from "./languages/portuguese.json";
import EN from "./languages/english.json";
import ES from "./languages/spanish.json";

/// Criamos um array com os idiomas/linguagens de nossa aplicação
export const languages = {

    portuguese: {
        id: "PTBR",
        text: PTBR
    },

    english: {
        id: "EN",
        text: EN
    },

    spanish: {
        id: "ES",
        text: ES
    }

};

/// Criamos um novo contexto que será provido aos demais componentes da aplicação
const LanguageContext = createContext(languages.portuguese);

export default LanguageContext;