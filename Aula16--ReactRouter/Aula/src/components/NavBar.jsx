import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="episodes">Episódios</Link>
            <Link to="locations">Locais</Link>
            <Link to="characters">Personagens</Link>
        </nav>
    );
}

export default NavBar;