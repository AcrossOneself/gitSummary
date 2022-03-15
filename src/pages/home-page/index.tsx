import { Link } from "wouter";

function HomePage() {
    return (
        <div>
            <div className="title">
                Git Fetcher will provide enchanced search overview for the public git-hub pages.
            </div>
            <p>Please choose search option (currently search user has the most of functionality)</p>
            <ul>
                <li>
                    - Search by <Link href="/search-user" className="link">user name</Link>
                </li>
                <li>
                    - Search by <Link href="/search-project" className="link">project name</Link>
                </li>
                <li>
                    - Search by <Link href="/search-repo" className="link">repo name</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;