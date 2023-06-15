
import HomeCard from "../Home/HomeCard";
import hoteis from "../../hoteis.json";

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

                    hoteis.map(
                        (hotel) => {
                            return (
                                <HomeCard
                                    key={hotel.id}
                                    hotel={hotel}
                                />
                            )
                        }
                    )


                    /* Exibir Cards dos Hoteis */
                }
            </div>

        </>
    );
}

export default Home;