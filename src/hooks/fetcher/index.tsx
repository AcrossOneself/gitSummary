import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetch = (url: string) => {

    const { data, error } = useSWR(
        url,
        fetcher
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useFetch;