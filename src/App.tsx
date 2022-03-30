import { PropsWithChildren } from "react";
import { Link, Route, Router, Switch, useRoute } from "wouter";
import DisplayData from "./components/display-data";
import CheckQueryLimit from "./pages/check-query-limit";

import HomePage from "./pages/home-page";
import SearchProjectPage from "./pages/search-project-page";
import SearchRepoPage from "./pages/search-repo-page";
import SearchUserPage from "./pages/search-user-page";

export interface Props {
    href: string;
}

function App() {

    const ActiveLink = (props: PropsWithChildren<Props>) => {
        const [isActive] = useRoute(props.href);
        return (
            <Link {...props}>
                <a
                    href={props.href}
                    className={isActive ? "activeLink" : ""}
                >{props.children}</a>
            </Link>
        );
    };

    return (
        <Router>
            <div className="bg-lightGrey w-screen h-screen font-sans text-darkGrey">
                <nav className="nav">
                    {[
                        ["Search User", "/search-user"],
                        ["Search Project", "/search-project"],
                        ["Search Repo", "/search-repo"],
                        ["CheckQueryLimit", "/query-limit"]
                    ].map(([title, url]) => (
                        <div key={title} className={`navElement`}>
                            <ActiveLink href={url}>
                                <div className="navButton">{title}</div>
                            </ActiveLink>
                        </div>
                    ))}
                </nav>

                <main className="min-h-full h-full px-8 bg-white flex justify-start content-center ">
                    <Switch>
                        <Route path="/"><HomePage /></Route>
                        <Route path="/search-user"><SearchUserPage /></Route>
                        <Route path="/search-user?user=:user"> <DisplayData /></Route>
                        <Route path="/search-project"><SearchProjectPage /></Route>
                        <Route path="/search-repo"><SearchRepoPage /></Route>
                        <Route path="/query-limit"><CheckQueryLimit /></Route>
                        <Route path="/:rest*" component={() => <h1>Not Found</h1>} />
                    </Switch>
                </main>
            </div>

            );
        </Router>
    );

}

export default App;