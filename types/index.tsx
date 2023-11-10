import { Dispatch, SetStateAction } from "react";

export interface UserProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface ContextProps {
  error: String | "";
  setError: Dispatch<SetStateAction<String>>;
  repos: RepoProps[] | [];
  setRepos: Dispatch<SetStateAction<RepoProps[]>>;
  user: UserProps | {};
  setUser: Dispatch<SetStateAction<UserProps>>;
  users: UserProps[] | [];
  setUsers: Dispatch<SetStateAction<UserProps[]>>;
  loading: Boolean;
  setLoading: Dispatch<SetStateAction<Boolean>>;
  searched: Boolean;
  setSearched: Dispatch<SetStateAction<Boolean>>;
}

export interface RepoProps {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: UserProps;
  html_url: string;
  description: null | string;
}

export interface UserDetailProps {
  avatar_url: string;
  followers: number;
  following: number;
  id: number;
  login: string;
  name: string;

}
