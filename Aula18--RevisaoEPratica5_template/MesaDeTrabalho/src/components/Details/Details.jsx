import hoteis from "../../hoteis.json";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DetailCard from "./DetailCard";
function Details() {
    const [hotel, setHotel] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            findHotelById(params.id);
        }
    }, []);

    const findHotelById = (idParams) => {
        const hotel = hoteis.find(hotel => hotel.id == idParams);
        setHotel(hotel);
    };

    return (
        <>
            <DetailCard
                hotel={hotel}
            />
            <button
                onClick={() => navigate(-1)}
                style={{ marginTop: "2%", marginBottom: "2%" }}
            >Voltar
            </button>
        </>
    );
}

export default Details;