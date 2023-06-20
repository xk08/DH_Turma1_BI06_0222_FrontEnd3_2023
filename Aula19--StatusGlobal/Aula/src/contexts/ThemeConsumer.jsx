import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

function ThemeConsumer({ children }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={
            `
            ${theme.bodyTheme} 
            ${theme.h2Theme} 
            ${theme.thTheme} 
            ${theme.trTheme}
            ${theme.btnTheme}
            ${theme.navTheme}
            
            `
        }>
            {children}
        </div>
    )

}

export default ThemeConsumer;