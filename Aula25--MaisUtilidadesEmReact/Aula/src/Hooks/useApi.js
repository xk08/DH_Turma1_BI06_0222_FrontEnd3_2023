import axios from "axios";
import apiBaseUrl from "../api";
import { useState } from "react";


import useAsyncError from "../Errors/useAsyncError";

function useApi() {

    /// Dados que serão obtidos via API
    const [data, setData] = useState(null);

    /// Controle do loading da requisição e resposta
    const [isLoading, setIsLoading] = useState(false);

    /// Controle de possiveis erros obtidos
    const [error, setError] = useState(null);

    const throwError = useAsyncError();

    const shouldFetch = async (endpoint, postData) => {

        setIsLoading(true);
        setData(null);
        setError(null);

        try {

            if (postData) {  /// Se tiver dados pra enviar, será um POST
                const response = await axios.post(`${apiBaseUrl}/${endpoint}`, postData);
                setData(response.data);

                /// Chamamos a função de alerta/notificação

            } else { /// Se não, será um GET
                const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
                setData(response.data);

                /// Chamamos a função de alerta/notificação

            }

        } catch (error) {
            setData(null);
            setError(error);

            /// Chamamos o Custom Hook que atualiza o estado do erro capturado pelo ErrorBoundary
            throwError(Error(error));

        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, shouldFetch };
}

export default useApi;