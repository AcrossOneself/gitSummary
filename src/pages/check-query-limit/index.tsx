import useFetch from "../../hooks/use-fetch";
import DisplayLoading from "../../components/display-loading";
import DisplayError from "../../components/display-error";

const CheckQueryLimit = () => {

    const url = "rate_limit";
    const { data, isLoading, isError } = useFetch(`https://api.github.com/${url}`)

    return (

        <div>
            {!!data && (
                <div>
                    <div className="title">REPO ID: {data.id}</div>
                    <div>Repo Name: {data.name}</div>
                    <div>Repo status: {data.private ? "private" : "public"}</div>
                </div>
            )}
            {!!isLoading && <DisplayLoading />}
            {!!isError && <DisplayError message="Please provide coreect repository name" />}
        </div>

    );
}

export default CheckQueryLimit;