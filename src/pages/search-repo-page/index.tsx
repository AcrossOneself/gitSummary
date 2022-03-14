import { Fetcher } from "../../components/fetcher";

function SearchRepoPage() {
  const repo = "reactjs/react-a11y";
  return (
    <div className="flex justify-center content-center rounded border-2 border-darkAccent border-solid min-h-[30rem] w-[90%]">
      <div>
        {Fetcher(`https://api.github.com/repos/${repo}`, "repo")}
      </div>
    </div>
  );
}

export default SearchRepoPage;
