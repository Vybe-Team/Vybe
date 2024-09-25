import React from 'react';
import Post from './Post';
import { Post as PostType } from '../types/general';

interface PostsProps {
  posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="mx-auto mt-2">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;