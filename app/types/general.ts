export interface Post {
    id: number;
    author: string;
    username: string; 
    avatarUrl:string;
    content: string;
    likes: number;
    comments: number;
    createdAt: string;
  }

  export interface Follower {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
    isFollowing: boolean;
  }