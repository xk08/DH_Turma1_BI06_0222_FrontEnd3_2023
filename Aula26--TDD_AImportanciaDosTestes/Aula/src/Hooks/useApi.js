import axios from "axios";
import apiBaseUrl from "../api";
import { useState } from "react";

import useAsyncError from "../Errors/useAsyncError";
import { toast } from "react-toastify";


function useApi() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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
                toast("Os dados foram obtidos com sucesso");

            } else { /// Se não, será um GET
                const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
                setData(response.data);
                toast("Os dados foram obtidos com sucesso");
            }

        } catch (error) {
            setData(null);
            setError(error);
            throwError(Error(error));

        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, shouldFetch };
}

export default useApi;