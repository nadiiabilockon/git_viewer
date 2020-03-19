export interface User {
    name: string;
    login: string;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url: string;
    bio: string;
}

export interface UserDetails {
    name: string;
    login: string;
    avatar_url: string;
    default_branch: string;
    language: string;
}

export interface Commit {
    commit: {
        message: string;
    };
}

export interface Branch {
    name: string;
}

export interface ServerResponse<T> {
    data: T;
}
