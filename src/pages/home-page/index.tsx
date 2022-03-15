import { PropsWithChildren } from "react";
import { Link, Route, Router, Switch, useRoute } from "wouter";

import SearchProjectPage from "../search-project-page";
import SearchRepoPage from "../search-repo-page";
import SearchUserPage from "../search-user-page";

export interface Props {
    href: string;
}

function HomePage() {

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
                        ["Search Repo", "/search-repo"]
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
                        <Route path="/search-user"><SearchUserPage /></Route>
                        <Route path="/search-user/:user" />
                        <Route path="/search-project" component={SearchProjectPage} />
                        <Route path="/search-repo" component={SearchRepoPage} />
                    </Switch>
                </main>
            </div>

            );
        </Router>
    );

}

export default HomePage;

