import React, { useContext, createContext, useState } from "react";

export const useProviderAuth = createContext();

export const UseLoginProvider = () => useContext(useProviderAuth);

/**
 * defined a custom hook that returns a string and function with employee details.
 * @returns None
 */

function Uselogindata() {
    const [storePassword, setStorePassword] = useState("React Starter Template");
    const name = ("(React Context Approach)");

    const headingStyle = {
        fontSize: "30px"
    }
    const spanElementStyles = {
        fontSize: "20px",
        paddingLeft: "5px"
    }

    return {
        storePassword,
        setStorePassword,
        name,
        headingStyle,
        spanElementStyles
    }
}

export const LoginProvider = ({ children }) => {
    const loginState = Uselogindata();
    return <useProviderAuth.Provider value={loginState}>{children}</useProviderAuth.Provider>;
}
