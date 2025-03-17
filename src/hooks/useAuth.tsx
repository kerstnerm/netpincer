import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthContext.tsx";
import {emailKeyName, tokenKeyName} from "../constants/constants.ts";

const useAuth = () => {
    const { token, setToken, email, setEmail  } = useContext(AuthContext);
    const isLoggedIn = !!token;

    const login = (email: string, password: string) => {
        console.log({email, password});
        const tokenFromBE = 'yourDotnetToken';
        setToken(tokenFromBE); localStorage.setItem(tokenKeyName, tokenFromBE);
        setEmail(email); localStorage.setItem(emailKeyName, email);
    }

    const logout = () => {
        localStorage.clear();
        setToken(null);
    }

    useEffect(() => {

    }, []);

    return {login, logout, token, email, isLoggedIn};
}

export default useAuth;