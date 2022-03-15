import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";

import { Fetcher } from "../../components/fetcher";

function SearchUserPage() {

    const { register, getValues } = useForm();
    const [location, setLocation] = useLocation();

    const inputPlaceholder = "Expample: octokit...";
    const baseLocation = location;

    return (
        <div>

            <div className="section">
                <form>
                    <input
                        {...register("test")}
                        className="input rounded border-solid border-2 border-darkGrey"
                        placeholder={inputPlaceholder}
                    />

                    <button
                        className="button button-brightPink"
                        type="button"
                        onClick={() => setLocation(`${baseLocation}?user=${getValues("test")}`)}
                    >
                        Search user
                    </button>
                </form>
            </div>

            <div>
                {Fetcher(`https://api.github.com/users/${(getValues("test"))}`, "user")}
            </div>

        </div>
    );
}

export default SearchUserPage;