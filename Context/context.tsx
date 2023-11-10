import { ContextProps, RepoProps, UserDetailProps, UserProps } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";


export const GlobalContext = createContext<ContextProps>({
    error: "",
    setError: ():string => "",
    repos: [],
    setRepos: ():RepoProps[] => [],
    user: {} as UserProps,
    setUser: () => {},
    users: [],
    setUsers: ():UserProps[] => [],
    loading: false,
    setLoading: () => {},
    searched: false,
    setSearched: () => {}
})

interface MyComponentProps {
    children: ReactNode;
  }

export const GlobalContextProvider:React.FC<MyComponentProps> = ({ children }) => {
    const [ users, setUsers] = useState<[] | UserProps[]>([]);
    const [ user, setUser] = useState<{} | UserProps>({});
    const [ repos, setRepos] = useState<[] | RepoProps[]>([]);
    const [ loading, setLoading] = useState<Boolean>(false)
    const [ searched, setSearched] = useState<Boolean>(false)
    const [ error, setError] = useState<String>("")
    
    return (
        <GlobalContext.Provider value={{ repos, setRepos, user, setUser, users, setUsers, loading, setLoading, error, setError, searched, setSearched }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);