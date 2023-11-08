import { RepoProps, UserProps } from "@/types";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";


interface ContextProps {
    repos: RepoProps[] | [],
    setRepos: Dispatch<SetStateAction<RepoProps[]>>,
    user: UserProps | {},
    setUser: Dispatch<SetStateAction<UserProps>>,
    users: UserProps[] | [],
    setUsers: Dispatch<SetStateAction<UserProps[]>>,
    loading: Boolean,
    setLoading: Dispatch<SetStateAction<Boolean>>
}


export const GlobalContext = createContext<ContextProps>({
    repos: [],
    setRepos: ():RepoProps[] => [],
    user: {} as UserProps,
    setUser: () => {},
    users: [],
    setUsers: ():UserProps[] => [],
    loading: false,
    setLoading: () => {}
})

export const GlobalContextProvider = ({ children }) => {
    const [ users, setUsers] = useState<[] | UserProps[]>([]);
    const [ user, setUser] = useState<{} | UserProps>({});
    const [ repos, setRepos] = useState<[] | RepoProps[]>([]);
    const [ loading, setLoading] = useState<Boolean>(false)
    
    return (
        <GlobalContext.Provider value={{ repos, setRepos, user, setUser, users, setUsers, loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);