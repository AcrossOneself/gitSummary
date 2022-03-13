import { Link, Route } from "wouter";
import SearchProjectPage from "../search-project-page";
import SearchRepoPage from "../search-repo-page";
import SearchUserPage from "../search-user-page";

function HomePage() {
    return (
        <div className="bg-lightBkgnd font-sans my-[1rem]">

            <nav className="flex w-full h-full justify-evenly">
                {[
                    ["Search User", "/search-user", "bg-lightText"],
                    ["Search Project", "/search-project", "bg-lightAccent"],
                    ["Search Repo", "/search-repo", "bg-darkAccent"]
                ].map(([title, url, bkgndColor]) => (
                    <div className={`${bkgndColor} flex justify-center content-center w-[21rem] h-[3rem] rounded-lg`}>
                        <Link href={url}>
                            <div className="flex items-center text-xl text-lightBkgnd font-medium">{title}</div>
                        </Link>
                    </div>
                ))}
            </nav>

            <div className="my-[2rem] flex justify-center content-center">
                <Route path="/search-user" component={SearchUserPage} />
                <Route path="/search-project" component={SearchProjectPage} />
                <Route path="/search-repo" component={SearchRepoPage} />
            </div>
        </div>
    );
}

export default HomePage;

