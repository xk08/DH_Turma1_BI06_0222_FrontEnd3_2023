import axios from "axios";
import apiBaseUrl from "../api";

import { useState } from "react";

function useApi() {

    /* ### Definimos os estados que nosso CustomHook irá manipular */

    /// Dados que serão obtidos via API
    const [data, setData] = useState(null);

    /// Controle do loading da requisição e resposta
    const [isLoading, setIsLoading] = useState(false);

    /// Controle de possiveis erros obtidos
    const [error, setError] = useState(null);

    const shouldFetch = async (endpoint, postData) => {

        /// ### Definimos valores default para os estados iniciais
        setIsLoading(true);
        setData(null);
        setError(null);

        try {

            if (postData) {  /// Se tiver dados pra enviar, será um POST
                const response = await axios.post(`${apiBaseUrl}/${endpoint}`, postData);
                setData(response.data);


            } else { /// Se não, será um GET
                const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
                setData(response.data);
            }

        } catch (error) {
            setData(null);
            setError(error);

        } finally {
            setIsLoading(false);
        }
    };

    /// Retornamos um objeto com os estados e funções (e não componentes visuais JSX)
    return { data, isLoading, error, shouldFetch };
}

export default useApi;