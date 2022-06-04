import React, { useState, useEffect, useContext, createContext } from "react";
import { getAwsAssets } from "../apis/awsGetAPIs";

const ProviderContext = createContext();

function useProvider() {
    return useContext(ProviderContext);
}

function Provider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    const [sortingValue, setSortingValue] = useState("");
    const [awsAssets, setAwsAssets] = useState();

    useEffect(() => {
        (async () => {
            setAwsAssets(await getAwsAssets());
        })();
    }, []);

    const value = {
        searchValue,
        setSearchValue,
        sortingValue,
        setSortingValue,
        awsAssets,
    };

    return (
        <ProviderContext.Provider value={value}>
            {children}
        </ProviderContext.Provider>
    );
}

export { useProvider };
export default Provider;
