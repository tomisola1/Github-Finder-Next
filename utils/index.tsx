import axios from 'axios';


const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || '';
const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const github = axios.create({
    baseURL: githubUrl,
    headers: { Authorization: `token ${githubToken}` },
  });
  

export const getSearchedUser = async(text:string) => {
    
    const params = new URLSearchParams({
        q: text
    })
    
    const response = await github.get(`/search/users?${params}`)
    return response.data;
}

export const getUser = async(text:string) => {
    const response = await github.get(`/users/${text}`)
    return response.data;
}