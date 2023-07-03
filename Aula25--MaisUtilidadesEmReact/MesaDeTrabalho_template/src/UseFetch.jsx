/* 
    Custom Hook 
    Responsável por realizar a busca de um cachorro por sua raça na API.
*/
import { useEffect, useState, useCallback } from "react";

/* Possíveis status ao fazer a busca(GET) na API */
export const statusList = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    LOADING: "LOADING"
};

export const useFetch = (url) => {

    const [status, setStatus] = useState(statusList.LOADING);
    const [data, setData] = useState();

    const fetchData = useCallback(async () => {

        setStatus(statusList.LOADING);

        try {
            const response = await fetch(url);

            /* Caso a resposta não seja bem sucedida (equivale a status != 200) */
            if (!response.ok) {
                throw Error("Erro ao realizar a requisição na API"); //Lança uma exceção personalizada
            }

            const json = await response.json();
            setData(json);
            setStatus(statusList.SUCCESS);

        } catch (error) {
            setStatus(statusList.ERROR);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, status };
};