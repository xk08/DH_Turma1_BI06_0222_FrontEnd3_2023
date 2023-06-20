
import { createContext } from "react";

const themes = {

    light: {
        bodyTheme: "bodyThemeLight", /* São classes css pré-definidas */
        h2Theme: "h2ThemeLight",
        thTheme: "thThemeLight",
        trTheme: "trThemeLight",
        btnTheme: "btnThemeLight",
        navTheme: "navThemeLight",
    },

    dark: {
        bodyTheme: "bodyThemeDark",
        h2Theme: "h2ThemeDark",
        thTheme: "thThemeDark",
        trTheme: "trThemeDark",
        btnTheme: "btnThemeDark",
        navTheme: "navThemeDark",
    }
}

const ThemeContext = createContext(themes.light);

export { themes, ThemeContext };