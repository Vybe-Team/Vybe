import { Follower, Post } from "@/app/types/general";


export const mockPosts: Post[] = [
  {
    id: 1,
    author: "moody",
    content: "My cat is being such a ",
    likes: 15,
    comments: 3
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "Hawk tuah!",
    likes: 24,
    comments: 7
  },
  {
    id: 3,
    author: "Bobby",
    content: "So what's the big idea?",
    likes: 32,
    comments: 5
  }
];


export const mockFollowers: Follower[] = [
  {
    id: 1,
    name: "wompwomp",
    username: "@moody",
    avatarUrl: "/404.webp",
    isFollowing: true
  },
  {
    id: 2,
    name: "Area",
    username: "@.area",
    avatarUrl: "/404.webp",
    isFollowing: false
  },
  {
    id: 3,
    name: "Barack Obama",
    username: "@obama",
    avatarUrl: "/404.webp",
    isFollowing: true
  }
];