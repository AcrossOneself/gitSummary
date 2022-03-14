import { GitUser } from "../../components/git-display";

function SearchUserPage() {
    return (
        <div className="flex justify-center content-center rounded border-2 border-lightText border-solid min-h-[30rem] w-[90%]">
            <GitUser />
        </div>
    );
}

export default SearchUserPage;