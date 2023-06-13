import { useEffect } from "react";

import NavBar from "./NavBar";

function Header() {

    useEffect(() => {
        console.log("<Header /> executou efeito colateral");
        return function unmount() {
            console.log(console.log("<Header /> desmontou"));
        }
    }, []);

    return (
        <div style={{
            backgroundColor: "#8A6DF178",
            padding: "2%",
            marginTop: "2%",
            marginBottom: "5%"
        }}>
            <h1>The Rick and Morty API</h1>

            <img src="https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg"
                style={{
                    width: "90%",
                    border: "3px solid #FFFFFF"
                }} />

            <NavBar />

        </div>

    );
}

export default Header;