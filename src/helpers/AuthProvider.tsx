import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { authContext, LoginCredentials } from "../types/auth";
import { SignJWT } from "jose";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const AuthContext = createContext<authContext | undefined>(undefined);
type authProviderProps = PropsWithChildren

export const AuthProvider = ({children}:authProviderProps) => {
    const [authState, setAuthState] = useState<string>('');
    const [currentRole, setCurrentRole] = useState<string>('');
    const navigateTo = useNavigate();
    
    const login = async (login_data:LoginCredentials) => {
       await new Promise((res) => setTimeout(res,2000))
       const role = login_data.role;
       const secret_string = 'venkatesh14'
       const secret_key = new TextEncoder().encode(secret_string);
       const token = await new SignJWT(login_data) // Initialize JWT with payload
       .setProtectedHeader({ alg: 'HS256' }) // Specify the signing algorithm (HMAC SHA-256)
       .sign(secret_key);
       setCurrentRole(role);
       setAuthState(token);
       console.log("token created",authState)
       if(token){
        Cookies.set('artk',token, {expires: 5});
          if(role=='ADMIN')navigateTo('/admin-dashboard')
            else navigateTo('/')
       }
    }
    const logout = () => {
        setCurrentRole('');
        setAuthState('');
    }
    React.useEffect(() => {
        console.log("TOken updated", authState)
    },[authState])
    return (
        <AuthContext.Provider value = {{
            authToken:authState,
            currentRole,
            handleLogin:login,
            handleLogout:logout
        }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("useAuth must be used within Auth Provider")
    else return context;
}