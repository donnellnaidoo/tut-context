import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Jimmy",
        email: "JimmyTheGreatest@gmail.com"
    });

    const handleLogin = (updatedUser) => {
        setUser(updatedUser);
    }

    return (
        <UserContext.Provider value={{ user, handleLogin }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}