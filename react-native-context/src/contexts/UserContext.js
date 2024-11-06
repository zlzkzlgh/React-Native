import React,{createContext,useState} from "react";

const UserContext = createContext();

export const UserProvider2 = ({children}) => {
    const [user,setUser] = useState(null);

    const login = () => setUser({name:'홍길동'})
    const logout = () => setUser(null)

    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;