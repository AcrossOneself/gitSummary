import { useForm } from "react-hook-form";
import { useLocation } from "wouter";

import { Fetcher } from "../../components/fetcher";

function SearchUserPage() {

    const { register, getValues } = useForm();
    const [location, setLocation] = useLocation();

    const defaultUser = "defunkt";
    const baseLocation = location;

    const handleClick = () => setLocation(`${baseLocation}?user=${getValues("test")}`);


    return (
        <div className="flex flex-col justify-start items-center rounded border-2 border-lightText border-solid min-h-[30rem] w-[90%]">

            <div className="section">
                <form>
                    <input
                        className="input rounded border-solid border-2 border-darkText"
                        placeholder={defaultUser}
                        defaultValue={defaultUser}
                        onKeyPress={(e) => e.key === 'Enter' && handleClick}
                        {...register("test")}
                    />

                    <button
                        className="button border-solid border-2 border-darkText"
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