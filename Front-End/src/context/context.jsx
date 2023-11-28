
import { createContext, useState } from "react";

export const GymContext = createContext(null);

export const Context = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    const [auth, setAuth] = useState(true)

    const handleModeChange = (e) => {
        setDarkMode(
            e.target.checked
        )
    };
    const handleAuth = (e) => {
        setAuth(
            !auth
        )
    };
    const contextValue = {
        auth,
        handleAuth,
        handleModeChange,
        darkMode
    };
    return (
        <GymContext.Provider value={contextValue}>
            {props.children}
        </GymContext.Provider>
    );
};