import { useState } from "react";

import apiBaseUrl from "../api";

import axios from "axios";

function useApi() {

    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);


    const shouldFetch = async (endpoint, dataToPost) => {

        try {

            setData(null);
            setError(null);
            setIsLoading(true);

            if (dataToPost) {
                /// POST
                const response = await axios.post(`${apiBaseUrl}/${endpoint}`, dataToPost);
                setData(response.data);

            } else {
                /// GET
                const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
                setData(response.data);

            }

        } catch (error) {
            setData(null);
            setError(error);

        } finally {
            setIsLoading(false);
        }


    }

    return { data, isLoading, error, shouldFetch }
}
export default useApi;