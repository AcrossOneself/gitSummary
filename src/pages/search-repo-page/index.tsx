import useFetch from "../../hooks/use-fetch";
import Loading from "../../components/loading";
import Error from "../../components/error";

function SearchRepoPage() {

  const repo = "reactjs/react-a11y234";
  const { data, isLoading, isError } = useFetch(`https://api.github.com/repos/${repo}`)

  return (

    <div>
      {!!data && (
        <div>
          <div className="title">REPO ID: {data.id}</div>
          <div>Repo Name: {data.name}</div>
          <div>Repo status: {data.private ? "private" : "public"}</div>
        </div>
      )}
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
    </div>

  );
}

export default SearchRepoPage;
