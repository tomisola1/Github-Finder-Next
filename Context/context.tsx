import { ContextProps, RepoProps, UserProps } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";


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

interface MyComponentProps {
    children: ReactNode;
  }

export const GlobalContextProvider:React.FC<MyComponentProps> = ({ children }) => {
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