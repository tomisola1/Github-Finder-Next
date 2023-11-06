import { UserProps } from "@/types";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";


interface ContextProps {
    user: UserProps | {},
    setUser: Dispatch<SetStateAction<UserProps>>,
    users: UserProps[] | [],
    setUsers: Dispatch<SetStateAction<UserProps[]>>
}


export const GlobalContext = createContext<ContextProps>({
    user: {} as UserProps,
    setUser: () => {},
    users: [],
    setUsers: ():UserProps[] => []
})

export const GlobalContextProvider = ({ children }) => {
    const [ users, setUsers] = useState<[] | UserProps[]>([]);
    const [ user, setUser] = useState<{} | UserProps>({});
    
    return (
        <GlobalContext.Provider value={{ user, setUser, users, setUsers }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);