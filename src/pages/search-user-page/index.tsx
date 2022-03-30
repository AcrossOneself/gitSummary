import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";

import DisplayError from "../../components/display-error";
import DisplayLoading from "../../components/display-loading";
import useFetch from "../../hooks/use-fetch";

const SearchUserPage = () => {

    const { register, getValues } = useForm();
    const [location, setLocation] = useLocation();

    const inputPlaceholder = "Expample: octokit";
    const baseLocation = location;

    const { data, isError, isLoading } = useFetch(`https://api.github.com/users/${(getValues("user"))}`);

    return (
        <div>

            <div className="section">
                <form>
                    <input
                        {...register("user")}
                        className="input rounded border-solid border-2 border-darkGrey"
                        placeholder={inputPlaceholder}
                        autoFocus
                        required
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setLocation(`${baseLocation}?user=${getValues("user")}`)
                            }
                        }
                        }
                        type="text"
                    />

                    <button
                        className="button button-brightPink"
                        type="button"
                        onClick={() => setLocation(`${baseLocation}?user=${getValues("user")}`)}
                        disabled={isLoading}
                    >
                        Search user
                    </button>
                </form>
            </div>

            {data && JSON.stringify(data).length && (
                <div>
                    <div className="header">
                        <img src={data.avatar_url} alt="avatar" className="avatar" />
                        <div>
                            <div className="title">{data.name}</div>
                            <div className="subtitle">@{data.login}</div>
                            <div className="text">Joined {displayDate(data.created_at)}</div>
                            <div className="text">Last updated {displayDate(data.updated_at)}</div>
                        </div>
                    </div>
                    <div>{data.id}</div>
                    <div>{data.node_id}</div>
                    <div>{data.url}</div>
                    <div>{data.gravatar_id}</div>
                    <div>{data.html_url}</div>
                    <div>{data.followers_url}</div>
                    <div>{data.following_url}</div>
                    <div>{data.gists_url}</div>
                    <div>{data.starred_url}</div>
                    <div>{data.subscriptions_url}</div>
                    <div>{data.organizations_url}</div>
                    <div>{data.repos_url}</div>
                    <div>{data.events_url}</div>
                    <div>{data.received_events_url}</div>
                    <div>{data.type}</div>
                    <div>{data.site_admin}</div>
                    <div>{data.company}</div>
                    <div>{data.blog}</div>
                    <div>{data.location}</div>
                    <div>{data.email}</div>
                    <div>{data.hireable}</div>
                    <div>{data.bio}</div>
                    <div>{data.twitter_username}</div>
                    <div>{data.public_repos}</div>
                    <div>{data.public_gists}</div>
                    <div>{data.followers}</div>
                    <div>{data.following}</div>
                    {data.login}
                </div>

            )
            }
            {isLoading && <DisplayLoading />}
            {!!isError && <DisplayError message="Please provide correct user name" />}

        </div>
    );
}

const displayDate = (date: Date) => {
    const dateFormatted = new Date(date).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "short", year: "numeric" }
    );
    return dateFormatted;
}


export default SearchUserPage;