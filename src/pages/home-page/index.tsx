import { Link, Route } from "wouter";
import SearchProjectPage from "../search-project-page";
import SearchRepoPage from "../search-repo-page";
import SearchUserPage from "../search-user-page";

function HomePage() {
    return (
        <div>
            <Link href="/search-user">
                <p>Search User</p>

            </Link>
            <Link href="/search-project">
                <p>Search Project</p>
            </Link>
            <Link href="/search-repo">
                <p>Search User</p>
            </Link>

            <Route path="/search-user" component={SearchUserPage} />
            <Route path="/search-project" component={SearchProjectPage} />
            <Route path="/search-repo" component={SearchRepoPage} />
        </div>
    );
}

export default HomePage;

