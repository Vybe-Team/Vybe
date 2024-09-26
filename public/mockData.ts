import { Follower, Post } from "@/app/types/general";


export const mockPosts: Post[] = [
  {
    id: 1,
    author: "wompwomp",
    username: "@moody",
    avatarUrl: "/404.webp",
    content: "My cat is being such a ",
    likes: 15,
    comments: 3,
    createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    author: "Jane Smith",
    username: "@jane_s",
    avatarUrl: "/404.webp",
    content: "Hawk tuah!",
    likes: 24,
    comments: 7,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    author: "Bobby",
    username: "@bob",
    avatarUrl: "/404.webp",
    content: "So what's the big idea?",
    likes: 32,
    comments: 5,
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
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