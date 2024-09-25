export interface Post {
    id: number;
    author: string;
    content: string;
    likes: number;
    comments: number;
  }

  export interface Follower {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
    isFollowing: boolean;
  }