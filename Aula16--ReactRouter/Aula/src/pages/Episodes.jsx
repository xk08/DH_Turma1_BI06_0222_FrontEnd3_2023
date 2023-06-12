import { useEffect, useState } from 'react';
import axios from "axios";
import apiBaseUrl from "../api";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(
        () => {
            console.log("<Episodes /> executou efeito colateral");
            getEpisodes();
            return function unmount() {
                console.log(console.log("<Episodes /> desmontou"));
            }
        }, []
    );

    const getEpisodes = async () => {
        const res = await axios.get(`${apiBaseUrl}/episode`);
        setEpisodes(res.data.results);
    }

    return (
        <div style={{
            margin: "2%"
        }}>
            <h1>Lista de Episódios</h1>

            {
                episodes.length
                    ?
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Episode</th>
                                <th>Air date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                episodes.map(ep => (
                                    <tr key={ep.id}>
                                        <td>{ep.name}</td>
                                        <td>{ep.episode}</td>
                                        <td>{ep.air_date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : <h2>A lista de episódios está vazia</h2>
            }
        </div>
    )
}

export default Episodes;