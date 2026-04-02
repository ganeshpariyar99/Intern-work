import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: "Ram", role: "admin", phone: "9856236542",weight: 75});

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

//custom hook
//eslint-disable-next-line react-refresh/only-export-components

export const useAuth = () => useContext(AuthContext);