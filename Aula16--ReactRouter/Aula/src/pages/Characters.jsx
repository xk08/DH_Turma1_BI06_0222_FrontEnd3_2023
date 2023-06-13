import React, { useEffect, useState } from 'react';

import axios from "axios";
import apiBaseUrl from "../api";
import { Link } from "react-router-dom";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const res = await axios.get(`${apiBaseUrl}/character`);
        setCharacters(res.data.results);
    }

    useEffect(
        () => {
            console.log("<Characters /> executou efeito colateral");
            getCharacters();
            return function unmount() {
                console.log(console.log("<Characters /> desmontou"));
            }
        }, []
    );

    return (
        <div style={{
            margin: "2%"
        }}>
            <h1>Lista de Personagens</h1>
            {
                characters.length ?

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Species</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                characters.map(ch => (
                                    <tr id={ch.id}
                                        key={ch.id}
                                    >
                                        <td>{ch.name}</td>
                                        <td>
                                            <Link to={ch.name}>Ver mais</Link>
                                        </td>
                                        <td>{ch.status}</td>
                                        <td>{ch.species}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    : <h2>A lista de personagens está vazia</h2>
            }
        </div>
    )
}

export default Characters;