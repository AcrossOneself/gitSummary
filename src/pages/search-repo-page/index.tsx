import { Fetcher } from "../../components/fetcher";

function SearchRepoPage() {
  const repo = "reactjs/react-a11y";
  return (
    <div>
      <div>
        {Fetcher(`https://api.github.com/repos/${repo}`, "repo")}
      </div>
    </div>
  );
}

export default SearchRepoPage;
