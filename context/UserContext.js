import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Jimmy",
        email: "JimmyGreatest@gmail.com"
    });

    const handleLogin = (updatedUser) => {
        setUser(updatedUser);
    }
    
    const handleUpdate = (updatedUser) => {
        setUser((prev) => (
            {...prev, ...updatedUser}
        ))
    }
    
    return (
        <UserContext.Provider value={{ user, handleLogin, handleUpdate }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}