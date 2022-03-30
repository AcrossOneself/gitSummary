
import useSWR from "swr";

const fetcher = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw response;
    }

    return response.json();
}

const useFetch = (url: string) => {

    const { data, error } = useSWR(
        url,
        fetcher,
        { revalidateOnMount: false, revalidateOnFocus: false, revalidateOnReconnect: false, refreshInterval: 0 }
    );

    return {
        data: data,
        isLoading: !!data && !!error,
        isError: error
    }
}


export default useFetch;