/// Importamos o array de Hoteis do arquivo .json
import hoteis from "../../hoteis.json";
import HomeCard from "./HomeCard";

function Home() {
    return (
        <>
            <h1>Hoteis disponíveis</h1>

            <div style={
                {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }
            }>
                {
                    hoteis.map(hotel => {
                        return (
                            <HomeCard
                                key={hotel.id}
                                hotel={hotel}
                            />
                        )
                    })

                }
            </div>

        </>
    );
}

export default Home;