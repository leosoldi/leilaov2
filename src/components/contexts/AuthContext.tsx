import { cssHooks } from "jquery";
import { ReactNode, createContext, useState, useEffect } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

type AuthContextData ={
    signed: boolean;

}

interface UserProps {
    uid: string;
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}: AuthProviderProps) {

const [user, setUser] = useState<UserProps | null>(null)
useEffect(() => {

}, [])

return(
    <AuthContext.Provider value={{signed: !!user}}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthProvider;