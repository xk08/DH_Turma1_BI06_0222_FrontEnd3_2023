import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link className="linkStyle" to="episodes">Episódios</Link>
            <Link className="linkStyle" to="locations">Locais</Link>
            <Link className="linkStyle" to="characters">Personagens</Link>
        </nav>
    );
}

export default NavBar;