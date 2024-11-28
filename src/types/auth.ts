export type LoginCredentials = {
    name:string,
    role:string,
    password:string
}

export type authContext = {
    authToken:string,
    currentRole:string,  
    handleLogin: (data:LoginCredentials) => void,
    handleLogout: () => void,
}