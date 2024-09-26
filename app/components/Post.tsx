import React from 'react';
import { Post as PostType } from '../types/general';
import { Heart, MessageCircle } from 'lucide-react';
import { getReadableTimestamp, getRelativeTime } from '@/lib/utils';

const Post: React.FC<PostType> = ({ author, username, avatarUrl, content, likes, comments, createdAt}) => {
    const relativeTime = getRelativeTime(createdAt);
    const readableTimestamp = getReadableTimestamp(createdAt);
    return (
      <div className="bg-background3 p-4 mb-2 rounded-lg shadow">
        <div className='flex'>
            <img src={avatarUrl} alt={author} className="w-12 h-12 rounded-full mr-4" />
            <div className='flex flex-col'>
            <div className='flex space-x-2 items-start text-center'>
                <h3 className="font-bold">{author}</h3>
                <p className="text-gray-500 dark:text-gray-400">{username}</p>
                <p className='text-gray-500 dark:text-gray-400'>·</p>
                <span 
                className='text-gray-500 dark:text-gray-400' 
                title={readableTimestamp}
                >
                {relativeTime}
                </span>
            </div>
                <p className="mt-2">{content}</p>
            </div>
        </div>
        <div className="mt-4 flex justify-between text-gray-500">
          <button className='flex space-x-1 hover:text-red-500'>
            <Heart/>
            <span>{likes} likes</span>
          </button>
          <button className='flex space-x-1 hover:text-blue-500'>
            <MessageCircle/>
            <span>{comments} comments</span>
          </button>
        </div>
      </div>
    );
};

export default Post;