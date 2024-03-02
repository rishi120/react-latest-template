import React, { useContext, createContext, useState } from "react";

export const useProviderAuth = createContext();

export const UseLoginProvider = () => useContext(useProviderAuth);

function Uselogindata() {
    const [storePassword, setStorePassword] = useState("React Starter Template");

    return {
        storePassword,
        setStorePassword
    }
}

export const LoginProvider = ({ children }) => {
    const loginState = Uselogindata();
    return <useProviderAuth.Provider value={loginState}>{children}</useProviderAuth.Provider>;
}
