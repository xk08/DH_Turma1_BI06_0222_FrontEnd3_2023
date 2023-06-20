import "../App.css";

import { useContext } from 'react';
import LanguageContext from '../context';

const Navbar = () => {

    /// Importamos do contexto global o estado e a função de atualização da linguagem
    const { language, handleChangeLA } = useContext(LanguageContext);
    const { text } = language;

    return (
        <div className="navbar">

            <p>{text.home}</p>
            <p>{text.current}: {language.id}</p>

            <div className="flags">
                <button className="flag" onClick={() => handleChangeLA("PTBR")}>
                    <img src="https://st2.depositphotos.com/5934840/49166/v/450/depositphotos_491660490-stock-illustration-brazil-flag-icon.jpg"
                        alt="brazil"
                        width="50px"
                        height="40px"
                    />
                </button>

                <button className="flag" onClick={() => handleChangeLA("EN")}>
                    <img src="https://www.nicepng.com/png/detail/6-63506_usa-png-clipart-american-flag-icon-png.png"
                        alt="eua"
                        width="50px"
                        height="40px"
                    />
                </button>

                <button className="flag" onClick={() => handleChangeLA("ES")}>
                    <img src="https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png"
                        width="50px"
                        height="40px"
                    />
                </button>
            </div>

        </div>
    )
}

export default Navbar;