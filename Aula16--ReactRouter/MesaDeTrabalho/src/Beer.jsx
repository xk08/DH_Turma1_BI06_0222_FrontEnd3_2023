import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

/// NOTA: Esta página irá renderizar cada bebida individualmente
const Beer = () => {

    const [beer, setBeer] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const getBeer = async () => {
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`); //Capturado via parametro na URL
        const data = await res.json();
        setBeer(data[0]);
    };

    useEffect(
        () => {
            getBeer();
        }, []
    );

    return (
        <div>

            {/* Retorna para a rota anterior (utilizando o History API com o navigate) */}
            <button onClick={() => navigate(-1)}> {"< Ver todos"}</button>

            <div className="beer">
                <h2>Cerveja número: {beer.id}</h2>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>

        </div>

    )
}

export default Beer;