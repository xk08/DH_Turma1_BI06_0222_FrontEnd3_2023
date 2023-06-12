import React, { useEffect, useState } from 'react';
import axios from "axios";
import apiBaseUrl from "../api";

const Locations = () => {

    const [locations, setLocations] = useState([]);

    const getLocations = async () => {
        const res = await axios.get(`${apiBaseUrl}/location`);
        setLocations(res.data.results);
    }

    useEffect(
        () => {
            console.log("<Locations /> executou efeito colateral");
            getLocations();
            return function unmount() {
                console.log(console.log("<Locations /> desmontou"));
            }
        }, []
    );

    return (
        <div style={{
            margin: "2%"
        }}>
            <h1>Lista de Locais</h1>

            {
                locations.length
                    ?
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Dimension</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                locations.map(lc => (
                                    <tr key={lc.id}>
                                        <td>{lc.name}</td>
                                        <td>{lc.type}</td>
                                        <td>{lc.dimension}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : <h2>A lista de locais está vazia</h2>
            }
        </div>
    )
}

export default Locations;