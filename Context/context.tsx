import { ContextProps, RepoProps, UserDetailProps, UserProps } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";


export const GlobalContext = createContext<ContextProps>({
    text: "",
    setText: ():string => "",
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
    const [ user, setUser] = useState<UserProps>({} as UserProps);
    const [ repos, setRepos] = useState<[] | RepoProps[]>([]);
    const [ loading, setLoading] = useState<Boolean>(false)
    const [ searched, setSearched] = useState<Boolean>(false)
    const [ error, setError] = useState<String>("")
    const [ text, setText] = useState<String>("")
    
    return (
        <GlobalContext.Provider value={{ repos, setRepos, user, setUser, users, setUsers, text, setText, loading, setLoading, error, setError, searched, setSearched }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);