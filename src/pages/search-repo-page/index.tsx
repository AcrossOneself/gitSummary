import GitDisplay from "../../components/git-display";

function SearchRepoPage() {
  return (
    <div className="flex justify-center content-center rounded border-2 border-darkAccent border-solid min-h-[30rem] w-[90%]">
      <div>
        <GitDisplay />
      </div>

    </div>
  );
}

export default SearchRepoPage;
