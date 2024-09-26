import React from 'react';
import { Post as PostType } from '../types/general';

const Post: React.FC<PostType> = ({ author, content, likes, comments }) => {
    return (
      <div className="bg-background3 p-4 mb-2 rounded-lg shadow">
        <h3 className="font-bold text-lg">{author}</h3>
        <p className="mt-2">{content}</p>
        <div className="mt-4 flex justify-between text-gray-500">
          <span>{likes} likes</span>
          <span>{comments} comments</span>
        </div>
      </div>
    );
};

export default Post;